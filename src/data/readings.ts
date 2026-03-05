export interface Reading {
  reference: string;
  text: string;
}

export interface ReadingSet {
  firstReading: Reading;
  psalm: Reading;
  gospel: Reading;
  secondReading?: Reading;
}

export interface DailyReading {
  date: string;
  title: string;
  liturgicalColor: "green" | "white" | "red" | "purple" | "rose" | "gold";
  season: string;
  firstReading: Reading;
  psalm: Reading;
  gospel: Reading;
  secondReading?: Reading;
  saintOfDay?: string;
  liturgicalYear?: string;
}

import { getLiturgicalDay, type LiturgicalDay } from "./calendar";
import { sundaysYearA } from "./sundays-a";
import { sundaysYearB } from "./sundays-b";
import { sundaysYearC } from "./sundays-c";
import { lentWeekdays } from "./weekdays-lent";
import { adventWeekdays, feastReadings } from "./weekdays-advent-feasts";

const sundaysByYear: Record<string, Record<string, ReadingSet>> = {
  A: sundaysYearA,
  B: sundaysYearB,
  C: sundaysYearC,
};

function findReadingSet(day: LiturgicalDay): ReadingSet | null {
  const { key, year } = day;

  // 1. Check fixed feasts
  if (key.startsWith("feast-") && feastReadings[key]) {
    return feastReadings[key];
  }

  // 2. Check Sunday readings (year-specific)
  const sundays = sundaysByYear[year];
  if (sundays && sundays[key]) {
    return sundays[key];
  }

  // 3. Check Lent weekday readings
  if (lentWeekdays[key]) {
    return lentWeekdays[key];
  }

  // 4. Check Advent weekday readings
  if (adventWeekdays[key]) {
    return adventWeekdays[key];
  }

  // 5. For keys that might match across all Sunday year sets (Easter, Pentecost, etc.)
  for (const yr of ["A", "B", "C"] as const) {
    if (sundaysByYear[yr][key]) {
      return sundaysByYear[yr][key];
    }
  }

  // 6. Check Lent/Holy Week readings that may use alternate keys
  if (key.startsWith("holy-week-") || key.startsWith("triduum-") || key === "easter-sun") {
    if (lentWeekdays[key]) return lentWeekdays[key];
  }

  return null;
}

const defaultReading: ReadingSet = {
  firstReading: {
    reference: "Psaume 118 (119), 105",
    text: `Ta parole est la lumi\u00e8re de mes pas, la lampe de ma route. Seigneur, enseigne-moi tes voies, fais-moi conna\u00eetre ta route.`,
  },
  psalm: {
    reference: "Psaume 118 (119)",
    text: `Heureux les hommes int\u00e8gres dans leurs voies, qui marchent suivant la loi du Seigneur ! De tout mon c\u0153ur, je te cherche ; garde-moi de fuir tes volont\u00e9s.`,
  },
  gospel: {
    reference: "Jean 1, 1-5",
    text: `Au commencement \u00e9tait le Verbe, et le Verbe \u00e9tait aupr\u00e8s de Dieu, et le Verbe \u00e9tait Dieu. En lui \u00e9tait la vie, et la vie \u00e9tait la lumi\u00e8re des hommes.`,
  },
};

/** Resolve the daily reading for any given date */
export function getReadingForDate(date: Date): DailyReading {
  const day = getLiturgicalDay(date);
  const readingSet = findReadingSet(day) || defaultReading;

  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return {
    date: `${mm}-${dd}`,
    title: day.title,
    liturgicalColor: day.liturgicalColor,
    season: day.season,
    firstReading: readingSet.firstReading,
    psalm: readingSet.psalm,
    gospel: readingSet.gospel,
    secondReading: readingSet.secondReading,
    saintOfDay: day.saintOfDay,
    liturgicalYear: `Ann\u00e9e ${day.year}`,
  };
}

/** Get the closest reading (same as getReadingForDate now that we compute dynamically) */
export function getClosestReading(date: Date): DailyReading {
  return getReadingForDate(date);
}

/** Get all available readings for calendar display - returns readings for current month */
export function getReadingsForMonth(year: number, month: number): DailyReading[] {
  const readings: DailyReading[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) {
    readings.push(getReadingForDate(new Date(year, month, d)));
  }
  return readings;
}

export function getLiturgicalColorClass(color: string): string {
  const colors: Record<string, string> = {
    green: "from-emerald-600 to-emerald-800",
    white: "from-amber-100 to-amber-300",
    red: "from-red-700 to-red-900",
    purple: "from-purple-700 to-purple-900",
    rose: "from-pink-400 to-pink-600",
    gold: "from-yellow-500 to-amber-600",
  };
  return colors[color] || colors.green;
}

export function getLiturgicalColorBg(color: string): string {
  const colors: Record<string, string> = {
    green: "bg-emerald-700",
    white: "bg-amber-200",
    red: "bg-red-800",
    purple: "bg-purple-800",
    rose: "bg-pink-500",
    gold: "bg-amber-500",
  };
  return colors[color] || colors.green;
}

export function getLiturgicalColorText(color: string): string {
  const colors: Record<string, string> = {
    green: "text-emerald-700",
    white: "text-amber-700",
    red: "text-red-800",
    purple: "text-purple-800",
    rose: "text-pink-600",
    gold: "text-amber-600",
  };
  return colors[color] || colors.green;
}

export function getLiturgicalColorLabel(color: string): string {
  const labels: Record<string, string> = {
    green: "Vert",
    white: "Blanc",
    red: "Rouge",
    purple: "Violet",
    rose: "Rose",
    gold: "Or",
  };
  return labels[color] || "Vert";
}
