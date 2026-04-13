import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { ClientEffects } from "@/components/ClientEffects";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Joseph | Scriptwriter & Story Architect",
  description:
    "Professional scriptwriter and screenwriter specializing in YouTube scripts, screenplays, and story development. Transform your ideas into compelling narratives.",
  keywords: [
    "scriptwriter",
    "screenwriter",
    "YouTube scriptwriting",
    "screenplay development",
    "story consultant",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body>
        {children}
        <ClientEffects />
      </body>
    </html>
  );
}
