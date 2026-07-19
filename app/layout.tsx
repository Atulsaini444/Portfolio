import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { calculateExperience } from "@/lib/utils";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://atulsaini.vercel.app";
const description = `Atul is a frontend developer with solid ${calculateExperience(
  "2022-05-16"
)}+ years of experience.`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Atul",
  url: siteUrl,
  jobTitle: "Frontend Developer",
  sameAs: [
    "https://www.linkedin.com/in/atulsaini649",
    "https://github.com/Atulsaini444",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Atul's Portfolio",
  description,
  keywords: [
    "Atul",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Atul" }],
  openGraph: {
    title: "Atul's Portfolio",
    description,
    url: siteUrl,
    siteName: "Atul's Portfolio",
    images: [{ url: "/portfolioImage1.jpg", width: 222, height: 222 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Atul's Portfolio",
    description,
    images: ["/portfolioImage1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-32 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
