import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "برنامج محاسبة محلات الجوالات والموبايلات | تك بلاس",
  description: "نظام إدارة محلات الجوالات والإكسسوارات.",
};

export default function MobileShopsPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">برنامج محاسبة محلات الجوالات والموبايلات</h1>
      <p className="text-xl text-slate-600">تتبع أرقام الـ IMEI والضمانات والصيانة في مكان واحد.</p>
    </div>
  );
}
