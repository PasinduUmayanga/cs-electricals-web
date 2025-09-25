// ========================================
// components/TabNav.tsx
// ========================================
"use client";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import type { MainTab, ProductTab } from "@/lib/types";

export default function TabNav({
  activeMain,
  activeProduct,
}: {
  activeMain: MainTab;
  activeProduct: ProductTab;
}) {
  const linkBase =
    "hover:text-blue text-custom-sm font-medium text-dark flex xl:py-6";
  const liBase =
    "group relative before:w-0 before:h-[3px] before:bg-blue before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full";

  // Dropdown open state with small close delay to prevent flicker
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // small delay to allow cursor to move from trigger to menu without closing
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 xl:px-0">
      <div className="flex items-center justify-between">
        <div className="w-[288px] absolute right-4 top-full xl:static xl:w-auto h-0 xl:h-auto invisible xl:visible xl:flex items-center justify-between hidden">
          <nav>
            <ul className="flex flex-col gap-5 xl:items-center xl:flex-row xl:gap-6">
              {/* Home */}
              <li className={liBase}>
                <a
                  className={`${linkBase} ${
                    activeMain === "home" ? "text-blue" : ""
                  }`}
                  href="#home"
                  aria-current={activeMain === "home" ? "page" : undefined}
                >
                  Home
                </a>
              </li>

              {/* Products with dropdown (hover/click) */}
              <li
                className={`${liBase}`}
                onMouseEnter={openNow}
                onMouseLeave={closeSoon}
                onFocusCapture={openNow}
                onBlurCapture={closeSoon}
              >
                <a
                  className={`${linkBase} items-center gap-1.5 capitalize xl:py-6`}
                  href="#products"
                  aria-expanded={open}
                  aria-haspopup="menu"
                  aria-current={activeMain === "products" ? "page" : undefined}
                >
                  Products
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </a>

                {/* Dropdown: use pt-2 instead of mt gap so the hover area remains contiguous */}
                <ul
                  role="menu"
                  className={`absolute left-0 top-full z-50 min-w-[220px] pt-2 transition-all ${
                    open
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-1"
                  }`}
                  onMouseEnter={openNow}
                  onMouseLeave={closeSoon}
                >
                  <div className="bg-white border rounded-lg shadow-lg p-1">
                    <li role="none">
                      <a
                        role="menuitem"
                        className={`flex text-custom-sm hover:text-blue hover:bg-gray-2 rounded-lg py-[7px] px-4.5 ${
                          activeProduct === "solar" ? "text-blue" : ""
                        }`}
                        href="#products-solar"
                      >
                        Solar
                      </a>
                    </li>
                    <li role="none">
                      <a
                        role="menuitem"
                        className={`flex text-custom-sm hover:text-blue hover:bg-gray-2 rounded-lg py-[7px] px-4.5 ${
                          activeProduct === "cctv" ? "text-blue" : ""
                        }`}
                        href="#products-cctv"
                      >
                        CCTV
                      </a>
                    </li>
                  </div>
                </ul>
              </li>

              {/* Contact */}
              <li className={liBase}>
                <a
                  className={`${linkBase} ${
                    activeMain === "contact" ? "text-blue" : ""
                  }`}
                  href="#contact"
                  aria-current={activeMain === "contact" ? "page" : undefined}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right-side promo (optional) */}
        {/* <div className="hidden xl:block">
          <a
            className="text-sm text-dark flex items-center font-medium hover:text-blue"
            href="#products-solar"
          >
            Best Selling
            <span className="bg-red text-white font-semibold text-[10px] inline-flex items-center justify-center rounded-full ml-2.5 px-2 h-5 uppercase">
              SALE
            </span>
          </a>
        </div> */}
      </div>
    </div>
  );
}
