// ========================================
// sections/HomeSection.tsx
// ========================================
export default function HomeSection() {
  return (
    <div className="grid gap-6">
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">Welcome 👋</h2>
        <p className="text-gray-600">
          This is a single-page Next.js layout with three main tabs: Home,
          Products, and Contact. Products contains two sub-tabs: Solar and CCTV.
          Everything renders client-side without page navigation.
        </p>
      </div>
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-2">How to use</h3>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Click a top tab to switch sections.</li>
          <li>
            Inside Products, click a sub-tab to switch between Solar and CCTV.
          </li>
          <li>Use this as a starter and connect to real data or components.</li>
        </ol>
      </div>
    </div>
  );
}
