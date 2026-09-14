import { siteConfig } from "@/config/site";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "برنامج محاسبي في اليمن | تك بلاس للمحاسبة",
  description: "برنامج محاسبي متكامل لإدارة أعمالك. يشمل الحسابات، الفواتير، المبيعات، المشتريات، والتقارير المالية.",
  keywords: ["برنامج محاسبي في اليمن", "برنامج محاسبة صنعاء", "برنامج حسابات ومخازن", "برنامج محاسبي للمحلات", "برنامج محاسبة للشركات", "برنامج محاسبي تك بلاس"]
};

const features = [
  "شجرة حسابات مرنة ومتكاملة",
  "إدارة الفواتير بدقة واحترافية",
  "تسجيل ومتابعة المبيعات اليومية",
  "إدارة المشتريات والموردين",
  "تسجيل وتبويب المصروفات",
  "تتبع الإيرادات بدقة",
  "حساب الأرباح والخسائر التلقائي",
  "تقارير مالية تفصيلية وإجمالية",
  "إدارة بيانات وأرصدة العملاء",
  "إدارة حسابات وأرصدة الموردين",
];

export default function AccountingPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
          برنامج محاسبي متكامل لإدارة أعمالك
        </h1>
        <p className="text-xl text-slate-600 mb-12 text-center leading-relaxed">
          دليلك الأمثل لضبط حساباتك في اليمن. صمم تك بلاس لتوفير بيئة محاسبية سهلة ودقيقة تتيح لك السيطرة الكاملة على الشؤون المالية لمؤسستك.
        </p>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">الميزات المحاسبية الشاملة</h2>
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
