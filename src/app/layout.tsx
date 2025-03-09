import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: [
        {
            path: "../../public/fonts/Geist-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/Geist-Bold.ttf",
            weight: "700",
        },
        {
            path: "../../public/fonts/Geist-SemiBold.ttf",
            weight: "600",
        },
        {
            path: "../../public/fonts/Geist-Medium.ttf",
            weight: "500",
        },
        // Add other weights/styles as needed
    ],
    variable: "--font-geist-sans",
});

const geistMono = localFont({
    src: "../../public/fonts/GeistMono-Regular.ttf",
    variable: "--font-geist-mono",
});

export const metadata: Metadata = {
    title: "Forux Digital | Soluções de IA para Negócios",
    description: "Soluções de IA que transformam negócios, reduzem custos e aumentam a eficiência operacional.",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-icon.png",
    },
    openGraph: {
        title: "Forux Digital | Soluções de IA para Negócios",
        description: "Agentes de IA e automações que transformam negócios, reduzem custos e aumentam a eficiência operacional.",
        url: "https://forux.digital",
        siteName: "Forux Digital",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Forux Digital - Agentes de IA e Automações"
            }
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Forux Digital | Soluções de IA para Negócios",
        description: "Agentes de IA e automações que transformam negócios, reduzem custos e aumentam a eficiência operacional.",
        images: ["/twitter-image.jpg"],
    },
    applicationName: "Forux Digital",
    authors: [{ name: "Forux Digital", url: "https://forux.digital" }],
    keywords: ["IA", "Inteligência Artificial", "Automação", "Agentes Virtuais", "CRM", "Atendimento", "Vendas", "Chatbot"],
    themeColor: "#121640",
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="font-sans">{children}</body>
        </html>
    );
}