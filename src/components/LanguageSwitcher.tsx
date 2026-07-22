import { Globe } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useLanguage } from "@/i18n/LanguageContext";
import { LANGUAGE_OPTIONS } from "@/i18n";

const FLAGS: Record<string, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="p-2 rounded-full hover:bg-secondary transition-colors duration-300 flex items-center justify-center w-8 h-8 outline-none"
        aria-label="Change language"
      >
        <Globe size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGE_OPTIONS.map((opt) => (
          <DropdownMenuItem
            key={opt.code}
            onClick={() => setLanguage(opt.code)}
            className={`gap-2 cursor-pointer ${language === opt.code ? "font-semibold text-sky-500" : ""}`}
          >
            <span aria-hidden>{FLAGS[opt.code]}</span>
            {opt.nativeLabel}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
