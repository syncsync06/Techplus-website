import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "برنامج محاسبة ومخزون محلات الملابس | تك بلاس",
  description: "نظام متكامل لإدارة محلات الملابس والأحذية بمرونة.",
};

export default function ClothingPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">برنامج محاسبة ومخزون محلات الملابس</h1>
      <p className="text-xl text-slate-600">إدارة الألوان، المقاسات، والموديلات بكل سهولة.</p>
    </div>
  );
}
