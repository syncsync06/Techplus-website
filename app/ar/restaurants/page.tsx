import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "برنامج مطاعم وكافيهات في اليمن | تك بلاس",
  description: "نظام إدارة المطاعم والكافيهات من تك بلاس، إدارة الطاولات، الطلبات، المطبخ، والفواتير.",
  keywords: ["برنامج مطاعم", "برنامج كافيهات", "نظام مطاعم اليمن", "برنامج مطاعم صنعاء"]
};

const features = [
  "إدارة صالة الطعام والطاولات",
  "شاشات طلبات سريعة وسهلة",
  "إرسال الطلبات مباشرة إلى شاشات/طابعات المطبخ",
  "واجهة كاشير مخصصة للمطاعم",
  "إصدار الفواتير وطباعتها",
  "إمكانية تقسيم الفاتورة",
  "دعم الطلبات الداخلية والخارجية والتوصيل",
  "تقارير مبيعات تفصيلية للورديات",
  "ربط مبيعات الوجبات بمخزون المواد الخام",
];

export default function RestaurantsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
          نظام المطاعم والكافيهات
        </h1>
        <p className="text-xl text-slate-600 mb-12 text-center leading-relaxed">
          ارتقِ بمستوى الخدمة في مطعمك أو المقهى الخاص بك مع نظام تك بلاس المصمم لتلبية احتياجات قطاع الضيافة.
        </p>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b pb-4">ميزات إدارة المطاعم</h2>
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
