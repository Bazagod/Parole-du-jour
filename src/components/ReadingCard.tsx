"use client";

import { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { Reading } from "@/data/readings";
import { cn } from "@/lib/utils";

interface ReadingCardProps {
  title: string;
  icon: React.ReactNode;
  reading: Reading;
  colorClass: string;
  delay?: number;
}

export default function ReadingCard({ title, icon, reading, colorClass, delay = 0 }: ReadingCardProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={cn("absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b", colorClass)} />

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
      >
        <div className="flex items-center gap-3">
          <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-md", colorClass)}>
            {icon}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">{reading.reference}</p>
          </div>
        </div>
        <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {expanded && (
        <div className="px-5 sm:px-6 pb-6">
          <div className="pl-[52px]">
            <div className="relative">
              <div className="absolute -left-6 top-0 text-6xl text-amber-200/50 font-serif leading-none select-none">
                &ldquo;
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-line relative z-10">
                {reading.text}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
