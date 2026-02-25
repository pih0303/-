import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-brand-olive/10 text-brand-olive rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            {t("hero.tag")}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-brand-ink/70 max-w-lg mb-10 leading-relaxed">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#donate" className="bg-brand-olive text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-brand-olive/90 transition-all">
              {t("hero.cta_partner")} <ArrowRight size={18} />
            </a>
            <a href="#about" className="border border-brand-olive/30 text-brand-olive px-8 py-4 rounded-full font-medium hover:bg-brand-olive/5 transition-all">
              {t("hero.cta_about")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10">
            <img 
              src="https://picsum.photos/seed/mission1/800/1000" 
              alt="Mission" 
              className="pill-image w-full max-w-md mx-auto shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-olive/5 rounded-full -z-0 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-brand-olive/10 rounded-full -z-0 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
