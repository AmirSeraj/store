import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import clsx from "clsx";
import { NextUIProvider } from "@nextui-org/system";

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
      </body>
    </html>
  );
}
