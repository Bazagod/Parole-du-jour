import { BookOpen, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-amber-100 bg-gradient-to-b from-white to-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-amber-900">Parole du Jour</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Une application conçue pour aider les fidèles à lire la Bible chaque jour en suivant le calendrier liturgique de l&apos;Église catholique.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-gray-500 hover:text-amber-700 transition-colors">
                Lectures du jour
              </Link>
              <Link href="/calendrier" className="text-sm text-gray-500 hover:text-amber-700 transition-colors">
                Calendrier liturgique
              </Link>
              <Link href="/apropos" className="text-sm text-gray-500 hover:text-amber-700 transition-colors">
                À propos
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">À Savoir</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Les lectures sont tirées du lectionnaire de l&apos;Église catholique selon le calendrier liturgique.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Parole du Jour. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-400 flex items-center gap-1">
            Conçu par <span className="font-semibold text-amber-700">Bazagod</span> avec <Heart className="w-3 h-3 text-red-400 fill-red-400" /> pour la gloire de Dieu
          </p>
        </div>
      </div>
    </footer>
  );
}
