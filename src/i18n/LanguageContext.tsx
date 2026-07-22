import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, Translations, translations } from "./index";

const STORAGE_KEY = "portfolio-language";

function detectBrowserLanguage(): Language {
  const nav = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "pt";
  if (nav.startsWith("en")) return "en";
  if (nav.startsWith("es")) return "es";
  return "pt";
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  showPicker: boolean;
  choosePicker: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "pt" || saved === "en" || saved === "es") return saved;
    return detectBrowserLanguage();
  });

  const [showPicker, setShowPicker] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.localStorage.getItem(STORAGE_KEY);
  });

  useEffect(() => {
    document.documentElement.lang = translations[language].meta.htmlLang;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  };

  const choosePicker = (lang: Language) => {
    setLanguage(lang);
    setShowPicker(false);
  };

  const value: LanguageContextValue = {
    language,
    setLanguage,
    t: translations[language],
    showPicker,
    choosePicker,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
