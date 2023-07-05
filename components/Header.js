import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../utils/context/language";
import { BsTranslate } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

import pt from '../lang/pt.json'
import en from '../lang/en.json'

export default function Header() {
  const { lang, setLang } = useContext(LanguageContext);
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (burger) {
      body.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'visible';
    }
  }, [burger])

  return (
    <>
      <header className={`tw-max-w-[1280px] tw-w-full tw-mx-auto tw-fixed md:tw-static tw-top-0  tw-flex tw-justify-between tw-items-center tw-py-5 tw-px-5 ${burger ? "tw-bg-none" : "tw-bg-gradient-to-b"} md:tw-bg-none animation tw-to-preto tw-from-cinza tw-z-[110]`}>
        <Link
          href="/"
          onClick={() => setBurger(false)}
          className={` titulo tw-font-black tw-z-50`}>
          <span className="tw-text-marrom">{"</M"}</span>
          <span className="tw-text-bege">arlon.b</span>
          <span className="tw-text-marrom">{">"}</span>
        </Link>
        <div className="tw-items-center tw-hidden tw-gap-4 md:tw-flex">
          <button className="tw-flex tw-items-center tw-gap-2 tw-group" onClick={() => setLang(prev => !prev)}>
            <span className="tw-duration-300 tw-ease-out tw-opacity-0 group-hover:tw-opacity-90">{lang ? "PT-BR" : "EN-US"}</span>
            <BsTranslate />
          </button>
          <Link href="/" className="hover:tw-opacity-75 animation ">
            Home
          </Link>
          <Link href="#contato" className="tw-text-sm tw-text-white botao">
            {lang ? "Contato" : "Contact"}
          </Link>
        </div>
        <div className="tw-flex tw-items-center tw-gap-x-2 md:tw-hidden">
          <button className="tw-z-50 tw-flex tw-items-center tw-gap-2 tw-group" onClick={() => setLang(prev => !prev)}>
            <span className="tw-text-xs">{lang ? "PT" : "EN"}</span>
            <i className="tw-text-sm">
              <BsTranslate />
            </i>
          </button>
          <button className="tw-flex tw-flex-col tw-items-end tw-gap-y-[3px] tw-min-w-[40px] tw-z-50" onClick={() => setBurger(prev => !prev)}>
            <div className={`${burger ? "burger-clicado tw-w-[25px]" : "burger tw-w-[18px]"}`}></div>
            <div className={`${burger ? "burger-clicado tw-w-[20px]" : "burger tw-w-[30px]"} `}></div>
            <div className={`${burger ? "burger-clicado tw-w-[30px]" : "burger tw-w-[25px]"}`}></div>
          </button>
        </div>
      </header>

      {/* modal */}
      <div className={`tw-fixed !tw-z-[100] tw-top-0 md:tw-hidden ${burger ? "tw-translate-y-0" : "tw-translate-y-[-100%]"} tw-bg-neutral-900/90 tw-backdrop-blur-2xl tw-inset-0 tw-opacity-90 tw-ease-linear tw-duration-300 tw-h-full tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-y-3 tw-justify-center`}>
        <Link
          href="/"
          onClick={() => setBurger(false)}
          className="tw-z-0 hover:tw-opacity-75 animation">
          Home
        </Link>
        <Link
          href="#contato"
          onClick={() => setBurger(false)}
          className="tw-z-0 tw-text-sm tw-text-white botao">
          {lang ? "Contato" : "Contact"}
        </Link>
        <div className="tw-flex tw-items-center tw-text-xl tw-mt-7 tw-gap-x-3">
          <a href="https://www.linkedin.com/in/marlon-beraldo-67499820b/" target="_blank" rel="noreferrer" className="hover:tw-text-white animation">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/marlonberaldo/" target="_blank" rel="noreferrer" className="hover:tw-text-white animation">
            <AiFillGithub />
          </a>
          <a href={`https://wa.me/5542999721435?text=${lang ? pt.whatsApp : en.whatsApp}`} target="_blank" rel="noreferrer" className="hover:tw-text-white animation">
            <IoLogoWhatsapp />
          </a>
          <a href="https://instagram.com/marlon_beraldo" target="_blank" rel="noreferrer" className="hover:tw-text-white animation">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </>
  )
}