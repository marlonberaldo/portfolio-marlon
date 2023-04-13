/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useContext, useState } from 'react'
import { LanguageContext } from '../../utils/context/language'

import { bancoJobs } from '../../utils/db/dbJobs'

import pt from '../../lang/pt.json'
import en from '../../lang/en.json'
import Link from 'next/link'


export default function Jobs() {
  const { lang } = useContext(LanguageContext);
  const [qtde, setQtde] = useState(5);
  return (
    <section className="tw-max-w-[1280px] tw-w-[90%] md:tw-w-[90%] lg:tw-w-full tw-mx-auto tw-flex tw-flex-col tw-items-center">
      <div className='tw-flex tw-flex-col tw-items-center'>
        <span className='tw-text-xs -tw-mb-1'>{lang ? pt.pages.index.servicos.oferta : en.pages.index.servicos.oferta}</span>
        <div className='tw-flex tw-items-center tw-gap-2'>
          <h1 className='titulo tw-text-center tw-text-white'>{lang ? pt.pages.index.servicos.servico : en.pages.index.servicos.servico}</h1>
          {/* <i className='tw-text-xl tw-text-white tw-animate-ping-slow'>
            <MdTouchApp />
          </i> */}
        </div>
      </div>
      <div className={`tw-flex tw-w-full tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-gap-3 tw-my-10`}>
        {
          bancoJobs.slice(0, qtde).map((j, i) => {
            return (
              <div className="tw-relative tw-w-full md:tw-w-auto tw-group tw-cursor-pointer tw-rounded-tr-[30px] tw-rounded-tl-[7px] tw-rounded-bl-[30px] tw-rounded-br-[7px]" key={i}>
                <img loading='lazy' src={j.image} alt="" className="tw-w-full tw-mx-auto md:tw-w-[100px] lg:tw-w-[140px] tw-h-[80px] md:tw-h-[400px] group-hover:tw-h-[200px] group-hover:md:tw-h-[400px] tw-opacity-50 group-hover:tw-blur-[2px] tw-rounded-tr-[30px] tw-rounded-tl-[7px] tw-rounded-bl-[30px] tw-rounded-br-[7px] tw-object-center group-hover:tw-object-cover group-hover:md:tw-w-[400px] group-hover:lg:tw-w-[500px] tw-ease-linear tw-duration-300 md:tw-duration-500 tw-object-cover" />
                <div className="tw-flex md:!tw-min-h-[80px] tw-flex-col tw-items-center tw-absolute tw-bottom-0 md:tw-bottom-12 group-hover:tw-bottom-5 group-hover:md:tw-bottom-20 tw-w-full">
                  <a href={j.link} target="_blank" rel="noreferrer" className="tw-flex tw-items-center tw-justify-center md:tw-justify-start group-hover:tw-justify-center md:-tw-rotate-90 group-hover:tw-rotate-0 tw-ease-linear tw-duration-300 tw-text-center tw-w-[60%] tw-whitespace-nowrap tw-text-white tw-font-extrabold tw-text-xl md:tw-text-2xl tw-pointer-events-none group-hover:tw-pointer-events-auto">
                    <span>{j.title}</span>
                    <i className='-tw-mb-1 tw-opacity-0 group-hover:tw-opacity-100 tw-ease-linear tw-duration-200'><MdOutlineKeyboardArrowRight /></i>
                  </a>
                  <div className="tw-opacity-0 group-hover:tw-opacity-100 tw-flex tw-gap-3 tw-text-xl tw-my-1 tw-text-white tw-ease-linear md:tw-ease-out tw-duration-200 md:tw-duration-200">
                    {j.techs}
                  </div>
                  <span className="tw-opacity-0 group-hover:tw-opacity-100 tw-flex tw-gap-1 tw-items-center tw-text-xs tw-text-white tw-ease-linear md:tw-ease-out tw-duration-200 md:tw-duration-200">Design by <a href="https://agenciaade.com.br" target="_blank" rel="noreferrer" className='hover:tw-opacity-80 animation'>agenciaade.com.br</a></span>
                </div>
              </div>
            )
          })
        }
      </div>
      {/* <button className={`${bancoJobs.length > qtde ? "" : "tw-hidden"} botao tw-text-white`} onClick={() => setQtde(qtde + 5)}>{lang ? "Ver mais" : "See more"}</button> */}
      {/* <Link className='botao tw-text-white' href="/jobs">{lang ? "Veja mais" : "See more"}</Link> */}
    </section>
  )
}