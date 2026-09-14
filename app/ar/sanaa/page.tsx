import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "برنامج محاسبي في صنعاء | تك بلاس",
  description: "تك بلاس أفضل برنامج محاسبة ومخازن ونقاط بيع في صنعاء، اليمن.",
};

export default function SanaaPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">برنامج محاسبة ومخازن ونقاط بيع في صنعاء</h1>
      <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12">
        نقدم في تك بلاس أقوى الأنظمة المحاسبية للمنشآت في العاصمة صنعاء وعموم محافظات اليمن.
      </p>
      
      <div className="bg-slate-50 p-8 rounded-xl max-w-3xl mx-auto text-right space-y-4">
        <p className="text-slate-700">إذا كنت تبحث عن التميز والتحكم الدقيق في أعمالك في صنعاء، فإن تك بلاس يوفر لك:</p>
        <ul className="list-disc list-inside text-slate-600 space-y-2">
          <li>المحاسبة المتقدمة والتقارير المالية الدقيقة.</li>
          <li>نظام المخازن والجرد الاحترافي.</li>
          <li>المبيعات ونقاط البيع السريعة.</li>
          <li>حلول متكاملة لإدارة المطاعم والكافيهات.</li>
        </ul>
      </div>
    </div>
  );
}
