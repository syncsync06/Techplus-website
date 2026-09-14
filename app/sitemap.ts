import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/ar",
    "/ar/accounting",
    "/ar/inventory",
    "/ar/pos",
    "/ar/restaurants",
    "/ar/supermarket",
    "/ar/clothing",
    "/ar/spare-parts",
    "/ar/mobile-shops",
    "/ar/pricing",
    "/ar/download",
    "/ar/support",
    "/ar/about",
    "/ar/contact",
    "/ar/sanaa",
    "/ar/blog",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" || route === "/ar" ? 1 : 0.8,
  }));

  const blogPosts = [
    "best-accounting-software-yemen",
    "inventory-software-guide",
    "pos-yemen",
    "calculate-shop-profit",
    "supermarket-accounting",
  ].map((slug) => ({
    url: `${siteConfig.url}/ar/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogPosts];
}
