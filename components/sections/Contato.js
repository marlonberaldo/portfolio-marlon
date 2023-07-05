import { useContext, useEffect, useRef, useState } from "react"
import { LanguageContext } from "../../utils/context/language"
import emailjs from '@emailjs/browser';


import pt from '../../lang/pt.json'
import en from '../../lang/en.json'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import ReactLoading from "react-loading";



export default function Contato() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const { lang } = useContext(LanguageContext);
  const [loading, setLoading] = useState(false);

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
      <section id="contato" className="tw-w-full">
        <div className={`tw-my-10 lg:tw-my-20 tw-flex tw-flex-col tw-justify-center tw-items-center`}>
          <span className="tw-text-xs tw-text-gray-400 -tw-mb-1">{lang ? pt.pages.contato.preTitulo : en.pages.contato.preTitulo}</span>
          <h1 className="tw-text-3xl tw-font-black tw-text-white md:tw-text-4xl">{lang ? "Contato" : "Contact"}</h1>
          <form
            id="myForm"
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className={`tw-flex tw-flex-col tw-gap-3 tw-w-[100%] md:tw-w-[75%] lg:tw-w-[60%] xl:tw-w-[50%] tw-mx-auto tw-px-5 tw-py-10`}
          >
            <div className="tw-relative tw-flex tw-items-center tw-justify-center">
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
            <div className="tw-relative tw-flex tw-items-center tw-justify-center">
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
            <div className="tw-relative tw-flex tw-items-center tw-justify-center">
              <textarea
                name='message'
                rows='6'
                style={{ resize: "none" }}
                placeholder={lang ? pt.pages.contato.placeholders.mensagem : en.pages.contato.placeholders.mensagem}
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
              <button disabled={loading} type="submit" className="tw-w-full tw-mx-auto tw-mt-4 tw-text-white botao">
                {lang ? pt.pages.contato.botao : en.pages.contato.botao}
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  )
}