import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "الأسعار | تك بلاس",
  description: "تعرف على باقات وأسعار نظام تك بلاس.",
};

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">أسعار تك بلاس</h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
        تختلف تكلفة تك بلاس حسب النشاط وعدد المستخدمين والوحدات المطلوبة. تواصل معنا لمعرفة النسخة المناسبة والسعر الحالي.
      </p>
      
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">هل تريد معرفة السعر لنشاطك؟</h2>
        <p className="text-slate-600 mb-8">فريقنا مستعد لتحديد الباقة الأنسب لك وتقديم عرض سعر منافس.</p>
        <Link 
          href="/ar/contact"
          className="inline-flex h-12 items-center justify-center rounded-md bg-teal-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-teal-700 w-full"
        >
          تواصل معنا
        </Link>
      </div>
    </div>
  );
}
