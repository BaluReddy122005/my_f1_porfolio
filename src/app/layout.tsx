import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SceneController } from "@/components/canvas/SceneController";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "F1 Engineer Portfolio | Computer Science",
  description: "A highly immersive 3D portfolio website for a Computer Science student with a Formula 1 theme.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased selection:bg-f1-red selection:text-white`}>
        {/* We place the Canvas fixed at the back, so it handles all 3D content */}
        <SceneController />
        
        {/* The main scrollable content sits on top */}
        <main className="relative z-10 w-full min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
