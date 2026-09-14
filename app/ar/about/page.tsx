import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن | تك بلاس",
  description: "تعرف على شركة تك بلاس للأنظمة المحاسبية.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">من نحن</h1>
      <div className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed space-y-6">
        <p>
          تك بلاس هو نظام برمجي متكامل تم تصميمه وتطويره بأحدث التقنيات ليلبي احتياجات السوق اليمني في إدارة الأنشطة التجارية المختلفة.
        </p>
        <p>
          نحن نهدف إلى تقديم حلول محاسبية وإدارية دقيقة وسهلة الاستخدام، تمكن أصحاب الأعمال من السيطرة على مبيعاتهم، مخزونهم، وحساباتهم بكل ثقة وأمان.
        </p>
      </div>
    </div>
  );
}
