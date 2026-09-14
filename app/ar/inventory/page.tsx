import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "برنامج مخازن ومستودعات في اليمن | تك بلاس",
  description: "برنامج إدارة المخزون والمستودعات الاحترافي من تك بلاس. يدعم الباركود، الجرد، والأرصدة.",
  keywords: ["برنامج مخازن", "برنامج مستودعات", "برنامج مخزون", "برنامج جرد", "برنامج باركود", "برنامج مخازن صنعاء"]
};

const features = [
  "إضافة وإدارة الأصناف بسهولة",
  "متابعة الأرصدة لحظة بلحظة",
  "تقارير تفصيلية عن حركة المخزون",
  "جرد فعلي سريع ودقيق",
  "دعم كامل لأنظمة الباركود",
  "إدارة عدة مستودعات في آن واحد",
  "التحويلات المخزنية بين المستودعات",
  "عمل التسويات الجردية ببساطة",
  "تقارير مخزون شاملة للإدارة",
];

export default function InventoryPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
          برنامج إدارة المخزون والمستودعات
        </h1>
        <p className="text-xl text-slate-600 mb-12 text-center leading-relaxed">
          حافظ على دقة مخزونك وتتبع حركة بضائعك بكل سهولة مع نظام تك بلاس المصمم خصيصاً للمخازن والمستودعات في اليمن.
        </p>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">ميزات إدارة المخزون</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-teal-600 mt-1 shrink-0" size={24} />
                <span className="text-lg text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
