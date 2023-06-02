/* eslint-disable @next/next/no-img-element */
import pt from '../../lang/pt.json'
import en from '../../lang/en.json'
import { useContext, useState } from 'react'
import { LanguageContext } from '../../utils/context/language'
import { FaHtml5, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoCss3, IoLogoWhatsapp, IoLogoNodejs } from 'react-icons/io'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiPhp, SiTailwindcss, SiTypescript, SiMongodb } from 'react-icons/si'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

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
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    icon: <SiTailwindcss />,
    name: "TailWind",
  },
  {
    icon: <IoLogoNodejs />,
    name: "NodeJS",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    icon: <SiPhp />,
    name: "PHP",
  },
]

export default function Experience() {
  const { lang } = useContext(LanguageContext);
  const [exp, setExp] = useState('exp');

  function calculateDuration(startDate) {
    const today = new Date();

    const monthsDiff = (today.getFullYear() - startDate.getFullYear()) * 12 +
      (today.getMonth() - startDate.getMonth());

    const years = Math.floor(monthsDiff / 12);
    const remainingMonths = monthsDiff % 12;

    let result = "";

    if (years === 0) {
      result = `${remainingMonths}  ${lang ? 'meses' : 'months'}`;
    } else if (remainingMonths === 0) {
      result = `${years} ${lang ? 'ano(s)' : 'year(s)'}`;
    } else {
      result = `${years} ${lang ? " ano(s) e" : " year(s) and"} ${remainingMonths} ${lang ? "mes(s)" : "month(s)"}`;
    }

    return result;
  }

  const startDate = new Date(2022, 8, 19); // September 19, 2022
  const duration = calculateDuration(startDate);

  return (
    <section className='tw-max-w-[1280px] tw-w-[90%] md:tw-w-[90%] lg:tw-w-full tw-mx-auto tw-my-10 md:tw-my-20'>
      <div className='tw-flex tw-relative tw-flex-col-reverse lg:tw-flex-row tw-items-center tw-justify-center tw-gap-6 lg:tw-h-[400px]'>
        {/* esquerda */}
        <div className='tw-relative tw-group tw-overflow-hidden tw-flex tw-items-center tw-w-full lg:tw-w-[60%] tw-px-6 tw-py-8 md:tw-py-10 lg:tw-py-6 tw-rounded-[30px] tw-border-t-2 tw-border-marrom tw-shadow-xl tw-h-full tw-bg-gradient-to-br tw-from-preto tw-to-cinza tw-z-20'>
          <div className='tw-opacity-[10%] group-hover:tw-opacity-[18%] tw-left-0 tw-z-0 tw-ease-linear tw-duration-300 tw-absolute tw-h-[50%] md:tw-h-full tw-w-full'>
            <Image
              src="/images/mapbase.png"
              alt={`Mapbase`}
              fill
              sizes='(min-width: 768px) 90vw, 45vw'
              className='tw-object-cover md:tw-object-contain' />
          </div>
          <div className='tw-w-full tw-flex tw-flex-col md:tw-flex-row tw-items-center lg:tw-items-start md:tw-justify-evenly tw-z-20 tw-gap-3'>
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
                  <span className='tw-leading-[110%] tw-text-sm'>({duration})</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* direita */}
        <div className='tw-w-full tw-min-h-[400px] md:tw-min-h-[350px] lg:tw-w-[25%] tw-flex tw-flex-col tw-items-center lg:tw-items-start tw-justify-center tw-rounded-[30px] lg:tw-border-t-2 tw-border-b-2 lg:tw-border-b-0 tw-border-marrom tw-shadow-xl tw-h-full tw-z-20 tw-bg-gradient-to-bl tw-from-preto tw-to-cinza '>
          <div className='tw-px-6 tw-py-8 md:tw-py-10 lg:tw-py-6 tw-w-full'>
            <div className={`${exp === 'exp' ? "tw-block" : "tw-hidden"} tw-flex tw-flex-col tw-items-center lg:tw-items-start`}>
              <span className='tw-text-xs -tw-mb-1'>{lang ? pt.pages.index.experiencia.qualificacao : en.pages.index.experiencia.qualificacao} &</span>
              <h1 className='tw-text-2xl tw-font-black tw-text-white tw-mb-3'>{lang ? pt.pages.index.experiencia.MinhaExperiencia : en.pages.index.experiencia.MinhaExperiencia}</h1>
              <p className='tw-text-base tw-leading-[110%] tw-text-center lg:tw-text-start md:tw-w-[90%] lg:tw-w-full'>{lang ? pt.pages.index.experiencia.texto : en.pages.index.experiencia.texto}</p>
            </div>
            <div className={`${exp === 'quali' ? "tw-block" : "tw-hidden"} tw-flex tw-flex-col tw-items-center lg:tw-items-start`}>
              <span className='tw-text-xs -tw-mb-1'>{lang ? pt.pages.index.experiencia.MinhaExperiencia : en.pages.index.experiencia.MinhaExperiencia} &</span>
              <h1 className='tw-text-2xl tw-font-black tw-text-white tw-mb-3'>{lang ? pt.pages.index.experiencia.qualificacao : en.pages.index.experiencia.qualificacao}</h1>
              <p className='tw-text-base tw-leading-[110%] tw-text-center lg:tw-text-start md:tw-w-[90%] lg:tw-w-full'>{lang ? pt.pages.index.experiencia.tecnologias : en.pages.index.experiencia.tecnologias}</p>
            </div>
            <div className={`${exp === 'cont' ? "tw-block" : "tw-hidden"} tw-w-full tw-flex tw-flex-col tw-items-center lg:tw-items-start`}>
              <span className='tw-text-xs -tw-mb-1'>{lang ? "Contact" : "Contato"} &</span>
              <h1 className='tw-text-2xl tw-font-black tw-text-white tw-mb-3'>{lang ? "Contato" : "Contact"}</h1>
              <div className='tw-flex tw-flex-col tw-items-center lg:tw-items-start tw-gap-2 tw-leading-[110%] tw-text-center lg:tw-text-start md:tw-w-[90%] lg:tw-w-full'>
                <p className='tw-flex tw-items-center tw-gap-2 hover:tw-text-white animation'>
                  <i><HiOutlineMail /></i>
                  <a href="mailto:marlon_beraldo@hotmail.com" className='tw-text-sm'>marlon_beraldo@hotmail.com</a>
                </p>
                <p className='tw-flex tw-items-center tw-gap-2 hover:tw-text-white animation'>
                  <i><FaLinkedinIn /></i>
                  <a href="https://www.linkedin.com/in/marlon-beraldo-67499820b/" target="_blank" rel="noreferrer" className='tw-text-sm'>Marlon Beraldo</a>
                </p>
                <p className='tw-flex tw-items-center tw-gap-2 hover:tw-text-white animation'>
                  <i><IoLogoWhatsapp /></i>
                  <a href={`https://wa.me/5542999721435`} target="_blank" rel="noreferrer" className='tw-text-sm'>(42) 9972-1435</a>
                </p>
              </div>
              <p className='tw-text-sm tw-flex tw-flex-col tw-items-center tw-mt-10 md:tw-mt-4 lg:tw-mt-10 tw-w-full tw-gap-2 tw-text-center'>
                {lang ? "Ou se preferir, mande uma mensagem.." : "Or if you prefer, send a message.."}
                <Link href="/contato" className='botao tw-text-white'>{lang ? "Contato" : "Contact"}</Link>
              </p>
            </div>
          </div>
          <div className='tw-flex tw-items-center tw-justify-evenly tw-w-[40%] md:tw-w-[20%] lg:tw-w-[40%] tw-mx-auto tw-mb-8 lg:tw-mb-0'>
            <div className='tw-flex tw-flex-col tw-items-center tw-gap-[3px]'>
              <span className={`${exp === 'exp' ? "" : "tw-translate-y-4 -tw-z-10 tw-opacity-0"} tw-ease-linear tw-duration-200 tw-text-xs`}>Exp</span>
              <button onClick={() => setExp('exp')} className={`${exp === 'exp' ? ' tw-bg-marrom' : 'tw-bg-gray-400 hover:tw-bg-bege/80'} tw-ease-out tw-duration-200 tw-w-[30px] tw-h-[6px] tw-rounded-full`} />
            </div>
            <div className='tw-flex tw-flex-col tw-items-center tw-gap-[3px]'>
              <span className={`${exp === 'quali' ? "" : "tw-translate-y-4 -tw-z-10 tw-opacity-0"} tw-ease-linear tw-duration-200 tw-text-xs`}>Quali</span>
              <button onClick={() => setExp('quali')} className={`${exp === 'quali' ? ' tw-bg-marrom' : 'tw-bg-gray-400 hover:tw-bg-bege/80'} tw-ease-out tw-duration-200 tw-w-[30px] tw-h-[6px] tw-rounded-full`} />
            </div>
            <div className='tw-flex tw-flex-col tw-items-center tw-gap-[3px]'>
              <span className={`${exp === 'cont' ? "" : "tw-translate-y-4 -tw-z-10 tw-opacity-0"} tw-ease-linear tw-duration-200 tw-text-xs`}>Cont</span>
              <button onClick={() => setExp('cont')} className={`${exp === 'cont' ? ' tw-bg-marrom' : 'tw-bg-gray-400 hover:tw-bg-bege/80'} tw-ease-out tw-duration-200 tw-w-[30px] tw-h-[6px] tw-rounded-full`} />
            </div>

          </div>
        </div>
        <div className='tw-h-[300px] md:tw-h-[400px] tw-w-[300px] tw-z-0 md:tw-w-[400px] tw-absolute tw-right-[10%] lg:tw-right-[20%] tw-bg-marrom tw-opacity-60 tw-rounded-full tw-blur-2xl'></div>
      </div>
    </section >
  )
}