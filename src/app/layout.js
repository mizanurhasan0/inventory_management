// import localFont from "next/font/local";
import { Inter } from "next/font/google";

import "./globals.css";
import Sidebar from "./Sidebar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className}`}
      >
        <main className="flex min-h-screen">
          <Sidebar />
          <div className="relative h-full min-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl w-full flex flex-col">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
