"use client";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Facebook, Youtube, Video } from "lucide-react"; // Video is a stand-in for Tiktok icon in lucide

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-600">{siteConfig.name}</h3>
            <p className="text-sm text-slate-600">{siteConfig.description}</p>
            <div className="flex gap-4 text-slate-500">
              <Link href={siteConfig.social.facebook} target="_blank" className="hover:text-teal-600">
                <Facebook size={20} />
              </Link>
              <Link href={siteConfig.social.youtube} target="_blank" className="hover:text-teal-600">
                <Youtube size={20} />
              </Link>
              <Link href={siteConfig.social.tiktok} target="_blank" className="hover:text-teal-600">
                <Video size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900">المنتجات</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/ar/accounting" className="hover:text-teal-600">المحاسبة</Link></li>
              <li><Link href="/ar/inventory" className="hover:text-teal-600">المخازن</Link></li>
              <li><Link href="/ar/pos" className="hover:text-teal-600">POS</Link></li>
              <li><Link href="/ar/restaurants" className="hover:text-teal-600">المطاعم</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900">الشركة</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/ar/blog" className="hover:text-teal-600">المدونة</Link></li>
              <li><Link href="/ar/support" className="hover:text-teal-600">الدعم</Link></li>
              <li><Link href="/ar/about" className="hover:text-teal-600">من نحن</Link></li>
              <li><Link href="/ar/contact" className="hover:text-teal-600">تواصل معنا</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900">تواصل معنا</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>{siteConfig.location}</li>
              <li dir="ltr" className="text-right">{siteConfig.phone}</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}
