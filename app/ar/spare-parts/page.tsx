import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "برنامج محاسبة ومخزون قطع الغيار | تك بلاس",
  description: "أفضل نظام لإدارة قطع الغيار والسيارات والأجهزة.",
};

export default function SparePartsPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">برنامج محاسبة ومخزون قطع الغيار</h1>
      <p className="text-xl text-slate-600">إدارة الأرقام التسلسلية، الماركات، والبدائل بكفاءة.</p>
    </div>
  );
}
