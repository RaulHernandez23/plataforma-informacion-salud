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

export const metadata: Metadata = {
  title: "PIS",
  description: "Plataforma de información de en salud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 flex flex-col">
        
        {/* HEADER: siempre visible */}
        <Header />

        {/* CONTENIDO VARIABLE (cada page.tsx) */}
        <main className="flex-1 flex items-center justify-center p-6">
          {children}
        </main>

        {/* FOOTER: siempre visible */}
        <Footer />

      </body>
    </html>
  );
}
