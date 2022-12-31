/* eslint-disable @next/next/no-img-element */
import pt from '../../lang/pt.json'
import en from '../../lang/en.json'
import { useContext } from 'react'
import { LanguageContext } from '../../utils/context/language'
import { FaHtml5 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const tecnologies = [
  {
    icon: <FaHtml5 />,
    name: "HTML",
  },
  {
    icon: <IoLogoCss3 />,
    name: "CSS",
  },
  {
    icon: <IoLogoJavascript />,
    name: "JavaScript",
  },
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <TbBrandNextjs />,
    name: "Next",
  },
  {
    icon: <SiTailwindcss />,
    name: "TailWind",
  },
]

export default function Experience() {
  var inicio = new Date(2022, 9, 19).getMonth();
  // console.log(inicio);
  const { lang } = useContext(LanguageContext)
  return (
    <section className='tw-max-w-[1280px] tw-w-[90%] md:tw-w-[90%] lg:tw-w-full tw-mx-auto tw-my-10 md:tw-my-20'>
      <div className='tw-flex tw-flex-col-reverse lg:tw-flex-row tw-items-center tw-justify-center tw-gap-6 lg:tw-h-[400px]'>
        {/* esquerda */}
        <div className='tw-relative tw-group tw-overflow-hidden tw-flex tw-items-center tw-w-full lg:tw-w-[60%] tw-px-6 tw-py-10 md:tw-py-6 tw-rounded-[30px] tw-border-t-2 tw-border-marrom tw-shadow-xl tw-h-full tw-bg-gradient-to-br tw-from-preto tw-to-cinza tw-z-20'>
          <img src="/images/mapbase.png" alt="" className='tw-opacity-[10%] group-hover:tw-opacity-[16%] tw-ease-linear tw-duration-300 tw-absolute tw-left-0 tw-z-0' />
          <div className='tw-w-full tw-flex tw-flex-col md:tw-flex-row tw-items-center lg:tw-items-start md:tw-justify-evenly tw-z-20'>
            <div className='tw-flex tw-flex-col'>
              <span className='tw-text-2xl tw-font-black tw-text-white tw-text-center'>{lang ? pt.pages.index.experiencia.DevWeb : en.pages.index.experiencia.DevWeb}</span>
              <div className="tw-grid tw-grid-cols-2 tw-gap-y-4 tw-py-2 md:tw-py-5 md:tw-px-2 tw-text-white">
                {
                  tecnologies.map((t, i) => {
                    return (
                      <article className="tw-flex tw-justify-center tw-items-center tw-gap-2 md:tw-text-xl" key={i}>
                        {t.icon}
                        <span className="tw-font-semibold">{t.name}</span>
                      </article>
                    )
                  })
                }
              </div>
              <div className="tw-flex tw-items-center tw-justify-center">
                <a href="https://cursos.alura.com.br/user/marlon-beraldo/fullCertificate/880594ec4a2a3acf825a6af039d9c890"
                  className="tw-text-sm tw-flex tw-items-center tw-text-center md:tw-text-base tw-animate-pulse tw-text-marrom hover:tw-animate-none hover:tw-text-bege tw-ease-out tw-duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {lang ? pt.pages.index.experiencia.conferencia : en.pages.index.experiencia.conferencia} {<MdOutlineKeyboardArrowRight />}
                </a>
              </div>
            </div>
            <div className='tw-flex tw-flex-col tw-items-center tw-pt-5 md:tw-pt-0'>
              <span className='tw-text-2xl tw-font-black tw-text-white tw-text-center'>{lang ? pt.pages.index.experiencia.experiencia.titulo : en.pages.index.experiencia.experiencia.titulo}</span>
              <div className='tw-flex tw-flex-col tw-items-center tw-py-2 md:tw-py-5 tw-text-center'>
                <span className='tw-text-white tw-font-black tw-pb-1 tw-leading-[110%]'>{lang ? pt.pages.index.experiencia.formacao.uepg.nome : en.pages.index.experiencia.formacao.uepg.nome}</span>
                <div className='tw-flex tw-flex-col tw-items-center lg:tw-items-center'>
                  <span className='tw-leading-[110%] tw-text-sm'>{lang ? pt.pages.index.experiencia.formacao.uepg.curso : en.pages.index.experiencia.formacao.uepg.curso}</span>
                  <span className='tw-leading-[110%] tw-text-sm'>{lang ? pt.pages.index.experiencia.formacao.uepg.tempo : en.pages.index.experiencia.formacao.uepg.tempo}</span>
                </div>
              </div>
              <div className='tw-flex tw-flex-col tw-items-center tw-py-2 '>
                <span className='tw-text-white tw-font-black tw-mb-1 tw-leading-[110%]'>{lang ? pt.pages.index.experiencia.experiencia.ade.nome : en.pages.index.experiencia.experiencia.ade.nome}</span>
                <div className='tw-flex tw-flex-col tw-items-center lg:tw-items-center'>
                  <span className='tw-leading-[110%] tw-text-sm'>{lang ? pt.pages.index.experiencia.experiencia.ade.cargo : en.pages.index.experiencia.experiencia.ade.cargo}</span>
                  <span className='tw-leading-[110%] tw-text-sm'>{lang ? pt.pages.index.experiencia.experiencia.ade.tempo : en.pages.index.experiencia.experiencia.ade.tempo}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* direita */}
        <div className='tw-w-full lg:tw-w-[25%] tw-flex tw-flex-col tw-items-center lg:tw-items-start tw-justify-end tw-rounded-[30px] lg:tw-border-t-2 tw-border-b-2 lg:tw-border-b-0 tw-border-marrom tw-shadow-xl tw-h-full tw-z-20 tw-bg-gradient-to-tl tw-from-preto tw-to-cinza tw-px-6 tw-py-10 md:tw-py-6'>
          <span className='tw-text-xs -tw-mb-1'>{lang ? pt.pages.index.experiencia.qualificacao : en.pages.index.experiencia.qualificacao} &</span>
          <h1 className='tw-text-2xl tw-font-black tw-text-white tw-mb-3'>{lang ? pt.pages.index.experiencia.MinhaExperiencia : en.pages.index.experiencia.MinhaExperiencia}</h1>
          <p className='tw-text-base tw-leading-[110%] tw-text-center lg:tw-text-start'>{lang ? pt.pages.index.experiencia.texto : en.pages.index.experiencia.texto}</p>
        </div>
        <div className='tw-h-[300px] md:tw-h-[400px] tw-w-[300px] tw-z-0 md:tw-w-[400px] tw-absolute tw-right-[10%] lg:tw-right-[20%] tw-bg-marrom tw-opacity-60 tw-rounded-full tw-blur-2xl'></div>
      </div>
    </section>
  )
}