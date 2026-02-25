import { motion } from "motion/react";
import { Users, GraduationCap, Heart, Search } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Mission() {
  const { t } = useLanguage();

  const missions = [
    {
      title: t("mission.1_title"),
      description: t("mission.1_desc"),
      icon: <Users size={32} />,
    },
    {
      title: t("mission.2_title"),
      description: t("mission.2_desc"),
      icon: <GraduationCap size={32} />,
    },
    {
      title: t("mission.3_title"),
      description: t("mission.3_desc"),
      icon: <Heart size={32} />,
    },
    {
      title: t("mission.4_title"),
      description: t("mission.4_desc"),
      icon: <Search size={32} />,
    },
  ];

  return (
    <section id="mission" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-serif mb-6">{t("mission.title")}</h2>
          <p className="text-brand-ink/60 text-lg">
            {t("mission.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((m, idx) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card-rounded p-10 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 bg-brand-olive/5 text-brand-olive rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-olive group-hover:text-white transition-colors">
                {m.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{m.title}</h3>
              <p className="text-brand-ink/70 text-sm leading-relaxed">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
