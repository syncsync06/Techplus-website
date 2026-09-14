export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-slate-900 font-sans">
      <h1 className="text-4xl font-bold mb-4">404 - الصفحة غير موجودة</h1>
      <p className="text-lg text-slate-600 mb-8">عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها.</p>
      <a href="/ar" className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition">
        العودة للرئيسية
      </a>
    </div>
  );
}
