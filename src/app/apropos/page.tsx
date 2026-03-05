import { BookOpen, Cross, Heart, Church, Sun, Moon, Star } from "lucide-react";

export default function AproposPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-amber-800 to-amber-900 text-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">À Propos</h1>
          <p className="text-amber-200/80 text-base sm:text-lg max-w-xl mx-auto">
            Découvrez notre mission et la richesse de la liturgie catholique.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white shadow-lg">
              <Cross className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Notre Mission</h2>
          </div>
          <div className="prose prose-gray max-w-none space-y-4">
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Parole du Jour</strong> est une application créée par
              {" "}<strong className="text-amber-700">Bazagod</strong> dans le but d&apos;aider les gens à lire
              la Bible en suivant le calendrier liturgique de l&apos;Église catholique.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Chaque jour, l&apos;Église nous propose un ensemble de lectures tirées de la Bible,
              organisées selon le calendrier liturgique. Ces lectures sont les mêmes qui sont
              proclamées lors de la célébration eucharistique dans toutes les églises catholiques
              du monde. Notre objectif est de rendre ces textes facilement accessibles pour
              permettre à chacun de méditer la Parole de Dieu au quotidien, où qu&apos;il soit.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Les Lectures de la Messe</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                title: "Première Lecture",
                description:
                  "Habituellement tirée de l'Ancien Testament (sauf pendant le Temps Pascal où elle est tirée des Actes des Apôtres), elle prépare les fidèles à accueillir l'Évangile en établissant un lien thématique avec celui-ci.",
                icon: <BookOpen className="w-5 h-5" />,
                color: "from-blue-500 to-blue-700",
              },
              {
                title: "Psaume Responsorial",
                description:
                  "Tiré du Livre des Psaumes, c'est la réponse de l'assemblée à la Première Lecture. Il est chanté ou récité en alternance entre le psalmiste et l'assemblée, avec un refrain que tous reprennent.",
                icon: <Star className="w-5 h-5" />,
                color: "from-emerald-500 to-emerald-700",
              },
              {
                title: "Deuxième Lecture (Dimanches et Solennités)",
                description:
                  "Tirée des Lettres des Apôtres ou de l'Apocalypse, elle est proclamée uniquement les dimanches et lors des solennités. Elle offre un enseignement indépendant du thème des autres lectures.",
                icon: <Sun className="w-5 h-5" />,
                color: "from-violet-500 to-violet-700",
              },
              {
                title: "Évangile",
                description:
                  "Sommet de la liturgie de la Parole, l'Évangile rapporte les paroles et les actes de Jésus Christ. Il est proclamé par le prêtre ou le diacre, debout, et précédé de l'acclamation « Alléluia ».",
                icon: <Moon className="w-5 h-5" />,
                color: "from-amber-500 to-amber-700",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white shadow-lg">
              <Church className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Le Calendrier Liturgique</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Le calendrier liturgique rythme la vie de l&apos;Église tout au long de l&apos;année.
              Il comprend différents temps liturgiques, chacun ayant sa couleur et sa spiritualité propre :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { season: "Avent", color: "bg-purple-800", desc: "Préparation à Noël" },
                { season: "Noël", color: "bg-amber-200", desc: "Naissance du Seigneur" },
                { season: "Carême", color: "bg-purple-800", desc: "Préparation à Pâques" },
                { season: "Semaine Sainte", color: "bg-red-800", desc: "Passion du Christ" },
                { season: "Temps Pascal", color: "bg-amber-200", desc: "Résurrection" },
                { season: "Temps Ordinaire", color: "bg-emerald-700", desc: "Vie quotidienne" },
              ].map((item) => (
                <div
                  key={item.season}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className={`w-4 h-4 rounded-full ${item.color} flex-shrink-0`} />
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">{item.season}</span>
                    <span className="text-gray-500 text-xs ml-2">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center py-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-50 border border-amber-200">
            <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            <p className="text-amber-900 font-medium">
              &laquo; La Parole de Dieu est vivante et efficace &raquo;
              <span className="text-amber-600 text-sm ml-2">— Hébreux 4, 12</span>
            </p>
          </div>
          <p className="text-sm text-gray-400">
            Conçu par <span className="font-semibold text-amber-700">Bazagod</span>
          </p>
        </div>
      </div>
    </div>
  );
}
