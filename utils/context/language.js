import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext({});
LanguageContext.displayName = "Language"

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState();

  useEffect(() => {
    if (window.navigator.language == 'pt-BR') {
      setLang(true)
    } else {
      setLang(false)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}