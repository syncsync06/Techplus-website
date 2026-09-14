"use client";

import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { href: "/ar", label: "الرئيسية" },
  { href: "/ar/accounting", label: "المحاسبة" },
  { href: "/ar/inventory", label: "المخزون" },
  { href: "/ar/pos", label: "نقاط البيع" },
  { href: "/ar/restaurants", label: "المطاعم" },
  { href: "/ar/supermarket", label: "الأنشطة" },
  { href: "/ar/pricing", label: "الأسعار" },
  { href: "/ar/blog", label: "المدونة" },
  { href: "/ar/about", label: "من نحن" },
  { href: "/ar/contact", label: "تواصل معنا" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/ar" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-teal-600">
            {siteConfig.name}
          </span>
          <span className="text-sm font-semibold text-slate-500 hidden sm:inline-block">
            {siteConfig.enName}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-teal-600",
                pathname === link.href ? "text-teal-600" : "text-slate-600"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/ar/download"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-md bg-teal-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-teal-700"
          >
            اطلب تك بلاس
          </Link>
          <button
            className="lg:hidden text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  pathname === link.href
                    ? "bg-teal-50 text-teal-600"
                    : "text-slate-600 hover:bg-slate-50"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/ar/download"
              className="mt-4 flex w-full h-10 items-center justify-center rounded-md bg-teal-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-teal-700"
              onClick={() => setIsOpen(false)}
            >
              اطلب تك بلاس
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
