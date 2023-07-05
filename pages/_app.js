/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head'
import '../styles/globals.css'
import { LanguageProvider } from '../utils/context/language'
import { ModalProvider } from '../utils/context/Modal'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y9ZM44HY45">
        </script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-Y9ZM44HY45');`,
          }}
        />
        <link rel="icon" type="image/png" href="/icone.png" />
      </Head>
      <ToastContainer />
      <LanguageProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </LanguageProvider>

    </>
  )
}
