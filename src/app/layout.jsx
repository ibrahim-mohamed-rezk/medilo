import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Rubik, Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/style.scss";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--body-font",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

export const metadata = {
  title: {
    absolute: "",
    default: "Medilo- Medical & Health NextJS Template",
    template: "%s | Medilo- Medical & Health NextJS Template",
  },
  description: "Medilo- Medical & Health NextJS Template",
  openGraph: {
    title: "Medilo- Medical & Health NextJS Template",
    description: "Medilo- Medical & Health NextJS Template",
    image: "/openGraphImage.jpg",
  },
};

const DefalultLayout = ({ children }) => {
  return (
    <html dir="rtl" lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${rubik.variable} ${poppins.variable}`}>
        <main className="main-page-area">
          <Header isTopBar={true}></Header>
          {children}
          <Footer></Footer>
        </main>
      </body>
    </html>
  );
};

export default DefalultLayout;
