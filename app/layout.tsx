import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pelajar.`,
    metadataBase: new URL("https://bokepindo.pornub.lol"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
        description: `${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pelajar.`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: 'Jt3n3qb_3GzLECLcPrWNkD7PuNcKBQWjefUEoxgXK8Y',
        yandex: '51db68afdc893fad',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pelajar.`,
        "logo": "https://bokepindo.pornub.lol/favicon.ico",
        "url": "https://bokepindo.pornub.lol",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://bokepindo.pornub.lol"
            },
            "foundingDate":"2024-06-10"
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://bokepindo.pornub.lol",
        "description": `${SITENAME} Video Bokep Indo Jepang Jav Barat Simontok Viral Terbaru Bocil Ngentot Jilbab Smp Mama Sma korea china tante live paksa ngentot abg cewek pelajar.`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://bokepindo.pornub.lol/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
