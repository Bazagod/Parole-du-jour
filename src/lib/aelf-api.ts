import type { ReadingSet, Reading, DailyReading } from "@/data/readings";

interface AELFLecture {
  type: string;
  ref: string;
  contenu: string;
  refrain_psalmique: string;
  intro_lue: string;
}

interface AELFResponse {
  informations: {
    date: string;
    zone: string;
    couleur: string;
    temps_liturgique: string;
    semaine: string;
    jour: string;
    jour_liturgique_nom: string;
    fete: string;
    ligne1: string;
    ligne2: string;
    ligne3: string;
  };
  messes: Array<{
    nom: string;
    lectures: AELFLecture[];
  }>;
}

function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>\s*<p>/gi, "\n\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&laquo;/g, "«")
    .replace(/&raquo;/g, "»")
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&lsquo;/g, "\u2018")
    .replace(/&ldquo;/g, "\u201C")
    .replace(/&rdquo;/g, "\u201D")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&amp;/g, "&")
    .replace(/&#?\w+;/g, "")
    .replace(/\u2013 Parole du Seigneur\./g, "")
    .replace(/\u2013 Acclamons la Parole de Dieu\./g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function mapColor(couleur: string): DailyReading["liturgicalColor"] {
  const map: Record<string, DailyReading["liturgicalColor"]> = {
    vert: "green",
    blanc: "white",
    rouge: "red",
    violet: "purple",
    rose: "rose",
    or: "gold",
  };
  return map[couleur] || "green";
}

function mapSeason(temps: string): string {
  const map: Record<string, string> = {
    avent: "Avent",
    noel: "Temps de Noël",
    ordinaire: "Temps Ordinaire",
    careme: "Carême",
    pascale: "Temps Pascal",
  };
  return map[temps] || temps;
}

function parseLectures(lectures: AELFLecture[]): ReadingSet {
  let firstReading: Reading = { reference: "", text: "" };
  let psalm: Reading = { reference: "", text: "" };
  let gospel: Reading = { reference: "", text: "" };
  let secondReading: Reading | undefined;

  for (const l of lectures) {
    const text = stripHtml(l.contenu);
    const ref = l.ref || "";

    switch (l.type) {
      case "lecture_1":
        firstReading = { reference: ref, text };
        break;
      case "lecture_2":
        secondReading = { reference: ref, text };
        break;
      case "psaume": {
        const refrain = l.refrain_psalmique
          ? stripHtml(l.refrain_psalmique)
          : "";
        const psalmText = refrain ? `R/ ${refrain}\n\n${text}` : text;
        psalm = { reference: ref, text: psalmText };
        break;
      }
      case "evangile":
        gospel = { reference: ref, text };
        break;
    }
  }

  const result: ReadingSet = { firstReading, psalm, gospel };
  if (secondReading) result.secondReading = secondReading;
  return result;
}

function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export async function fetchAELFReadings(
  date: Date,
): Promise<DailyReading | null> {
  try {
    const dateStr = formatDate(date);
    const res = await fetch(`https://api.aelf.org/v1/messes/${dateStr}`, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) return null;

    const data: AELFResponse = await res.json();
    const messe = data.messes?.[0];
    if (!messe?.lectures?.length) return null;

    const readingSet = parseLectures(messe.lectures);
    const info = data.informations;

    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    const title =
      info.jour_liturgique_nom !== "de la férie"
        ? info.jour_liturgique_nom
        : info.ligne1;

    return {
      date: `${mm}-${dd}`,
      title: title || info.ligne1,
      liturgicalColor: mapColor(info.couleur),
      season: mapSeason(info.temps_liturgique),
      firstReading: readingSet.firstReading,
      psalm: readingSet.psalm,
      gospel: readingSet.gospel,
      secondReading: readingSet.secondReading,
      saintOfDay: info.fete || undefined,
    };
  } catch {
    return null;
  }
}
