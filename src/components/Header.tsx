"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 h-16 flex items-center shadow-sm">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo_uv.svg"
          alt="Logo Universidad Veracruzana"
          width={40}
          height={40}
          priority
        />
        <h1 className="text-xl font-bold text-slate-800">
          Plataforma de Información en Salud (PIS)
        </h1>
      </Link>
    </header>
  );
}
