import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "تواصل معنا | تك بلاس",
  description: "تواصل مع فريق تك بلاس للمحاسبة والمستودعات.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">تواصل معنا</h1>
        <p className="text-xl text-slate-600 mb-12 text-center">
          يسعدنا الرد على استفساراتكم وتقديم العروض المناسبة لنشاطكم التجاري.
        </p>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-around">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">العنوان</h3>
                <p className="text-slate-600">{siteConfig.location}</p>
                <p className="text-slate-500 text-sm">تك بلاس للمحاسبة والمستودعات</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">الهاتف</h3>
                <p className="text-slate-600" dir="ltr">{siteConfig.phone}</p>
              </div>
              <div className="flex gap-4 mt-4">
                <a 
                  href={`tel:${siteConfig.phone}`} 
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-md font-medium hover:bg-slate-800 transition"
                >
                  <Phone size={18} />
                  اتصال
                </a>
                <a 
                  href={`https://wa.me/${siteConfig.phone}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
