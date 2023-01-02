import Head from "next/head";
import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderFixo from "../components/HeaderFixo";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Jobs from "../components/sections/Jobs";
import { LanguageContext } from "../utils/context/language";

export default function Home() {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>Marlon.b | Home</title>
        <meta name="description" content={lang ? "Portifolio - Marlon Beraldo" : "Web Portifolio - Marlon Beraldo"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/icone.png" />
      </Head>
      <HeaderFixo />
      <Header />
      <About />
      <Experience />
      <Jobs />
      <Footer />
    </>
  )
}
