import { format, isToday, isYesterday, isTomorrow } from "date-fns";
import { fr } from "date-fns/locale";

export function formatDateFr(date: Date): string {
  if (isToday(date)) return "Aujourd'hui";
  if (isYesterday(date)) return "Hier";
  if (isTomorrow(date)) return "Demain";
  return format(date, "EEEE d MMMM yyyy", { locale: fr });
}

export function formatDateShort(date: Date): string {
  return format(date, "d MMM", { locale: fr });
}

export function formatDateFull(date: Date): string {
  return format(date, "EEEE d MMMM yyyy", { locale: fr });
}

export function formatMonthYear(date: Date): string {
  return format(date, "MMMM yyyy", { locale: fr });
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
