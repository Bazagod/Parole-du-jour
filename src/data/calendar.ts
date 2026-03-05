/**
 * Liturgical Calendar Computation
 * Computes Easter, liturgical year (A/B/C), and maps any date to its liturgical day.
 */

export type LiturgicalYear = "A" | "B" | "C";

export interface LiturgicalDay {
  key: string; // e.g. "lent-2-wed", "advent-1-sun", "ot-5-sun", "feast-12-25"
  title: string;
  season: string;
  liturgicalColor: "green" | "white" | "red" | "purple" | "rose" | "gold";
  saintOfDay?: string;
  year: LiturgicalYear;
}

/** Compute Easter Sunday for a given year using the Anonymous Gregorian algorithm */
export function computeEaster(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

/** Get the first Sunday of Advent for a given year */
export function getAdventStart(year: number): Date {
  const christmas = new Date(year, 11, 25);
  const christmasDow = christmas.getDay();
  const daysToSunday = christmasDow === 0 ? 7 : christmasDow;
  const advent4 = new Date(year, 11, 25 - daysToSunday);
  return new Date(advent4.getFullYear(), advent4.getMonth(), advent4.getDate() - 21);
}

/** Determine the liturgical year (A/B/C) for a given date */
export function getLiturgicalYear(date: Date): LiturgicalYear {
  const year = date.getFullYear();
  const adventStart = getAdventStart(year);

  const effectiveYear = date >= adventStart ? year : year - 1;

  const mod = effectiveYear % 3;
  if (mod === 0) return "A";
  if (mod === 1) return "B";
  return "C";
}

function diffDays(a: Date, b: Date): number {
  const msPerDay = 86400000;
  const utcA = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utcB = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.round((utcA - utcB) / msPerDay);
}

function addDaysToDate(d: Date, n: number): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}

function getDayOfWeekFr(dow: number): string {
  return ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"][dow];
}

const weekdayNamesFr: Record<number, string> = {
  0: "dim", 1: "lun", 2: "mar", 3: "mer", 4: "jeu", 5: "ven", 6: "sam",
};

const saints: Record<string, string> = {
  "01-01": "Sainte Marie, M\u00e8re de Dieu",
  "01-02": "Saints Basile le Grand et Gr\u00e9goire de Nazianze",
  "01-06": "\u00c9piphanie du Seigneur",
  "01-17": "Saint Antoine",
  "01-21": "Sainte Agn\u00e8s",
  "01-25": "Conversion de Saint Paul",
  "01-28": "Saint Thomas d\u2019Aquin",
  "02-02": "Pr\u00e9sentation du Seigneur",
  "02-11": "Notre-Dame de Lourdes",
  "02-22": "Chaire de Saint Pierre",
  "03-04": "Saint Casimir",
  "03-07": "Saintes Perp\u00e9tue et F\u00e9licit\u00e9",
  "03-17": "Saint Patrick",
  "03-19": "Saint Joseph",
  "03-25": "Annonciation du Seigneur",
  "04-25": "Saint Marc",
  "05-01": "Saint Joseph Travailleur",
  "05-03": "Saints Philippe et Jacques",
  "05-14": "Saint Matthias",
  "05-31": "Visitation de la Vierge Marie",
  "06-11": "Saint Barnab\u00e9",
  "06-24": "Nativit\u00e9 de Saint Jean-Baptiste",
  "06-29": "Saints Pierre et Paul",
  "07-03": "Saint Thomas",
  "07-22": "Sainte Marie-Madeleine",
  "07-25": "Saint Jacques",
  "08-06": "Transfiguration du Seigneur",
  "08-10": "Saint Laurent",
  "08-15": "Assomption de la Vierge Marie",
  "08-24": "Saint Bartholom\u00e9",
  "09-08": "Nativit\u00e9 de la Vierge Marie",
  "09-14": "La Croix Glorieuse",
  "09-21": "Saint Matthieu",
  "09-29": "Saints Michel, Gabriel et Rapha\u00ebl",
  "10-04": "Saint Fran\u00e7ois d\u2019Assise",
  "10-07": "Notre-Dame du Rosaire",
  "10-18": "Saint Luc",
  "10-28": "Saints Simon et Jude",
  "11-01": "Tous les Saints",
  "11-02": "Comm\u00e9moration des fid\u00e8les d\u00e9funts",
  "11-09": "D\u00e9dicace de la Basilique du Latran",
  "11-21": "Pr\u00e9sentation de la Vierge Marie",
  "12-08": "Immacul\u00e9e Conception",
  "12-25": "Nativit\u00e9 du Seigneur",
  "12-26": "Saint \u00c9tienne",
  "12-27": "Saint Jean",
  "12-28": "Saints Innocents",
};

