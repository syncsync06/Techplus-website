import { siteConfig } from "@/config/site";
import Link from "next/link";
import { 
  Calculator, 
  ShoppingCart, 
  PackageSearch, 
  Store, 
  Barcode, 
  Utensils, 
  LineChart, 
  Users, 
  Receipt, 
  FileText, 
  DatabaseBackup, 
  Headset, 
  Box
} from "lucide-react";

export const metadata = {
  title: "الرئيسية | " + siteConfig.name,
  description: siteConfig.description,
};

const features = [
  { icon: Calculator, title: "المحاسبة", desc: "إدارة مالية دقيقة" },
  { icon: ShoppingCart, title: "المبيعات", desc: "تسجيل فواتير سريع" },
  { icon: Box, title: "المشتريات", desc: "إدارة الموردين والطلبات" },
  { icon: PackageSearch, title: "المخزون", desc: "تتبع حركة الأصناف" },
  { icon: Store, title: "المستودعات", desc: "إدارة مستودعات متعددة" },
  { icon: Barcode, title: "الباركود", desc: "دعم كامل للباركود" },
  { icon: ShoppingCart, title: "نقاط البيع POS", desc: "كاشير سريع وسهل" },
  { icon: Utensils, title: "المطاعم والكافيهات", desc: "إدارة طاولات وطلبات" },
  { icon: LineChart, title: "التقارير", desc: "تحليلات تفصيلية" },
  { icon: Users, title: "العملاء والموردون", desc: "كشوفات حساب شاملة" },
  { icon: Receipt, title: "المصروفات", desc: "مراقبة النفقات" },
  { icon: FileText, title: "الفواتير", desc: "فواتير احترافية" },
  { icon: PackageSearch, title: "الجرد", desc: "جرد فعلي وسريع" },
  { icon: DatabaseBackup, title: "النسخ الاحتياطي", desc: "أمان وحفظ بياناتك" },
  { icon: Headset, title: "الدعم والتدريب", desc: "فريق جاهز لخدمتك" },
];

const industries = [
  "السوبر ماركت",
  "محلات الملابس",
  "محلات الأحذية",
  "قطع الغيار",
  "محلات الموبايلات",
  "الهدايا والإكسسوارات",
  "الأجهزة الكهربائية",
  "المتاجر العامة",
  "المطاعم",
  "الكافيهات",
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16">
      {/* Hero Section */}
      <section className="bg-slate-50 pt-16 md:pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            {siteConfig.name} للمحاسبة والمستودعات ونقاط البيع
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
            نظام متكامل لإدارة المبيعات والمشتريات والمخزون والمستودعات والفواتير ونقاط البيع والمطاعم، مصمم للأعمال والمنشآت في اليمن.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/ar/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-teal-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-teal-700 w-full sm:w-auto"
            >
              اطلب تك بلاس
            </Link>
            <Link 
              href="/ar/about"
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-base font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-100 w-full sm:w-auto"
            >
              تعرف على النظام
            </Link>
            <Link 
              href="/ar/download"
              className="inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-8 text-base font-medium text-white shadow transition-colors hover:bg-slate-800 w-full sm:w-auto"
            >
              تحميل التطبيق
            </Link>
          </div>
          
          <div className="mt-16 mx-auto max-w-5xl rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
            {/* Placeholder for Mockup */}
            <div className="aspect-video bg-slate-100 flex items-center justify-center relative">
              <span className="text-slate-400 font-medium text-lg">صورة احترافية للنظام (كمبيوتر، لابتوب، موبايل)</span>
              {/* If image exists, it would be rendered here */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">لماذا تك بلاس؟</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            يوفر لك تك بلاس كل ما تحتاجه لإدارة أعمالك بكفاءة عالية وبواجهة سهلة الاستخدام.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-2">
                <feature.icon size={24} />
              </div>
              <h3 className="font-bold text-slate-900">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">تك بلاس مناسب لمختلف الأنشطة</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              تم تصميم النظام ليكون مرناً وقابلاً للتخصيص ليناسب طبيعة عملك أيًا كان نشاطك.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((industry, idx) => (
              <span key={idx} className="bg-slate-800 border border-slate-700 px-6 py-3 rounded-full text-slate-200 font-medium hover:bg-teal-600 hover:border-teal-500 transition-colors cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
