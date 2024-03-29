/* eslint-disable @next/next/no-img-element */
import pt from '../../lang/pt.json'
import en from '../../lang/en.json'
import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../utils/context/language'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import Image from 'next/image'
export default function About() {
  const { lang } = useContext(LanguageContext);
  const [offsete, setOffsete] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffsete(window.pageYOffset);

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
  }, []);
  return (
    <section className='tw-max-w-[1280px] tw-mx-auto tw-w-[90%] md:tw-w-[90%] lg:tw-w-full tw-flex tw-flex-col md:tw-flex-row tw-items-center md:tw-justify-between tw-pt-32 md:tw-pt-20 lg:tw-pt-28 md:tw-py-16 md:tw-mt-0'>
      <div className='md:tw-w-[40%] tw-relative tw-flex tw-items-center tw-justify-center'>
        <div className='tw-h-[300px] lg:tw-h-[400px] tw-w-[300px] lg:tw-w-[400px] tw-absolute tw-bg-marrom tw-top-10 tw-opacity-60 tw-rounded-full tw-blur-2xl'></div>
        <div className='tw-relative md:tw-h-[400px] md:tw-w-[400px] tw-animate-avatar'>
          <Image
            src="/images/bichin.webp"
            alt="Icone"
            priority
            width={800}
            height={800}
            quality={100}
          />
        </div>
      </div>
      <div className='tw-w-full tw-mx-auto md:tw-w-[50%] tw-flex tw-flex-col tw-mt-20 md:tw-mt-0 tw-items-center tw-text-center tw-group'>
        <div className='tw-relative tw-flex tw-justify-center'>
          <span className='tw-absolute borda_texto -tw-top-5 md:-tw-top-4 lg:-tw-top-4 tw-w-[90%] sm:tw-w-full md:tw-w-[90%] tw-opacity-20 tw-uppercase tw-z-10 tw-text-5xl tw-leading-[100%] tw-font-bold tw-text-center'>Marlon Beraldo</span>
          <span className='tw-uppercase tw-text-marrom tw-text-6xl tw-leading-[90%] tw-font-black tw-z-20'>Marlon Beraldo</span>
        </div>
        <p className='tw-text-lg tw-leading-[120%] lg:tw-text-xl tw-my-5'>
          {lang ? pt.pages.index.sobre.intro : en.pages.index.sobre.intro}
        </p>
        <div className='tw-hidden md:tw-block tw-w-[200px] tw-h-[3px] tw-bg-white tw-rounded-full group-hover:-tw-translate-y-1 group-hover:tw-shadow-sm tw-ease-linear tw-duration-200'></div>
      </div>
      <i className={`${offsete > 30 ? "tw-opacity-0" : "tw-opacity-100"} tw-hidden lg:tw-block   tw-ease-linear tw-duration-200 tw-fixed tw-right-16 tw-bottom-16 tw-text-2xl tw-animate-bounce-slow`}>
        <HiOutlineArrowNarrowDown />
      </i>
    </section>
  )
}