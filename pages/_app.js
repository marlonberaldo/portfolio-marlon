import '../styles/globals.css'
import { LanguageProvider } from '../utils/context/language'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>)
}
