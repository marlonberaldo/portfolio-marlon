import { useContext, useEffect, useRef, useState } from "react"
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LanguageContext } from "../utils/context/language"
import emailjs from '@emailjs/browser';


import pt from '../lang/pt.json'
import en from '../lang/en.json'
import Head from "next/head";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import ReactLoading from "react-loading";



export default function Contato() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const { lang } = useContext(LanguageContext);
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  function timer() {
    setTimeout(() => {
      setLoad(true)
    }, 300)
  }
  useEffect(() => {
    timer()
  }, [])
  const form = useRef();

  const onSubmit = (data) => {

    setLoading(true);
    emailjs.sendForm('service_x6ga4p6', 'template_3lmht5v', '#myForm', 'fQ-Pyt-l6yuytuDsV')
      .then((result) => {
        setLoading(false);
        toast.success(`${lang ? "E-mail enviado com sucesso!" : "Email successfully sent!"} 😊`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        reset();
      })
      .catch((error) => {
        setLoading(false);
        toast.error(`${lang ? "Erro ao enviar o e-mail! Tente mais tarde" : "Error sending the email! Please try again later."} 😞`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
  };

  return (
    <>
      <Head>
        <title>Marlon.b | {lang ? "Contato" : "Contact"}</title>
        <link rel="icon" type="image/png" href="/icone.png" />
      </Head>
      <section className="tw-bg-gradient-to-br tw-from-preto tw-to-cinza tw-w-full">
        <Header />
        <div className={`${load ? "tw-scale-100" : "tw-scale-0"} tw-ease-linear tw-duration-300 tw-h-[100vh] tw-pt-10 md:tw-pt-0 md:tw-h-[calc(100vh-76px)] tw-flex tw-flex-col tw-justify-center tw-items-center`}>
          <span className="tw-text-xs tw-text-gray-400 -tw-mb-1">{lang ? pt.pages.contato.preTitulo : en.pages.contato.preTitulo}</span>
          <h1 className="titulo tw-text-5xl tw-text-white">{lang ? "Contato" : "Contact"}</h1>
          <form
            id="myForm"
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className={`tw-flex tw-flex-col tw-gap-3 tw-w-[100%] md:tw-w-[75%] xl:tw-w-2/5 tw-mx-auto tw-px-5 tw-py-10`}
          >
            <div className="tw-flex tw-items-center tw-justify-center tw-relative">
              <input
                type="text"
                name='name'
                placeholder={lang ? pt.pages.contato.placeholders.nome : en.pages.contato.placeholders.nome}
                {...register('name', { required: true })}
                className={`input ${errors.name && "form-error"}`}
              />
              <i className={`${errors.name ? "tw-opacity-100" : "tw-opacity-0"} tw-hidden md:tw-block tw-ease-linear tw-duration-200 tw-text-2xl left-bounce tw-absolute -tw-right-12`}>
                <HiOutlineArrowNarrowLeft />
              </i>

            </div>
            <div className="tw-flex tw-items-center tw-justify-center tw-relative">
              <input
                type="email"
                name='email'
                placeholder={lang ? pt.pages.contato.placeholders.email : en.pages.contato.placeholders.email}
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className={`input ${errors.email && "form-error"}`}
              />
              <i className={`${errors.email ? "tw-opacity-100" : "tw-opacity-0"} tw-hidden md:tw-block tw-ease-linear tw-duration-200 tw-text-2xl left-bounce tw-absolute -tw-right-12`}>
                <HiOutlineArrowNarrowLeft />
              </i>
            </div>
            <div className="tw-flex tw-items-center tw-justify-center tw-relative">
              <textarea
                name='message'
                rows='6'
                style={{ resize: "none" }}
                placeholder="Mensagem"
                {...register('message', { required: true })}
                className={`input tw-border-t-2 tw-border-r-2 tw-border-marrom ${errors.message && "form-error"}`}
              />
              <i className={`${errors.message ? "tw-opacity-100" : "tw-opacity-0"} tw-hidden md:tw-block tw-ease-linear tw-duration-200 tw-text-2xl left-bounce tw-absolute -tw-right-12`}>
                <HiOutlineArrowNarrowLeft />
              </i>
            </div>
            {loading ? (
              <div className={`botao tw-mx-auto tw-w-full tw-mt-4 tw-text-white tw-flex tw-justify-center tw-items-center ${loading ? "tw-pointer-events-none" : ""}`}>
                <ReactLoading
                  className="tw-flex tw-items-center"
                  color="#fff"
                  type="bubbles"
                  height={30}
                  width={60}
                />
              </div>
            ) : (
              <button disabled={loading} type="submit" className="botao tw-mx-auto tw-w-full tw-mt-4 tw-text-white">
                {lang ? pt.pages.contato.botao : en.pages.contato.botao}
              </button>
            )}
          </form>

          <div className="tw-flex tw-items-center tw-gap-x-5 tw-mt-5">
            <div className="tw-h-[2px] tw-rounded-full tw-bg-gray-400 tw-w-[50px]"></div>
            <div className="tw-flex tw-items-center tw-gap-x-2 tw-text-xl tw-text-gray-400">
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
            <div className="tw-h-[2px] tw-rounded-full tw-bg-gray-400 tw-w-[50px]"></div>
          </div>
        </div>
        {/* <Footer /> */}
      </section>
    </>
  )
}