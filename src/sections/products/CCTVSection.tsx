// ========================================
// sections/products/CCTVSection.tsx
// ========================================
export default function CCTVSection() {
  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">CCTV Systems</h2>
        <p className="text-gray-600 mb-4">
          IP and analog camera kits, NVR/DVR options, and remote monitoring
          apps.
        </p>
        <ul className="grid md:grid-cols-3 gap-4">
          {[
            { title: "4MP IP Bullet Cam", detail: "PoE, IR 30m, IP67" },
            { title: "8CH NVR", detail: "H.265+, 2 SATA bays" },
            { title: "2MP Dome Cam", detail: "Wide-D, mic, vandal-proof" },
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
