import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const actOfRejection = localFont({
  src: "../fonts/Act_Of_Rejection.ttf",
  variable: "--font-act-of-rejection",
  weight: "100 900",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const montserrat = localFont({
  src: "../fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
  display: "swap",
});

const montserratItalic = localFont({
  src: "../fonts/Montserrat-Italic-VariableFont_wght.ttf",
  variable: "--font-montserrat-italic",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "VTMERCH",
  description:
    "VTMERCH is a web application that allows users to buy and sell virtual items.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${actOfRejection.variable} ${inter.className} ${montserrat.variable} ${montserratItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
