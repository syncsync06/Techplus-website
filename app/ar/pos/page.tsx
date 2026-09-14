import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "برنامج نقاط البيع POS في اليمن | تك بلاس",
  description: "نظام نقاط البيع والكاشير POS الأسرع والأسهل في اليمن من تك بلاس.",
  keywords: ["برنامج نقاط البيع", "برنامج كاشير", "نقاط بيع صنعاء", "برنامج POS اليمن"]
};

const features = [
  "واجهة كاشير سريعة وسهلة الاستخدام",
  "دعم سريع لقارئ الباركود",
  "طباعة فواتير حرارية فورية",
  "إدارة المرتجعات بسهولة",
  "تعدد طرق الدفع (نقدي، آجل، بطاقة)",
  "إغلاق الوردية ومطابقة النقدية",
  "تقارير مبيعات الوردية والكاشير",
  "ربط الكاشير بالمخزون لحظياً",
];

export default function PosPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
          نظام نقاط البيع والكاشير POS
        </h1>
        <p className="text-xl text-slate-600 mb-12 text-center leading-relaxed">
          سرّع عملية البيع لعملائك وتجنب الازدحام مع نظام تك بلاس لنقاط البيع، المصمم ليكون الأسرع والأكثر استقراراً.
        </p>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">ميزات نقاط البيع</h2>
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
