import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fénix Fisioterapia | Salud y Entrenamiento en Valladolid",
  description:
    "Fisioterapia clínica, rehabilitación integral y entrenamiento funcional en Valladolid. Especialistas en dolor persistente, paciente oncológico y suelo pélvico.",
  metadataBase: new URL("https://fenixfisioterapia.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col">
        <Navbar />
        <main className="min-h-screen flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
