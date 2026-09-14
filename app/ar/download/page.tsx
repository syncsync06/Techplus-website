import type { Metadata } from "next";
import { Download, Monitor, Smartphone, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "تحميل برنامج تك بلاس | تطبيق Android",
  description: "حمل تطبيق ونظام تك بلاس للأندرويد والويندوز.",
};

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">تحميل برنامج تك بلاس</h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-16">
        اختر المنصة المناسبة وحمل التطبيق للبدء بإدارة أعمالك بسهولة.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center">
          <Play size={48} className="text-teal-600 mb-4" />
          <h2 className="text-xl font-bold mb-2">Google Play</h2>
          <p className="text-slate-500 mb-6 text-sm">التطبيق الرسمي على متجر جوجل بلاي</p>
          <button disabled className="mt-auto inline-flex h-10 items-center justify-center rounded-md bg-slate-100 text-slate-400 px-6 font-medium cursor-not-allowed w-full">
            قريباً
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center">
          <Smartphone size={48} className="text-teal-600 mb-4" />
          <h2 className="text-xl font-bold mb-2">تطبيق Android (APK)</h2>
          <p className="text-slate-500 mb-6 text-sm">تحميل مباشر لملف التطبيق</p>
          <button disabled className="mt-auto inline-flex h-10 items-center justify-center rounded-md bg-slate-100 text-slate-400 px-6 font-medium cursor-not-allowed w-full">
            قريباً
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center">
          <Monitor size={48} className="text-teal-600 mb-4" />
          <h2 className="text-xl font-bold mb-2">نسخة الويندوز Windows</h2>
          <p className="text-slate-500 mb-6 text-sm">برنامج الإدارة المتكامل للكمبيوتر</p>
          <button disabled className="mt-auto inline-flex h-10 items-center justify-center rounded-md bg-slate-100 text-slate-400 px-6 font-medium cursor-not-allowed w-full">
            قريباً
          </button>
        </div>
      </div>
    </div>
  );
}
