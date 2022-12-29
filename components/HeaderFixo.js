import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BsTranslate } from "react-icons/bs";
import { LanguageContext } from "../utils/context/language";

export default function HeaderFixo() {
  const { lang, setLang } = useContext(LanguageContext)
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
  }, []);

  return (
    <div className={`${offset < 500 ? "tw-opacity-0 -tw-z-10 -tw-translate-y-[100%]" : "tw-opacity-100 tw-translate-y-0 tw-top-5"} tw-hidden md:tw-block tw-fixed tw-w-full tw-z-[100] tw-ease-linear tw-duration-300`}>
      <div className="tw-w-[60%] lg:tw-w-[50%] tw-text-white tw-mx-auto tw-bg-cinza tw-border tw-border-white tw-rounded-full tw-flex tw-items-center tw-justify-between tw-px-10 tw-py-2">
        <Link href="#" className="tw-font-bold">
          <span className="tw-text-marrom">{"</M"}</span>
          <span className="tw-text-bege">arlon.b</span>
          <span className="tw-text-marrom">{">"}</span>
        </Link>
        <div className="tw-gap-4 tw-hidden md:tw-flex tw-items-center">
          <button className="tw-group tw-flex tw-items-center tw-gap-2" onClick={() => setLang(!lang)}>
            <span className="tw-opacity-0 group-hover:tw-opacity-90 tw-ease-out tw-duration-300 tw-text-sm">{lang ? "PT-BR" : "EN-US"}</span>
            <BsTranslate />
          </button>
          <a href="#" className="hover:tw-opacity-75 animation ">
            Home
          </a>
          <Link href="/contato" className="botao tw-text-sm tw-text-white">
            {lang ? "Contato" : "Contact"}
          </Link>
        </div>
      </div>
    </div>
  )
}