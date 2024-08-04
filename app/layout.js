import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import clsx from "clsx";

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
        className={clsx(arabic.variable, "min-h-screen h-screen w-full flex flex-col justify-between bg-[#fff]")}
      >
        <Header />
        <main className="md:py-6 py-3 xl:px-[15%] lg:px-[10%] sm:px-[8%] px-[3%]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
