"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "IDHEDA" },
  { href: "/idheda", label: "Indicadores" },
  { href: "/suive", label: "SUIVE" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 text-sm font-medium">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={`pb-1 border-b-2 transition
            ${pathname === link.href
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
