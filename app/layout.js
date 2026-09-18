import { Geist, Geist_Mono, Reem_Kufi, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const reemKufi = Reem_Kufi({
  variable: "--font-arabic-heading",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-arabic-body",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Sara Altawil",
  description:
    "Sara Altawil — Syrian actress. Theater, television and film.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${reemKufi.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
