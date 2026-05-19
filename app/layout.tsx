import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { LifestyleProvider } from "@/components/LifestyleProvider";

const cairo = Cairo({
  variable: "--font-inter", 
  subsets: ["arabic"],
});

const tajawal = Tajawal({
  weight: ["300", "400", "500", "700"],
  variable: "--font-space", 
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "HABITAT | منصة الاستثمار العقاري",
  description: "منصة عقارية ذكية للمستثمرين والمشترين العصريين.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${tajawal.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col selection:bg-accent selection:text-white bg-background text-foreground">
        <LifestyleProvider>
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
        </LifestyleProvider>
      </body>
    </html>
  );
}
