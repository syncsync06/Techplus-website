import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "المدونة | تك بلاس",
  description: "مقالات ونصائح حول المحاسبة، المخزون، وإدارة الأعمال في اليمن.",
};

const articles = [
  {
    title: "ما هو أفضل برنامج محاسبي للمحلات في اليمن؟",
    slug: "best-accounting-software-yemen",
    desc: "دليل شامل لاختيار البرنامج المحاسبي الأنسب لمشروعك التجاري.",
    date: "2024-05-10",
  },
  {
    title: "كيف تختار برنامج مخازن مناسب لمشروعك؟",
    slug: "inventory-software-guide",
    desc: "أهم المعايير والميزات التي يجب توافرها في نظام المخازن لضمان سير العمل.",
    date: "2024-04-22",
  },
  {
    title: "أفضل برنامج نقاط بيع للمحلات في اليمن",
    slug: "pos-yemen",
    desc: "تعرف على كيفية تسريع عملية البيع وتحسين تجربة العملاء باستخدام أحدث أنظمة الكاشير.",
    date: "2024-03-15",
  },
  {
    title: "كيف تعرف أرباح المحل بطريقة صحيحة؟",
    slug: "calculate-shop-profit",
    desc: "طرق وأسس حساب الأرباح والخسائر لتجنب الأخطاء الشائعة في الإدارة المالية.",
    date: "2024-02-28",
  },
  {
    title: "برنامج محاسبة ومخازن للسوبر ماركت",
    slug: "supermarket-accounting",
    desc: "لماذا تحتاج السوبر ماركت إلى نظام متكامل يشمل الباركود، المخزون، ونقاط البيع؟",
    date: "2024-01-10",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">مدونة تك بلاس</h1>
        <p className="text-xl text-slate-600 mb-12 text-center">
          أحدث المقالات والنصائح في إدارة الأعمال، المحاسبة، والمخزون.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/ar/blog/${article.slug}`} className="group block">
              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md h-full flex flex-col">
                <span className="text-sm text-teal-600 font-medium mb-3">{article.date}</span>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-slate-600 mb-6 flex-grow">{article.desc}</p>
                <div className="flex items-center text-teal-600 font-semibold mt-auto">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft size={18} className="mr-2 rtl:rotate-180" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
