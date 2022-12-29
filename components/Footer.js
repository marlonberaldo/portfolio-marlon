import { useContext } from "react"
import { LanguageContext } from "../utils/context/language"
import { FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

import pt from '../lang/pt.json'
import en from '../lang/en.json'

export default function Footer() {
  const { lang } = useContext(LanguageContext)
  return (
    <footer className="tw-max-w-[1280px] tw-w-[90%] lg:tw-w-full tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-text-gray-400 tw-border-gray-400 tw-px-5 tw-py-3 md:tw-py-5 tw-mt-20 tw-border-t-2">
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
  )
}