/** Fixed solemnities that override the temporal cycle */
const fixedSolemnities = new Set([
  "01-01", "01-06", "02-02", "03-19", "03-25",
  "06-24", "06-29", "08-15", "09-14", "11-01",
  "11-02", "12-08", "12-25",
]);

/**
 * Determine the liturgical day for any given date.
 * Handles moveable feasts (Easter-based), Advent, Lent, Ordinary Time, and fixed feasts.
 */
export function getLiturgicalDay(date: Date): LiturgicalDay {
  const year = date.getFullYear();
  const litYear = getLiturgicalYear(date);
  const dow = date.getDay();
  const dowKey = weekdayNamesFr[dow];
  const dowName = getDayOfWeekFr(dow);

  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const dateKey = `${mm}-${dd}`;

  const easter = computeEaster(year);
  const daysFromEaster = diffDays(date, easter);

  const ashWednesday = addDaysToDate(easter, -46);
  const daysFromAsh = diffDays(date, ashWednesday);

  const adventStart = getAdventStart(year);
  const daysFromAdvent = diffDays(date, adventStart);

  const saintOfDay = saints[dateKey];

  // === FIXED SOLEMNITIES ===
  if (dateKey === "12-25") {
    return { key: "feast-12-25", title: "Nativit\u00e9 du Seigneur \u2013 No\u00ebl", season: "Temps de No\u00ebl", liturgicalColor: "gold", saintOfDay, year: litYear };
  }
  if (dateKey === "01-01") {
    return { key: "feast-01-01", title: "Solennit\u00e9 de Marie, M\u00e8re de Dieu", season: "Temps de No\u00ebl", liturgicalColor: "white", saintOfDay, year: litYear };
  }
  if (dateKey === "01-06") {
    return { key: "feast-01-06", title: "\u00c9piphanie du Seigneur", season: "Temps de No\u00ebl", liturgicalColor: "white", saintOfDay, year: litYear };
  }
  if (dateKey === "02-02") {
    return { key: "feast-02-02", title: "Pr\u00e9sentation du Seigneur", season: "Temps Ordinaire", liturgicalColor: "white", saintOfDay, year: litYear };
  }
  if (dateKey === "03-19" && daysFromEaster < -7) {
    return { key: "feast-03-19", title: "Solennit\u00e9 de Saint Joseph", season: "Car\u00eame", liturgicalColor: "white", saintOfDay, year: litYear };
  }
  if (dateKey === "03-25" && daysFromEaster < -7) {
    return { key: "feast-03-25", title: "Annonciation du Seigneur", season: "Car\u00eame", liturgicalColor: "white", saintOfDay, year: litYear };
  }
  if (dateKey === "06-29") {
    return { key: "feast-06-29", title: "Saints Pierre et Paul", season: "Temps Ordinaire", liturgicalColor: "red", saintOfDay, year: litYear };
  }
  if (dateKey === "08-15") {
    return { key: "feast-08-15", title: "Assomption de la Vierge Marie", season: "Temps Ordinaire", liturgicalColor: "white", saintOfDay, year: litYear };
  }
  if (dateKey === "09-14") {
    return { key: "feast-09-14", title: "La Croix Glorieuse", season: "Temps Ordinaire", liturgicalColor: "red", saintOfDay, year: litYear };
  }
  if (dateKey === "11-01") {
    return { key: "feast-11-01", title: "Toussaint", season: "Temps Ordinaire", liturgicalColor: "white", saintOfDay, year: litYear };
  }
  if (dateKey === "11-02") {
    return { key: "feast-11-02", title: "Comm\u00e9moration des d\u00e9funts", season: "Temps Ordinaire", liturgicalColor: "purple", saintOfDay, year: litYear };
  }
  if (dateKey === "12-08") {
    return { key: "feast-12-08", title: "Immacul\u00e9e Conception", season: "Avent", liturgicalColor: "white", saintOfDay, year: litYear };
  }

  // === TRIDUUM PASCAL ===
  if (daysFromEaster === -3) {
    return { key: "triduum-thu", title: "Jeudi Saint \u2013 La C\u00e8ne du Seigneur", season: "Triduum Pascal", liturgicalColor: "white", year: litYear };
  }
  if (daysFromEaster === -2) {
    return { key: "triduum-fri", title: "Vendredi Saint \u2013 Passion du Seigneur", season: "Triduum Pascal", liturgicalColor: "red", year: litYear };
  }
  if (daysFromEaster === -1) {
    return { key: "triduum-sat", title: "Samedi Saint \u2013 Veill\u00e9e Pascale", season: "Triduum Pascal", liturgicalColor: "white", year: litYear };
  }
  if (daysFromEaster === 0) {
    return { key: "easter-sun", title: "Dimanche de P\u00e2ques \u2013 R\u00e9surrection du Seigneur", season: "Temps Pascal", liturgicalColor: "gold", year: litYear };
  }

  // === TEMPS PASCAL (Easter to Pentecost) ===
  if (daysFromEaster > 0 && daysFromEaster <= 49) {
    const weekNum = Math.floor((daysFromEaster - 1) / 7) + 2;
    if (daysFromEaster === 39) {
      return { key: "ascension", title: "Ascension du Seigneur", season: "Temps Pascal", liturgicalColor: "white", year: litYear };
    }
    if (daysFromEaster === 49) {
      return { key: "pentecost-sun", title: "Dimanche de la Pentec\u00f4te", season: "Temps Pascal", liturgicalColor: "red", year: litYear };
    }
    if (dow === 0) {
      return { key: `easter-${weekNum}-sun`, title: `${weekNum}\u00e8me Dimanche de P\u00e2ques`, season: "Temps Pascal", liturgicalColor: "white", year: litYear };
    }
    return {
      key: `easter-${weekNum}-${dowKey}`,
      title: `${dowName} de la ${weekNum}\u00e8me semaine de P\u00e2ques`,
      season: "Temps Pascal", liturgicalColor: "white", saintOfDay, year: litYear,
    };
  }

  // === SEMAINE SAINTE ===
  if (daysFromEaster >= -7 && daysFromEaster <= -4) {
    if (daysFromEaster === -7) {
      return { key: "palm-sun", title: "Dimanche des Rameaux et de la Passion", season: "Semaine Sainte", liturgicalColor: "red", year: litYear };
    }
    const dayNames: Record<number, string> = { [-6]: "Lundi", [-5]: "Mardi", [-4]: "Mercredi" };
    return {
      key: `holy-week-${dowKey}`,
      title: `${dayNames[daysFromEaster]} Saint`,
      season: "Semaine Sainte", liturgicalColor: "purple", year: litYear,
    };
  }

  // === CAR\u00caME ===
  if (daysFromAsh >= 0 && daysFromEaster < -7) {
    if (daysFromAsh === 0) {
      return { key: "ash-wed", title: "Mercredi des Cendres", season: "Car\u00eame", liturgicalColor: "purple", year: litYear };
    }
    if (daysFromAsh <= 3) {
      const names: Record<number, string> = { 1: "Jeudi", 2: "Vendredi", 3: "Samedi" };
      return {
        key: `ash-${weekdayNamesFr[date.getDay()]}`,
        title: `${names[daysFromAsh]} apr\u00e8s les Cendres`,
        season: "Car\u00eame", liturgicalColor: "purple", saintOfDay, year: litYear,
      };
    }
    const lentWeek = Math.floor((daysFromAsh - 4) / 7) + 1;
    const ordinals = ["", "1\u00e8re", "2\u00e8me", "3\u00e8me", "4\u00e8me", "5\u00e8me"];
    const color = lentWeek === 4 && dow === 0 ? "rose" as const : "purple" as const;
    if (dow === 0) {
      const suffix = lentWeek === 4 ? " (Laetare)" : "";
      return {
        key: `lent-${lentWeek}-sun`,
        title: `${lentWeek === 1 ? "1er" : ordinals[lentWeek]} Dimanche de Car\u00eame${suffix}`,
        season: "Car\u00eame", liturgicalColor: color, saintOfDay, year: litYear,
      };
    }
    return {
      key: `lent-${lentWeek}-${dowKey}`,
      title: `${dowName} de la ${ordinals[lentWeek]} semaine de Car\u00eame`,
      season: "Car\u00eame", liturgicalColor: "purple", saintOfDay, year: litYear,
    };
  }

  // === AVENT ===
  if (daysFromAdvent >= 0 && daysFromAdvent < 28 && date.getMonth() >= 10) {
    const adventWeek = Math.floor(daysFromAdvent / 7) + 1;
    const color = adventWeek === 3 && dow === 0 ? "rose" as const : "purple" as const;
    if (dow === 0) {
      const suffix = adventWeek === 3 ? " (Gaudete)" : "";
      return {
        key: `advent-${adventWeek}-sun`,
        title: `${adventWeek === 1 ? "1er" : adventWeek + "\u00e8me"} Dimanche de l\u2019Avent${suffix}`,
        season: "Avent", liturgicalColor: color, saintOfDay, year: litYear,
      };
    }
    return {
      key: `advent-${adventWeek}-${dowKey}`,
      title: `${dowName} de la ${adventWeek === 1 ? "1\u00e8re" : adventWeek + "\u00e8me"} semaine de l\u2019Avent`,
      season: "Avent", liturgicalColor: "purple", saintOfDay, year: litYear,
    };
  }

  // === TEMPS DE NO\u00cbL (Dec 25 - Baptism of Lord) ===
  if (date.getMonth() === 11 && date.getDate() >= 25) {
    return {
      key: `christmas-${dowKey}-${date.getDate()}`,
      title: `${dowName} dans l\u2019Octave de No\u00ebl`,
      season: "Temps de No\u00ebl", liturgicalColor: "white", saintOfDay, year: litYear,
    };
  }
  if (date.getMonth() === 0 && date.getDate() <= 12) {
    return {
      key: `christmas-post-${dowKey}-${date.getDate()}`,
      title: `${dowName} du Temps de No\u00ebl`,
      season: "Temps de No\u00ebl", liturgicalColor: "white", saintOfDay, year: litYear,
    };
  }

  // === Post-Pentecost special Sundays ===
  if (daysFromEaster === 56 && dow === 0) {
    return { key: "trinity-sun", title: "Solennit\u00e9 de la Sainte Trinit\u00e9", season: "Temps Ordinaire", liturgicalColor: "white", year: litYear };
  }
  if (daysFromEaster === 63 && dow === 0) {
    return { key: "corpus-sun", title: "Solennit\u00e9 du Saint-Sacrement", season: "Temps Ordinaire", liturgicalColor: "white", year: litYear };
  }
  if (daysFromEaster === 68) {
    return { key: "sacred-heart", title: "Sacr\u00e9-C\u0153ur de J\u00e9sus", season: "Temps Ordinaire", liturgicalColor: "white", year: litYear };
  }

  // Check if this is the last Sunday before Advent (Christ the King)
  const nextAdventStart = getAdventStart(year);
  if (dow === 0 && diffDays(nextAdventStart, date) > 0 && diffDays(nextAdventStart, date) <= 7) {
    return { key: "christ-king-sun", title: "Christ, Roi de l\u2019Univers", season: "Temps Ordinaire", liturgicalColor: "white", year: litYear };
  }

  // === TEMPS ORDINAIRE ===
  // Compute OT week number
  let otWeek: number;
  if (date < ashWednesday) {
    // Before Lent: count from Baptism of the Lord
    const jan7 = new Date(year, 0, 7);
    const baptismDow = jan7.getDay();
    const baptism = baptismDow === 0 ? jan7 : new Date(year, 0, 7 + (7 - baptismDow));
    otWeek = Math.floor(diffDays(date, baptism) / 7) + 1;
    if (otWeek < 1) otWeek = 1;
  } else {
    // After Pentecost: count backwards from Advent
    const nextAdvent = getAdventStart(year);
    const weeksToAdvent = Math.floor(diffDays(nextAdvent, date) / 7);
    otWeek = 34 - weeksToAdvent;
    if (otWeek < 1) otWeek = 1;
    if (otWeek > 34) otWeek = 34;
  }

  if (dow === 0) {
    return {
      key: `ot-${otWeek}-sun`,
      title: `${otWeek}\u00e8me Dimanche du Temps Ordinaire`,
      season: "Temps Ordinaire", liturgicalColor: "green", saintOfDay, year: litYear,
    };
  }

  return {
    key: `ot-${otWeek}-${dowKey}`,
    title: `${dowName} de la ${otWeek}\u00e8me semaine du Temps Ordinaire`,
    season: "Temps Ordinaire", liturgicalColor: "green", saintOfDay, year: litYear,
  };
}
