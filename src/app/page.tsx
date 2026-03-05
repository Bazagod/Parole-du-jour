"use client";

import DailyReadings from "@/components/DailyReadings";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,160,36,0.15),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-amber-100">Lectures Liturgiques Quotidiennes</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">La Parole de</span>
              <span className="block bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent animate-shimmer">
                Dieu
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-amber-200/80 mt-2">
                pour chaque jour
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-amber-100/80 leading-relaxed">
              Découvrez les trois lectures du jour selon le calendrier liturgique
              de l&apos;Église catholique : Première Lecture, Psaume et Évangile.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#lectures"
                className="group flex items-center gap-2 px-8 py-3.5 bg-white text-amber-900 rounded-xl font-semibold hover:bg-amber-50 transition-all shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 active:scale-95"
              >
                <BookOpen className="w-5 h-5" />
                Lire les lectures du jour
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/calendrier"
                className="flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all active:scale-95"
              >
                Voir le calendrier
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fffbf0] to-transparent" />
      </section>

      <section id="lectures" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <DailyReadings />
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Les Lectures de la Messe
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Chaque jour, l&apos;Église nous propose des textes de la Parole de Dieu pour nourrir notre foi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Première Lecture",
              description: "Tirée de l'Ancien ou du Nouveau Testament, elle prépare notre cœur à recevoir l'Évangile.",
              color: "from-blue-500 to-blue-700",
              bgColor: "bg-blue-50",
              textColor: "text-blue-700",
            },
            {
              title: "Psaume",
              description: "Chant de louange, de supplication ou d'action de grâce, il est la réponse de l'assemblée.",
              color: "from-emerald-500 to-emerald-700",
              bgColor: "bg-emerald-50",
              textColor: "text-emerald-700",
            },
            {
              title: "Évangile",
              description: "Parole du Christ, sommet de la liturgie de la Parole, proclamée par le prêtre ou le diacre.",
              color: "from-amber-500 to-amber-700",
              bgColor: "bg-amber-50",
              textColor: "text-amber-700",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`relative overflow-hidden rounded-2xl ${item.bgColor} p-6 sm:p-8 border border-white shadow-sm hover:shadow-lg transition-all group`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className={`font-bold text-lg mb-2 ${item.textColor}`}>{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
