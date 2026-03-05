"use client";

import { useState, useEffect, useCallback } from "react";
import { addDays, subDays, format } from "date-fns";
import { BookOpen, Music, BookMarked, ScrollText, Loader2 } from "lucide-react";
import {
  getClosestReading,
  getLiturgicalColorBg,
  getLiturgicalColorLabel,
  type DailyReading,
} from "@/data/readings";
import DateNavigator from "./DateNavigator";
import ReadingCard from "./ReadingCard";

function formatDateParam(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function DailyReadings() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [reading, setReading] = useState<DailyReading>(() =>
    getClosestReading(new Date()),
  );
  const [loading, setLoading] = useState(false);

  const fetchReading = useCallback(async (date: Date) => {
    const fallback = getClosestReading(date);
    setReading(fallback);
    setLoading(true);

    try {
      const res = await fetch(
        `/api/readings?date=${formatDateParam(date)}`,
      );
      if (res.ok) {
        const data: DailyReading = await res.json();
        setReading(data);
      }
    } catch {
      // keep fallback
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReading(currentDate);
  }, [currentDate, fetchReading]);

  const handlePrevious = () => setCurrentDate((d) => subDays(d, 1));
  const handleNext = () => setCurrentDate((d) => addDays(d, 1));
  const handleToday = () => setCurrentDate(new Date());

  return (
    <div className="space-y-6 sm:space-y-8">
      <DateNavigator
        currentDate={currentDate}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onToday={handleToday}
      />

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 text-white shadow-2xl">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtNHY2aDR2LTJ6bTAtOGgtMnYyaDJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getLiturgicalColorBg(reading.liturgicalColor)} text-white shadow-lg`}
            >
              <span className="w-2 h-2 rounded-full bg-white/60" />
              {getLiturgicalColorLabel(reading.liturgicalColor)}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">
              {reading.season}
            </span>
            {loading && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/60 border border-white/10">
                <Loader2 className="w-3 h-3 animate-spin" />
                Chargement AELF...
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-3xl font-bold mb-2">
            {reading.title}
          </h2>

          {reading.saintOfDay && (
            <p className="text-amber-300/80 text-sm sm:text-base flex items-center gap-2">
              <span className="text-amber-400">&#10013;</span>
              {reading.saintOfDay}
            </p>
          )}

          {reading.liturgicalYear && (
            <p className="text-white/50 text-xs mt-2 font-medium tracking-wide uppercase">
              {reading.liturgicalYear}
            </p>
          )}
        </div>

        <div className="absolute top-4 right-4 opacity-5">
          <BookOpen className="w-32 h-32" />
        </div>
      </div>

      <div className="space-y-4">
        <ReadingCard
          title="Première Lecture"
          icon={<BookOpen className="w-5 h-5" />}
          reading={reading.firstReading}
          colorClass="from-blue-500 to-blue-700"
          delay={0}
        />

        <ReadingCard
          title="Psaume"
          icon={<Music className="w-5 h-5" />}
          reading={reading.psalm}
          colorClass="from-emerald-500 to-emerald-700"
          delay={100}
        />

        {reading.secondReading && (
          <ReadingCard
            title="Deuxième Lecture"
            icon={<ScrollText className="w-5 h-5" />}
            reading={reading.secondReading}
            colorClass="from-violet-500 to-violet-700"
            delay={200}
          />
        )}

        <ReadingCard
          title="Évangile"
          icon={<BookMarked className="w-5 h-5" />}
          reading={reading.gospel}
          colorClass="from-amber-500 to-amber-700"
          delay={300}
        />
      </div>
    </div>
  );
}
