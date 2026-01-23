"use client";

export default function VeracruzPage() {
  return (
    <section className="w-full max-w-7xl bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

      {/* HEADER DE LA PÁGINA */}
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
        <h1 className="text-xl font-semibold text-slate-800">
          Análisis estatal · Veracruz
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Indicadores de salud a nivel estatal para el estado de Veracruz.
        </p>
      </div>

      {/* CONTENIDO */}
      <div className="w-full h-[600px] lg:h-[calc(100vh-220px)] bg-slate-100 relative">
        <iframe
          title="Dashboard Veracruz"
          src="https://app.powerbi.com/view?r=eyJrIjoiODQxZGM4ZmItNGI3NC00NDU0LThjN2EtOTI3MWVhYzllNmUzIiwidCI6IjNjOTA3NjUxLWQ4YzYtNGNhNi1hOGE0LTZhMjQyNDMwZTY1MyIsImMiOjR9"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
        />
      </div>

    </section>
  );
}
