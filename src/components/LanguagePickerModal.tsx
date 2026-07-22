import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { useLanguage } from "@/i18n/LanguageContext";
import { LANGUAGE_OPTIONS } from "@/i18n";

const FLAGS: Record<string, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇪🇸",
};

const LanguagePickerModal = () => {
  const { showPicker, choosePicker, t } = useLanguage();

  return (
    <Dialog open={showPicker} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-sm text-center [&>button]:hidden">
        <DialogHeader className="text-center sm:text-center">
          <DialogTitle className="text-center">{t.languagePicker.title}</DialogTitle>
          <DialogDescription className="text-center">{t.languagePicker.description}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 pt-2">
          {LANGUAGE_OPTIONS.map((opt) => (
            <button
              key={opt.code}
              onClick={() => choosePicker(opt.code)}
              className="apple-btn-secondary justify-between w-full hover:bg-secondary"
            >
              <span className="flex items-center gap-2">
                <span aria-hidden>{FLAGS[opt.code]}</span>
                {opt.nativeLabel}
              </span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LanguagePickerModal;
