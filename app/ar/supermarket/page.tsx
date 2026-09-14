import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "برنامج محاسبة وإدارة سوبر ماركت في اليمن | تك بلاس",
  description: "نظام متكامل لإدارة السوبر ماركت، يدعم الباركود السريع، نقاط البيع، والمخازن.",
  keywords: ["برنامج سوبر ماركت", "محاسبة سوبر ماركت", "برنامج كاشير سوبر ماركت"]
};

export default function SupermarketPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          برنامج محاسبة وإدارة سوبر ماركت
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          تك بلاس هو الحل الأمثل لإدارة السوبر ماركت بكفاءة وسرعة، مع دعم كامل للباركود ونقاط البيع.
        </p>
      </div>
    </div>
  );
}
