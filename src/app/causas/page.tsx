"use client";

export default function CausasPage() {
    return (
        <section>

            {/* HEADER DE LA VISUALIZACION */}
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-slate-800">
                    Análisis de causas de interés para Veracruz
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                    Indicadores de defunciones por causas seleccionadas para el estado de Veracruz.
                </p>
                <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            </div>

            {/* CONTENIDO */}
            <div className="w-full h-[600px] lg:h-[calc(100vh-180px)] bg-slate-100 relative">
                <iframe
                    title="Dashboard Veracruz"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMjQ4ZjVjMGYtZjU5Zi00NGFjLWI5YjctMzI3NjhhYTQyMWZhIiwidCI6IjNjOTA3NjUxLWQ4YzYtNGNhNi1hOGE0LTZhMjQyNDMwZTY1MyIsImMiOjR9"
                    className="w-full h-full absolute inset-0"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </section>
    );
}