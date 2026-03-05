"use client";

import { useState } from "react";
import { addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay, format, isToday } from "date-fns";
import { fr } from "date-fns/locale";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { getReadingForDate, getLiturgicalColorBg } from "@/data/readings";
import { getLiturgicalYear } from "@/data/calendar";
import { formatMonthYear, capitalizeFirst, cn } from "@/lib/utils";

export default function CalendrierPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startDayOfWeek = getDay(monthStart);
  const adjustedStartDay = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

  const litYear = getLiturgicalYear(currentMonth);

  const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const selectedReading = selectedDay ? getReadingForDate(selectedDay) : null;

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-amber-800 to-amber-900 text-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">Calendrier Liturgique</h1>
          <p className="text-amber-200/80 text-base sm:text-lg max-w-xl mx-auto">
            Explorez les lectures de chaque jour du calendrier liturgique catholique.
          </p>
          <span className="inline-block mt-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-amber-100">
            Année liturgique {litYear} &middot; Évangile de {litYear === "A" ? "Matthieu" : litYear === "B" ? "Marc" : "Luc"}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between p-6 sm:p-8 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
            <button
              onClick={() => setCurrentMonth((m) => subMonths(m, 1))}
              className="p-2.5 rounded-xl bg-white border border-amber-200 text-amber-800 hover:bg-amber-100 transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-900">
              {capitalizeFirst(formatMonthYear(currentMonth))}
            </h2>
            <button
              onClick={() => setCurrentMonth((m) => addMonths(m, 1))}
              className="p-2.5 rounded-xl bg-white border border-amber-200 text-amber-800 hover:bg-amber-100 transition-all shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-xs font-bold text-gray-400 uppercase tracking-wider py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: adjustedStartDay }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}

              {daysInMonth.map((day) => {
                const reading = getReadingForDate(day);
                const today = isToday(day);
                const isSelected = selectedDay && day.toDateString() === selectedDay.toDateString();

                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelectedDay(day)}
                    className={cn(
                      "aspect-square rounded-xl flex flex-col items-center justify-center relative transition-all",
                      today && "ring-2 ring-amber-500 ring-offset-2",
                      isSelected && "bg-amber-200 shadow-inner",
                      !isSelected && "hover:bg-amber-50"
                    )}
                  >
                    <span
                      className={cn(
                        "text-sm sm:text-base font-medium",
                        today ? "text-amber-800 font-bold" : "text-gray-700",
                        isSelected && "text-amber-900 font-bold"
                      )}
                    >
                      {format(day, "d")}
                    </span>
                    <div className={cn("w-2 h-2 rounded-full mt-0.5", getLiturgicalColorBg(reading.liturgicalColor))} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {selectedReading && selectedDay && (
          <div className="mt-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className={cn(
                "w-4 h-4 rounded-full",
                getLiturgicalColorBg(selectedReading.liturgicalColor)
              )} />
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{selectedReading.title}</h3>
                <p className="text-sm text-gray-500">
                  {capitalizeFirst(format(selectedDay, "EEEE d MMMM yyyy", { locale: fr }))}
                  {" "}&middot;{" "}{selectedReading.season}
                  {selectedReading.liturgicalYear && ` \u2013 ${selectedReading.liturgicalYear}`}
                </p>
              </div>
            </div>
            {selectedReading.saintOfDay && (
              <p className="text-amber-700 text-sm mb-3 flex items-center gap-1">
                <span>&#10013;</span> {selectedReading.saintOfDay}
              </p>
            )}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg shrink-0">1ère</span>
                <div>
                  <p className="text-sm font-medium text-gray-800">{selectedReading.firstReading.reference}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{selectedReading.firstReading.text}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg shrink-0">Ps.</span>
                <div>
                  <p className="text-sm font-medium text-gray-800">{selectedReading.psalm.reference}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{selectedReading.psalm.text}</p>
                </div>
              </div>
              {selectedReading.secondReading && (
                <div className="flex items-start gap-3">
                  <span className="text-xs font-bold text-violet-600 bg-violet-50 px-2 py-1 rounded-lg shrink-0">2ème</span>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{selectedReading.secondReading.reference}</p>
                    <p className="text-sm text-gray-500 line-clamp-2">{selectedReading.secondReading.text}</p>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-lg shrink-0">Év.</span>
                <div>
                  <p className="text-sm font-medium text-gray-800">{selectedReading.gospel.reference}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{selectedReading.gospel.text}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <span className="text-sm text-gray-500 font-medium">Couleurs liturgiques :</span>
          {[
            { label: "Vert (Ordinaire)", color: "bg-emerald-700" },
            { label: "Blanc (Fêtes)", color: "bg-amber-200" },
            { label: "Rouge (Martyrs)", color: "bg-red-800" },
            { label: "Violet (Pénitence)", color: "bg-purple-800" },
            { label: "Rose (Laetare/Gaudete)", color: "bg-pink-500" },
            { label: "Or (Solennités)", color: "bg-amber-500" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={cn("w-3 h-3 rounded-full", item.color)} />
              <span className="text-xs text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-amber-50 border border-amber-200">
            <BookOpen className="w-5 h-5 text-amber-700" />
            <p className="text-sm text-amber-800">
              <strong>Cycle de 3 ans :</strong> Année A (Matthieu) &middot; Année B (Marc) &middot; Année C (Luc)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
