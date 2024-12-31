import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
// import NavbarMbl from "@/components/navbar/NavbarMbl";
import NavComp from "./NavComp";
import TopBanner from "@/components/top/TopBanner";
import Footer from "@/components/footer/Footer";

// import Drawer from "@/components/drawer/Drawer";
// import Drawer2 from "@/components/drawer/Drawer2";

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
        <main className="">
          <TopBanner />
          <NavComp />
          <div>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
