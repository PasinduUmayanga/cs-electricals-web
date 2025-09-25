// ========================================
// app/page.tsx
// ========================================
"use client";
import { useEffect, useState } from "react";
import { Home, Phone, Package } from "lucide-react";
import TabNav from "@/components/TabNav";
import HomeSection from "@/sections/HomeSection";
import ContactSection from "@/sections/ContactSection";
import SolarSection from "@/sections/products/SolarSection";
import CCTVSection from "@/sections/products/CCTVSection";
import type { MainTab, ProductTab } from "@/lib/types";

export default function Page() {
  const [tab, setTab] = useState<MainTab>("home");
  const [productTab, setProductTab] = useState<ProductTab>("solar");

  // Sync state from URL hash so the nav works as anchors
  useEffect(() => {
    const syncFromHash = () => {
      const h = (
        typeof window !== "undefined" ? window.location.hash : ""
      ).toLowerCase();
      if (h.startsWith("#products")) {
        setTab("products");
        setProductTab(h.includes("cctv") ? "cctv" : "solar");
      } else if (h === "#contact") {
        setTab("contact");
      } else {
        setTab("home");
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <main>
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-0 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gray-900 text-white grid place-content-center font-bold">
              NX
            </div>
            <h1 className="text-xl font-semibold">Demo Nav — Single Page</h1>
          </div>
        </div>
        <TabNav activeMain={tab} activeProduct={productTab} />
      </header>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <div id="home" />
        {tab === "home" && <HomeSection />}

        {tab === "products" && (
          <div className="space-y-6" id="products">
            {productTab === "solar" && <div id="products-solar" />}
            {productTab === "solar" && <SolarSection />}
            {productTab === "cctv" && <div id="products-cctv" />}
            {productTab === "cctv" && <CCTVSection />}
          </div>
        )}

        <div id="contact" />
        {tab === "contact" && <ContactSection />}
      </section>

      <footer className="mt-16 border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
