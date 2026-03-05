import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b45309",
};

export const metadata: Metadata = {
  title: "Parole du Jour – Lectures Liturgiques Catholiques",
  description:
    "Découvrez les lectures liturgiques du jour selon le calendrier de l'Église catholique. Première lecture, Psaume et Évangile quotidiens.",
  keywords: [
    "bible",
    "catholique",
    "lectures liturgiques",
    "parole de dieu",
    "évangile du jour",
    "psaume",
    "messe",
    "calendrier liturgique",
  ],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
