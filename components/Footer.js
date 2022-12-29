import { useContext } from "react"
import { LanguageContext } from "../utils/context/language"
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

import pt from '../lang/pt.json'
import en from '../lang/en.json'
import Link from "next/link"

export default function Footer() {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="tw-max-w-[1280px] tw-w-[90%] lg:tw-w-full tw-mx-auto tw-flex tw-flex-col tw-items-center">
      <div className="tw-flex tw-items-center tw-justify-evenly tw-w-full tw-my-10 ">
        <span className="tw-text-4xl tw-font-black tw-text-white">{lang ? "Faça um orçamento" : "Make a budget"}</span>
        <div className="tw-relative">
          <Link href="/contato" className="tw-bg-gradient-to-b tw-z-20 tw-from-preto tw-via-cinza tw-to-gray-700 tw-px-8 tw-py-2 tw-rounded-full tw-border-b-2 hover:tw-border-bege hover:-tw-translate-y-1 tw-shadow-lg animation tw-border-marrom tw-text-white">{lang ? pt.pages.index.sobre.botao : en.pages.index.sobre.botao}</Link>
          <div className="tw-w-full tw-h-[5px] tw-bg-marrom tw-blur-lg tw-z-10 tw-bottom-0 tw-absolute"></div>
        </div>
      </div>
      <footer className="tw-w-full tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-text-gray-400 tw-border-gray-400 tw-px-5 tw-py-3 md:tw-py-5 tw-border-t-2">
        <span className="tw-text-lg">
          <span className="tw-text-marrom">{"</M"}</span>
          <span className="tw-text-bege">arlon.b</span>
          <span className="tw-text-marrom">{">"}</span>
        </span>
        <span className="tw-text-center tw-my-2">
          &copy; {lang ? pt.footer : en.footer}
        </span>
        <div className="tw-flex tw-items-center tw-gap-x-2 tw-text-xl">
          <a href="https://www.linkedin.com/in/marlon-beraldo-67499820b/" target="_blank" rel="noreferrer" className="hover:tw-text-white animation">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/marlonberaldo/" target="_blank" rel="noreferrer" className="hover:tw-text-white animation">
            <AiFillGithub />
          </a>
          <a href="https://instagram.com/marlon_beraldo" target="_blank" rel="noreferrer" className="hover:tw-text-white animation">
            <AiFillInstagram />
          </a>
        </div>
      </footer>
    </div>
  )
}