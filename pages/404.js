/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import { useContext } from "react"
import Header from "../components/Header"
import { LanguageContext } from "../utils/context/language"

import pt from '../lang/pt.json'
import en from '../lang/en.json'
import Link from "next/link"

export default function Page404() {
  const { lang } = useContext(LanguageContext)
  console.log(lang);
  return (
    <>
      <Head>
        <title>Marlon.b | {lang ? "Não encontrada" : "Not found"}</title>
      </Head>
      <Header />
      <section className="tw-bg-gradient-to-br tw-from-cinza tw-to-preto tw-h-[100vh] md:tw-h-[calc(100vh-76px)]">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-w-[90%] tw-gap-10 md:tw-gap-0 md:tw-w-full tw-h-full  tw-max-w-[1280px] tw-mx-auto">
          <div className='md:tw-w-[40%] tw-relative tw-flex tw-items-center tw-justify-center'>
            <div className='tw-h-[300px] lg:tw-h-[400px] tw-w-[300px] lg:tw-w-[400px] tw-absolute tw-bg-marrom tw-top-10 tw-opacity-60 tw-rounded-full tw-blur-2xl'></div>
            <img src="/images/avatar-error.png" alt="" className='tw-z-30 avatar' />
          </div>
          <div className="md:tw-w-[40%] tw-w-full tw-flex tw-flex-col tw-items-center tw-gap-5 tw-z-20" >
            <p className="titulo tw-text-center">{lang ? pt.erro : en.erro}</p>
            <Link href="/" className="tw-text-white botao tw-px-10 tw-rounded-full">Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}