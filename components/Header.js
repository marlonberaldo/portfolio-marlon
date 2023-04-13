import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../utils/context/language";
import { BsTranslate } from "react-icons/bs"
import { useRouter } from "next/router";

export default function Header() {
  const { lang, setLang } = useContext(LanguageContext);
  const [burger, setBurger] = useState(false);
  const router = useRouter();

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
      <header className={`tw-max-w-[1280px] tw-w-full tw-mx-auto tw-fixed md:tw-static tw-top-0  tw-flex tw-justify-between tw-items-center tw-py-5 tw-px-5 ${burger ? "tw-bg-none" : "tw-bg-gradient-to-b"} md:tw-bg-none animation tw-to-preto tw-from-cinza tw-z-[100]`}>
        <a href="#" className={`${router.asPath == "/" ? "" : "tw-hidden"} titulo tw-font-black tw-z-50`}>
          <span className="tw-text-marrom">{"</M"}</span>
          <span className="tw-text-bege">arlon.b</span>
          <span className="tw-text-marrom">{">"}</span>
        </a>
        <Link href="/" className={`${router.asPath != "/" ? "" : "tw-hidden"} titulo tw-font-black tw-z-50`}>
          <span className="tw-text-marrom">{"</M"}</span>
          <span className="tw-text-bege">arlon.b</span>
          <span className="tw-text-marrom">{">"}</span>
        </Link>
        <div className="tw-gap-4 tw-hidden md:tw-flex tw-items-center">
          <button className="tw-group tw-flex tw-items-center tw-gap-2" onClick={() => setLang(!lang)}>
            <span className="tw-opacity-0 group-hover:tw-opacity-90 tw-ease-out tw-duration-300">{lang ? "PT-BR" : "EN-US"}</span>
            <BsTranslate />
          </button>
          <Link href="/" className="hover:tw-opacity-75 animation ">
            Home
          </Link>
          <Link href="/contato" className="botao tw-text-sm tw-text-white">
            {lang ? "Contato" : "Contact"}
          </Link>
        </div>
        <div className="tw-flex tw-items-center tw-gap-x-2 md:tw-hidden">
          <button className="tw-group tw-flex tw-items-center tw-gap-2 tw-z-50" onClick={() => setLang(!lang)}>
            <span className="tw-text-xs">{lang ? "PT" : "EN"}</span>
            <i className="tw-text-sm">
              <BsTranslate />
            </i>
          </button>
          <button className="tw-flex tw-flex-col tw-items-end tw-gap-y-[3px] tw-min-w-[40px] tw-z-50" onClick={() => setBurger(!burger)}>
            <div className={`${burger ? "burger-clicado tw-w-[25px]" : "burger tw-w-[18px]"}`}></div>
            <div className={`${burger ? "burger-clicado tw-w-[20px]" : "burger tw-w-[30px]"} `}></div>
            <div className={`${burger ? "burger-clicado tw-w-[30px]" : "burger tw-w-[25px]"}`}></div>
          </button>
        </div>
      </header>

      <div className={`tw-fixed !tw-z-40 tw-top-0 md:tw-hidden ${burger ? "tw-translate-y-0" : "tw-translate-y-[-100%]"} tw-bg-gradient-to-t tw-to-cinza tw-from-preto tw-opacity-90 tw-ease-linear tw-duration-300 tw-h-full tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-y-3 tw-justify-center`}>
        <Link href="/" className="hover:tw-opacity-75 animation tw-z-0">
          Home
        </Link>
        <Link href="/contato" className="botao tw-text-sm tw-z-0 tw-text-white">
          {lang ? "Contato" : "Contact"}
        </Link>
      </div>
    </>
  )
}