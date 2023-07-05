import Head from "next/head";
import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderFixo from "../components/HeaderFixo";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Jobs from "../components/sections/Jobs";
import Contato from "../components/sections/Contato";

import { LanguageContext } from "../utils/context/language";
import { bancoJobs } from "../utils/db/dbJobs";


export default function Home() {
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <Head>
        <title>Marlon.b | Home</title>
        <meta name="description" lang="pt" content="Meu nome é Marlon Beraldo, trabalho como Desenvolvedor Web. " />
        <meta name="description" lang="en" content="My name is Marlon Beraldo, i work as a Web Developer." />
        <meta
          name="keywords"
          content="Marlon Beraldo, Marlon, Marlon Beraldo Portfolio, Marlon Beraldo Developer, Marlon Beraldo Dev, Marlon Beraldo Desenvolvedor, Marlon Portfolio, Marlon Developer, Marlon Desenvolvedor, Marlon Beraldo Site,  Marlon Beraldo UEPG"
        />
        <link rel="canonical" href="https://portfolio-marlon-five.vercel.app" />
        <link rel="icon" type="image/png" href="/icone.png" />
      </Head>
      <HeaderFixo />
      <Header />
      <About />
      <Experience />
      <Jobs />
      <Contato />
      <Footer />
    </>
  )
}
