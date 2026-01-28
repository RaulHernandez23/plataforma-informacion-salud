import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENIDO VARIABLE (cada page.tsx) */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1920px] mx-auto h-full flex flex-col">
          <div className="flex-1 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden relative flex flex-col">
{children}
          </div>
          </div>
          
        </main>

        {/* FOOTER: siempre visible */}
        <Footer />

      </body>
    </html>
  );
}
