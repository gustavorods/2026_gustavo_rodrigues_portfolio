import pt from "./locales/pt";
import en from "./locales/en";
import es from "./locales/es";
import { Language, Translations } from "./types";

export const translations: Record<Language, Translations> = { pt, en, es };

export const LANGUAGE_OPTIONS: { code: Language; label: string; nativeLabel: string }[] = [
  { code: "pt", label: "Portuguese", nativeLabel: "Português" },
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
];

export type { Language, Translations };
