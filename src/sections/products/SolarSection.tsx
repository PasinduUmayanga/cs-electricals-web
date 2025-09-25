// ========================================
// sections/products/SolarSection.tsx
// ========================================
export default function SolarSection() {
  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">Solar Solutions</h2>
        <p className="text-gray-600 mb-4">
          High-efficiency panels, inverters, and installation support for homes
          and businesses.
        </p>
        <ul className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Mono PERC 550W Panel", detail: "Tier-1, 21% efficiency" },
            {
              title: "Hybrid Inverter 5kW",
              detail: "On/Off-grid with UPS mode",
            },
            {
              title: "Lithium Battery 10kWh",
              detail: "6000+ cycles, wall-mount",
            },
          ].map((it) => (
            <li key={it.title} className="rounded-xl border p-4">
              <div className="font-medium">{it.title}</div>
              <div className="text-sm text-gray-600">{it.detail}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
