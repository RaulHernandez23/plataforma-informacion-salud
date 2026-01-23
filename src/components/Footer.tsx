const contributors = [
  {
    name: "Raúl Hernández",
    year: 2026,
  },
];

export default function Footer() {
  return (
    <footer className="px-4 py-3 text-center text-gray-500 text-xs border-t border-slate-200 bg-white">
      <p className="mb-1">© 2026 Universidad Veracruzana</p>
      <p className="text-slate-400">
        Desarrollo y mantenimiento:
        {contributors.map((c, i) => (
          <span key={c.name}>
            {" "}
            {c.name} ({c.year})
            {i < contributors.length - 1 && ","}
          </span>
        ))}
      </p>
    </footer>
  );
}
