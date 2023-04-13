/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useContext, useMemo, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LanguageContext } from "../utils/context/language";
import { bancoJobs } from '../utils/db/dbJobs'
import Link from "next/link";

export default function Jobs() {
  const { lang } = useContext(LanguageContext);
  const [modal, setModal] = useState();
  const [selectedJob, setSelectedJob] = useState(bancoJobs[0]);
  const [search, setSearch] = useState('real');
  const [sumSearch, setSumSearch] = useState([]);


  const filtredJobs = useMemo(() => {
    const lowerSearch = sumSearch
    // console.log(lowerSearch);
    let filtradoss = bancoJobs.filter((job) => job.category[1]?.toLowerCase().includes(lowerSearch) || job.category[0].toLowerCase().includes(lowerSearch))
    return filtradoss;
  }, [sumSearch])

  // console.log(sumSearch);
  return (
    <>
      <Head>
        <title>Marlon.b | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/icone.png" />
      </Head>
      <Header />
      <section className="tw-w-full tw-h-[calc(100dvh-76px)] tw-flex tw-flex-col tw-items-center tw-justify-center">
        <span className="md:tw-text-xl">{lang ? "Não há nada aqui ainda.." : "There's nothing here yet.."}</span>
        <div className="tw-flex tw-items-center tw-gap-2">
          <span className="md:tw-text-xl">{lang ? "Retorne para" : "Return to"}</span>
          <Link href="/" className="md:tw-text-xl tw-text-white tw-font-semibold hover:-tw-translate-y-[2px] animation">
            home
          </Link>
        </div>
      </section>
    </>
  )

  return (
    <>
      <Head>
        <title>Marlon.b | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/icone.png" />
      </Head>
      <Header />
      <section className={`tw-max-w-[1280px] tw-mx-auto tw-w-[90%] md:tw-w-[90%] lg:tw-w-full tw-flex tw-flex-col`}>
        <div className="tw-flex tw-items-center tw-gap-2 tw-justify-center tw-mb-10">
          <button
            onClick={() => {
              if (sumSearch.some(item => item === 'real')) {
                setSumSearch(current => current.filter((itemDeletado) => itemDeletado !== 'real'));
                return;
              }
              setSumSearch(arr => [...arr, 'real'])
            }}
            className={`botao tw-text-white ${sumSearch.some(item => item === 'real') ? "tw-bg-marrom" : "tw-bg-transparent"}`}>
            Real Work
          </button>
          <button
            onClick={() => {
              if (sumSearch.some(item => item === 'teste')) {
                setSumSearch(current => current.filter((itemDeletado) => itemDeletado !== 'teste'));
                return;
              }
              setSumSearch(arr => [...arr, 'teste'])
            }}
            className={`botao tw-text-white ${sumSearch.some(item => item === 'teste') ? "tw-bg-marrom" : "tw-bg-transparent"}`}>
            teste
          </button>
          <button
            onClick={() => {
              if (sumSearch.some(item => item === 'cate')) {
                setSumSearch(current => current.filter((itemDeletado) => itemDeletado !== 'cate'));
                return;
              }
              setSumSearch(arr => [...arr, 'cate'])
            }}
            className={`botao tw-text-white ${sumSearch.some(item => item === 'cate') ? "tw-bg-marrom" : "tw-bg-transparent"}`}>
            cate
          </button>
        </div>
        <div className="tw-w-full tw-flex tw-items-start tw-justify-between">
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-w-[50%]">
            {
              filtredJobs.length > 0 ?
                filtredJobs.map((b, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedJob(filtredJobs[i])
                      setModal(true);
                    }}
                    className={`tw-border-2 tw-rounded-tr-[30px] tw-rounded-bl-[30px]  tw-p-1 tw-h-[100px] tw-w-[400px] tw-relative tw-flex tw-items-center tw-justify-center`}
                  >
                    <img src={b.image} alt="" className="tw-rounded-tr-[30px] tw-rounded-bl-[30px] tw-h-full tw-w-full tw-object-cover tw-opacity-60 tw-blur-[1px]" />
                    <span></span>
                  </button>
                )) :
                <div className="tw-flex tw-flex-col tw-items-center">
                  Nenhum resultado com as seguintes categorias:
                  {sumSearch.map((c, i) => (<span key={"cate" + i} className="tw-my-1">{c}</span>))}
                </div>
            }
          </div>
          <div className={`tw-w-[40%] tw-border-2 tw-border-l-marrom tw-border-b-marrom tw-border-t-bege tw-border-r-bege tw-h-[500px] tw-rounded-[30px] tw-flex tw-flex-col tw-items-center tw-justify-evenly tw-p-8 tw-pt-0`}>
            <img src={selectedJob.image} alt="" className="tw-rounded-[30px] tw-border-t-2 tw-border-r-2 tw-border-marrom" />
            <a href={selectedJob.link}>{selectedJob.title}</a>
            <div className="tw-flex tw-text-2xl tw-gap-2">{selectedJob.techs}</div>
            <span>{lang ? selectedJob.descricao : selectedJob.description}</span>
            <pre className={`${sumSearch.length == 0 ? "tw-opacity-0" : ""}`}>{JSON.stringify(sumSearch)}</pre>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}