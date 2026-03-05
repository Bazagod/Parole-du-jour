"use client";

import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { formatDateFr, capitalizeFirst } from "@/lib/utils";
import { isToday } from "date-fns";

interface DateNavigatorProps {
  currentDate: Date;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
}

export default function DateNavigator({ currentDate, onPrevious, onNext, onToday }: DateNavigatorProps) {
  const dateLabel = capitalizeFirst(formatDateFr(currentDate));
  const showTodayButton = !isToday(currentDate);

  return (
    <div className="flex items-center justify-between gap-2 sm:gap-4">
      <button
        onClick={onPrevious}
        className="p-2.5 sm:p-3 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-amber-800 hover:border-amber-300 hover:bg-amber-50 transition-all shadow-sm hover:shadow-md active:scale-95"
        aria-label="Jour précédent"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex-1 text-center">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-900">{dateLabel}</h2>
      </div>

      <div className="flex items-center gap-2">
        {showTodayButton && (
          <button
            onClick={onToday}
            className="p-2.5 sm:p-3 rounded-xl bg-amber-100 border border-amber-200 text-amber-800 hover:bg-amber-200 transition-all shadow-sm hover:shadow-md active:scale-95"
            aria-label="Aujourd'hui"
          >
            <CalendarDays className="w-5 h-5" />
          </button>
        )}
        <button
          onClick={onNext}
          className="p-2.5 sm:p-3 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-amber-800 hover:border-amber-300 hover:bg-amber-50 transition-all shadow-sm hover:shadow-md active:scale-95"
          aria-label="Jour suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
