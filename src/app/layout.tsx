import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
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
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0c0f28] text-gray-200`}
        >
        {children}
        </body>
        </html>
    );
}