import { useContext, useRef } from "react"
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LanguageContext } from "../utils/context/language"
import emailjs from '@emailjs/browser';


import pt from '../lang/pt.json'
import en from '../lang/en.json'
import Head from "next/head";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";


export default function Contato() {
  const { lang } = useContext(LanguageContext);

  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x6ga4p6', 'template_3lmht5v', form.current, 'fQ-Pyt-l6yuytuDsV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <>
      <Head>
        <title>Marlon.b | {lang ? "Contato" : "Contact"}</title>
        <link rel="icon" type="image/png" href="/icone.png" />
      </Head>
      <section className="tw-bg-gradient-to-br tw-from-preto tw-to-cinza tw-w-full">
        <Header />
        <div className="tw-h-[100vh] tw-pt-10 md:tw-pt-0 md:tw-h-[calc(100vh-76px)] tw-flex tw-flex-col tw-justify-center tw-items-center">
          <span className="tw-text-xs tw-text-gray-400 -tw-mb-1">{lang ? pt.pages.contato.preTitulo : en.pages.contato.preTitulo}</span>
          <h1 className="titulo tw-text-5xl">{lang ? "Contato" : "Contact"}</h1>
          <form
            ref={form}
            onSubmit={enviarEmail}
            className={`tw-flex tw-flex-col tw-gap-3 tw-w-[90%] md:tw-w-3/5 xl:tw-w-2/5 tw-mx-auto tw-px-5 tw-py-10`}
          >
            <input className='input' type="text" name='name' placeholder={lang ? pt.pages.contato.placeholders.nome : en.pages.contato.placeholders.nome} required autoComplete='off' />
            <input className='input' type="email" name='email' placeholder={lang ? pt.pages.contato.placeholders.email : en.pages.contato.placeholders.email} required autoComplete='off' />
            <textarea className='input tw-border-t-2 tw-border-r-2 tw-border-marrom' name='message' rows='6' style={{ resize: "none" }} placeholder={lang ? pt.pages.contato.placeholders.mensagem : en.pages.contato.placeholders.mensagem} required autoComplete='off'></textarea>
            <button type='submit' className='botao tw-mx-auto tw-w-full tw-mt-4 tw-text-white' >{lang ? pt.pages.contato.botao : en.pages.contato.botao}</button>
          </form>
          <div className="tw-flex tw-items-center tw-gap-x-5 tw-mt-5">
            <div className="tw-h-[2px] tw-rounded-full tw-bg-gray-400 tw-w-[50px]"></div>
            <div className="tw-flex tw-items-center tw-gap-x-2 tw-text-xl tw-text-gray-400">
              <a href="https://www.linkedin.com/in/marlon-beraldo-67499820b/" target="_blank" rel="noreferrer" className="hover:tw-text-white animation">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/marlonberaldo/" target="_blank" rel="noreferrer" className="hover:tw-text-white animation">
                <AiFillGithub />
              </a>
              <a href="https://instagram.com/marlon_beraldo" target="_blank" rel="noreferrer" className="hover:tw-text-white animation">
                <AiFillInstagram />
              </a>
              <a href={`https://wa.me/5542999721435?text=${lang ? pt.whatsApp : en.whatsApp}`} target="_blank" rel="noreferrer" className="hover:tw-text-white animation">
                <IoLogoWhatsapp />
              </a>
            </div>
            <div className="tw-h-[2px] tw-rounded-full tw-bg-gray-400 tw-w-[50px]"></div>
          </div>
        </div>
        {/* <Footer /> */}
      </section>
    </>
  )
}