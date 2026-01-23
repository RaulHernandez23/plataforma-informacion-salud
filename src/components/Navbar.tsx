"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Panorama general", href: "/general" },
  { label: "Veracruz", href: "/veracruz" },
  { label: "Causas de interés", href: "/causas" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">


        {/* NAV */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          {navItems.map(item => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  active
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}
