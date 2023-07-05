import { useContext } from "react"
import { LanguageContext } from "../utils/context/language"
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

import pt from '../lang/pt.json'
import en from '../lang/en.json'
import Link from "next/link"
import { IoLogoWhatsapp } from "react-icons/io"

export default function Footer() {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="tw-max-w-[1280px] tw-w-[90%] lg:tw-w-full tw-mx-auto tw-flex tw-flex-col tw-items-center">
      {/* <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-gap-5 tw-my-10 tw-text-center md:tw-flex-row tw-justify-evenly ">
        <span className="tw-text-sm tw-font-black tw-text-white md:tw-text-xl">{lang ? "Entre em contato, ficarei feliz em ajudar!" : "Get in touch, i'll be happy to help!"}</span>
        <div className="tw-relative">
          <Link href="/contato" className="tw-z-20 tw-px-8 tw-py-2 tw-text-white tw-border-b-2 tw-rounded-full tw-shadow-lg tw-bg-gradient-to-t tw-from-preto tw-to-gray-700 hover:tw-border-bege hover:-tw-translate-y-1 animation tw-border-marrom">{lang ? "Contato" : "Contact"}</Link>
           <div className="tw-w-full tw-h-[5px] tw-bg-marrom tw-blur-lg tw-z-10 tw-bottom-0 tw-absolute"></div>
        </div>
      </div> */}
      <footer className="tw-flex tw-items-center tw-justify-between tw-w-full tw-px-5 tw-py-4 tw-text-gray-400 tw-border-t-2 tw-border-gray-400 md:tw-flex-row md:tw-py-5">
        <span className="tw-text-lg">
          <span className="tw-text-marrom">{"</M"}</span>
          <span className="tw-text-bege">arlon.b</span>
          <span className="tw-text-marrom">{">"}</span>
        </span>
        <div className="tw-items-center tw-hidden tw-gap-2 tw-my-2 tw-text-center md:tw-my-0 md:tw-flex">
          <span>{new Date().getFullYear()}</span>
          &copy;
          <span>{lang ? pt.footer : en.footer}</span>
        </div>
        <div className="tw-flex tw-items-center tw-text-xl tw-gap-x-2">
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
      </footer>
    </div>
  )
}