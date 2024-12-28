import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
// import NavbarMbl from "@/components/navbar/NavbarMbl";
import NavComp from "./NavComp";

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
          <div className="">
            <h1>this is banner</h1>
          </div>
          <NavComp />
          <div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
