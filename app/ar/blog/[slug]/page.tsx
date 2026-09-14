import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articlesContent = {
  "best-accounting-software-yemen": {
    title: "ما هو أفضل برنامج محاسبي للمحلات في اليمن؟",
    desc: "دليل شامل لاختيار البرنامج المحاسبي الأنسب لمشروعك التجاري.",
    date: "2024-05-10",
    content: `
      <p>في ظل التطور التكنولوجي المستمر، أصبح استخدام برنامج محاسبي أمراً حتمياً لنجاح أي نشاط تجاري في اليمن. لكن كيف تختار الأفضل؟</p>
      <h2>معايير اختيار البرنامج المحاسبي</h2>
      <ul>
        <li>السهولة والمرونة في الاستخدام.</li>
        <li>الدعم الفني المحلي وسرعة الاستجابة.</li>
        <li>القدرة على استخراج تقارير مالية دقيقة.</li>
        <li>دعم نظام العملات المتعددة (مهم جداً في اليمن).</li>
      </ul>
      <p>يتميز نظام <strong>تك بلاس</strong> بتوفير بيئة محاسبية متكاملة تجمع بين القوة والسهولة، مما يجعله الخيار الأول للشركات والمحلات.</p>
    `,
  },
  "inventory-software-guide": {
    title: "كيف تختار برنامج مخازن مناسب لمشروعك؟",
    desc: "أهم المعايير والميزات التي يجب توافرها في نظام المخازن لضمان سير العمل.",
    date: "2024-04-22",
    content: `
      <p>إدارة المخزون هي عصب العمل التجاري، وفقدان السيطرة عليها يعني خسارة محققة.</p>
      <h2>أهم ميزات برنامج المخازن</h2>
      <p>يجب أن يحتوي النظام على جرد فعلي، دعم للباركود، تنبيهات بالنواقص، وتقارير تفصيلية عن حركة الأصناف.</p>
      <p>مع <strong>تك بلاس</strong>، يمكنك إدارة عدة مستودعات والتحويل بينها بضغطة زر، لتضمن دقة الأرصدة في كل الأوقات.</p>
    `,
  },
  "pos-yemen": {
    title: "أفضل برنامج نقاط بيع للمحلات في اليمن",
    desc: "تعرف على كيفية تسريع عملية البيع وتحسين تجربة العملاء باستخدام أحدث أنظمة الكاشير.",
    date: "2024-03-15",
    content: `
      <p>نقاط البيع (POS) لم تعد مجرد آلة لحساب الإجمالي، بل أصبحت نظاماً يربط المبيعات بالمخزون والحسابات لحظياً.</p>
      <h2>لماذا تك بلاس لنقاط البيع؟</h2>
      <p>نظام تك بلاس يوفر واجهة كاشير سريعة جداً، مصممة لتحمل أوقات الذروة، مع دعم كامل للباركود، الطابعات الحرارية، ودرج الكاشير، لضمان خدمة عملاء لا مثيل لها.</p>
    `,
  },
  "calculate-shop-profit": {
    title: "كيف تعرف أرباح المحل بطريقة صحيحة؟",
    desc: "طرق وأسس حساب الأرباح والخسائر لتجنب الأخطاء الشائعة في الإدارة المالية.",
    date: "2024-02-28",
    content: `
      <p>كثير من أصحاب المحلات يخلطون بين السيولة النقدية والأرباح. وجود سيولة لا يعني بالضرورة وجود أرباح فعلية.</p>
      <h2>حساب الأرباح</h2>
      <p>الأرباح = إجمالي المبيعات - (تكلفة البضاعة المباعة + المصروفات التشغيلية).</p>
      <p>لتجنب هذا العناء، يقوم <strong>تك بلاس</strong> بحساب تكلفة البضاعة بدقة (مثل المتوسط المرجح) واستخراج تقرير أرباح وخسائر بضغطة زر واحدة.</p>
    `,
  },
  "supermarket-accounting": {
    title: "برنامج محاسبة ومخازن للسوبر ماركت",
    desc: "لماذا تحتاج السوبر ماركت إلى نظام متكامل يشمل الباركود، المخزون، ونقاط البيع؟",
    date: "2024-01-10",
    content: `
      <p>السوبر ماركت يتميز بكثافة الأصناف وكثرة الحركات اليومية. استخدام نظام يدوي أو بطيء يعني فشل المشروع.</p>
      <h2>الحل الأمثل</h2>
      <p>تحتاج السوبر ماركت إلى برنامج يدعم آلاف الأصناف، الباركود السريع، وقراءة الوزن، مع كاشير لا يتعطل. <strong>تك بلاس</strong> يقدم حزمة مخصصة لإدارة السوبر ماركت بأعلى كفاءة.</p>
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesContent[slug as keyof typeof articlesContent];
  if (!article) return { title: "المقال غير موجود" };

  return {
    title: `${article.title} | مدونة تك بلاس`,
    description: article.desc,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesContent[slug as keyof typeof articlesContent];

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/ar/blog" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-8">
          <ArrowRight size={18} className="ml-2 rtl:rotate-180" />
          العودة للمدونة
        </Link>
        
        <article className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
          <header className="mb-10 text-center">
            <span className="text-teal-600 font-medium mb-4 block">{article.date}</span>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-slate-500">
              {article.desc}
            </p>
          </header>
          
          <div 
            className="prose prose-lg prose-slate rtl:prose-p:text-right rtl:prose-headings:text-right max-w-none prose-teal"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </div>
  );
}
