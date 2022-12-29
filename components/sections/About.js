/* eslint-disable @next/next/no-img-element */
import pt from '../../lang/pt.json'
import en from '../../lang/en.json'
import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../utils/context/language'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
const texto = `
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
`

export default function About() {
  const { lang } = useContext(LanguageContext);
  const [offsete, setOffsete] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffsete(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
  }, []);

  return (
    <section className='tw-max-w-[1280px] tw-mx-auto tw-w-[90%] md:tw-w-[90%] lg:tw-w-full tw-flex tw-flex-col md:tw-flex-row tw-items-center md:tw-justify-between tw-pt-40 md:tw-pt-20 lg:tw-pt-28 md:tw-py-16 md:tw-mt-0 tw-mb-10'>
      <div className='md:tw-w-[40%] tw-relative tw-flex tw-items-center tw-justify-center'>
        <div className='tw-h-[300px] lg:tw-h-[400px] tw-w-[300px] lg:tw-w-[400px] tw-absolute tw-bg-marrom tw-opacity-60 tw-rounded-full tw-blur-2xl'></div>
        <img src="/images/bichin.png" alt="" className='tw-z-30 avatar' />
      </div>
      <div className='tw-w-[90%] tw-mx-auto md:tw-w-[50%] tw-flex tw-flex-col tw-mt-20 tw-items-center tw-text-center'>
        <div className='tw-relative tw-flex tw-justify-center'>
          <span className='tw-absolute -tw-top-5 md:-tw-top-4 lg:-tw-top-4 tw-w-[90%] sm:tw-w-full md:tw-w-[90%] tw-opacity-20 tw-uppercase tw-text-gray-500 tw-z-10 tw-text-5xl tw-leading-[100%] tw-font-bold tw-text-center'>Marlon Beraldo</span>
          <span className='tw-uppercase tw-text-marrom tw-text-6xl tw-leading-[90%] tw-font-black tw-z-20'>Marlon Beraldo</span>
        </div>
        <p className='tw-text-lg tw-leading-[120%] lg:tw-text-xl tw-my-5'>
          {lang ? pt.pages.index.sobre.intro : en.pages.index.sobre.intro}
        </p>
        <div className='tw-hidden md:tw-block tw-w-[200px] tw-h-[2px] tw-bg-white tw-rounded-full hover:-tw-translate-y-1 hover:tw-shadow-sm  tw-ease-linear tw-duration-200'></div>
      </div>
      <i className={`${offsete > 30 ? "tw-opacity-0" : "tw-opacity-100"} tw-hidden lg:tw-block   tw-ease-linear tw-duration-200 tw-fixed tw-right-16 tw-bottom-16 tw-text-2xl tw-animate-bounce-slow`}>
        <HiOutlineArrowNarrowDown />
      </i>
    </section>
  )
}