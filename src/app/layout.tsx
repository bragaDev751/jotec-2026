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
  title: "VIII JOTEC 2026 | IA, Dados e Conexões",
  description: "Junte-se a nós no maior evento de tecnologia da região. Prepare-se para o futuro em tempo real.",
  openGraph: {
    title: "VIII JOTEC 2026",
    description: "IA, Dados e Conexões em tempo real. Garanta sua vaga!",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-blue-950 text-white antialiased selection:bg-yellow-400 selection:text-blue-950">
        {children}
      </body>
    </html>
  );
}