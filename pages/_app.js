import '../styles/globals.css'
import { LanguageProvider } from '../utils/context/language'
import { ModalProvider } from '../utils/context/Modal'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </LanguageProvider>)
}
