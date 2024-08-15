import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import clsx from "clsx";
import { NextUIProvider } from "@nextui-org/system";
import Script from "next/script";

export const metadata = {
  title: "فروشگاه من",
  description: "Store",
  icons: {
    icon: "/favicon.ico",
  },
};

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-sans-arabic",
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={clsx(
          arabic.variable,
          "w-full"
        )}
      >
        <NextUIProvider>
          <Header />
          <main className="md:pt-6 pt-3">{children}</main>
          <Footer />
        </NextUIProvider>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js" strategy="beforeInteractive" />
        <Script src="../lib/ir-city-select.js" strategy="beforeInteractive" />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> */}
        {/* <script src="https://github.com/KayvanMazaheri/ir-city-select/releases/download/v0.2.0/ir-city-select.min.js"></script> */}
      </body>
    </html>
  );
}
