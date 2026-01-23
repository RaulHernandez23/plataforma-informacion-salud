import Link from "next/link";

const dashboards = [
  {
    title: "Panorama general",
    description:
      "Visualización general de los indicadores disponibles en la Plataforma de Información en Salud.",
    href: "/general",
  },
  {
    title: "Análisis estatal · Veracruz",
    description:
      "Indicadores de salud a nivel estatal para el estado de Veracruz.",
    href: "/veracruz",
  },
  {
    title: "Causas de interés",
    description:
      "Indicadores de salud organizados por grupos de causas específicas, como diabetes mellitus.",
    href: "/causas",
  },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
        {dashboards.map(d => (
          <Link
            key={d.title}
            href={d.href}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600">
              {d.title}
            </h2>

            <p className="mt-2 text-sm text-slate-600">{d.description}</p>

            <span className="inline-block mt-4 text-sm font-medium text-blue-600 group-hover:underline">
              Ver dashboard →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
