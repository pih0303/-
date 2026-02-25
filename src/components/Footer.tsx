import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-ink text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-olive rounded-full flex items-center justify-center text-white font-serif text-lg">B</div>
              <span className="font-serif text-2xl font-semibold">Bridge Mission</span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">{t("footer.contact_title")}</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                bridgemcenter@outlook.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} />
                {t("footer.location")}
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">{t("footer.info_title")}</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>{t("footer.institute")}</li>
              <li>{t("footer.representative")}</li>
              <li>{t("footer.biz_number")}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs">
          <p>{t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-white transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
