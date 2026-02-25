import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/pastor/600/800" 
                alt="Pastor Park" 
                className="rounded-[40px] w-full shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-olive text-white p-8 rounded-3xl shadow-lg max-w-xs">
                <Quote className="mb-4 opacity-50" size={32} />
                <p className="font-serif italic text-lg leading-relaxed">
                  "{t("about.quote")}"
                </p>
                <p className="mt-4 font-bold text-sm">— {t("about.pastor")}</p>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl font-serif mb-8">{t("about.title")}</h2>
              <div className="space-y-6 text-brand-ink/80 leading-relaxed text-lg">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-brand-olive/10 pt-12">
                <div>
                  <h4 className="font-serif text-2xl text-brand-olive mb-2">{t("about.value_1")}</h4>
                  <p className="text-sm text-brand-ink/60">{t("about.value_1_desc")}</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-brand-olive mb-2">{t("about.value_3")}</h4>
                  <p className="text-sm text-brand-ink/60">{t("about.value_3_desc")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
