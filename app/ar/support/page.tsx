import type { Metadata } from "next";
import { LifeBuoy, BookOpen, Database, Printer, Network, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "الدعم الفني | تك بلاس",
  description: "خدمات الدعم الفني، التدريب، وتثبيت البرنامج من تك بلاس.",
};

const supportServices = [
  { icon: LifeBuoy, title: "الدعم الفني", desc: "فريق جاهز للإجابة على استفساراتك وحل مشاكلك." },
  { icon: BookOpen, title: "التدريب", desc: "تدريب شامل للموظفين على استخدام النظام." },
  { icon: Database, title: "إعداد قاعدة البيانات", desc: "تهيئة وإعداد قواعد البيانات بشكل احترافي." },
  { icon: Printer, title: "حل مشاكل الطباعة", desc: "تعريف الطابعات وحل مشاكل الفواتير والباركود." },
  { icon: Network, title: "حل مشاكل الشبكة", desc: "ربط الأجهزة وتهيئة الشبكات المحلية." },
  { icon: ShieldCheck, title: "النسخ الاحتياطي", desc: "إعداد أنظمة النسخ الاحتياطي التلقائي للبيانات." },
];

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">الدعم والتدريب</h1>
        <p className="text-xl text-slate-600">
          نحن في تك بلاس نؤمن بأن الدعم المستمر هو أساس نجاح عملائنا. نوفر لك خدمات دعم شاملة لضمان استقرار أعمالك.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {supportServices.map((service, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-4">
              <service.icon size={28} />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">{service.title}</h3>
            <p className="text-slate-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
