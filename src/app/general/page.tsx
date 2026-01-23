"use client";

export default function GeneralPage() {
  return (
    <section className="w-full max-w-7xl bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

      {/* HEADER DE LA PÁGINA */}
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
        <h1 className="text-xl font-semibold text-slate-800">
          Panorama general
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Visualización general de los principales indicadores disponibles en la
          Plataforma de Información en Salud.
        </p>
      </div>

      {/* CONTENIDO */}
      <div className="w-full h-[600px] lg:h-[calc(100vh-220px)] bg-slate-100 relative">
        <iframe
          title="Dashboard Panorama General"
          src="AQUÍ_VA_TU_LINK_DE_POWER_BI_GENERAL"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
        />
      </div>

    </section>
  );
}
