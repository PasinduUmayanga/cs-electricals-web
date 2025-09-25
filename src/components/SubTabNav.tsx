// ========================================
// components/SubTabNav.tsx
// ========================================
"use client";

type SubTabItem = { key: string; label: string };

export default function SubTabNav({
  items,
  activeKey,
  onChange,
}: {
  items: SubTabItem[];
  activeKey: string;
  onChange: (key: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      {items.map((it) => {
        const active = it.key === activeKey;
        return (
          <button
            key={it.key}
            onClick={() => onChange(it.key)}
            className={`inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm transition-all border ${
              active
                ? "bg-white text-gray-900 border-gray-900"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
            }`}
            role="tab"
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
