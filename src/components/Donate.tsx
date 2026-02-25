import { motion } from "motion/react";
import { Heart, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Donate() {
  const { t } = useLanguage();

  return (
    <section id="donate" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-olive rounded-[48px] p-12 md:p-20 text-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
                {t("donate.title")}
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                {t("donate.desc")}
              </p>
              
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-white/60" size={20} />
                  <span className="text-lg">{t("donate.monthly")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-white/60" size={20} />
                  <span className="text-lg">{t("donate.one_time")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-white/60" size={20} />
                  <span className="text-lg">{t("donate.receipt")}</span>
                </div>
              </div>

              <a 
                href="https://missionfund.org/go/?pi=bridgemission" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-brand-olive px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-cream transition-all shadow-xl"
              >
                <Heart fill="currentColor" size={20} />
                {t("donate.cta")}
              </a>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10">
                <h3 className="text-2xl font-serif mb-6">{t("donate.principle_title")}</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  {t("donate.principle_desc")}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-serif text-xl">P</div>
                  <div>
                    <p className="font-bold">{t("donate.pastor_family")}</p>
                    <p className="text-xs text-white/50">Bridge Mission Representative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
