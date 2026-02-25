import { motion } from "motion/react";
import { Users, GraduationCap, Heart, Search } from "lucide-react";

export default function Mission() {
  const missions = [
    {
      title: "만남과 복음전도",
      description: "하나님이 주신 환대로 이주민들을 만나 복음을 전합니다. 한국어 교육 및 생활 지원 등으로 섬기며 그리스도의 복음을 증거합니다.",
      icon: <Users size={32} />,
    },
    {
      title: "훈련과 파송",
      description: "이주민들을 말씀으로 양육하고 훈련합니다. 현지 사역자들을 양육하여 그리스도의 비전을 발견하고 사역자로 세워가도록 돕습니다.",
      icon: <GraduationCap size={32} />,
    },
    {
      title: "이주민 공동체 세움",
      description: "여러 민족들과 함께 공동체를 세웁니다. 영어와 한국어 등 다국어로 예배드리며 다민족 교회를 세워가는 꿈을 이루어 갑니다.",
      icon: <Heart size={32} />,
    },
    {
      title: "연구",
      description: "변화하는 한국사회를 탐구하고 교회가 성경적 환대를 실천하도록 돕습니다. 이주민 선교의 필요성을 알리고 훈련하는 사명을 감당합니다.",
      icon: <Search size={32} />,
    },
  ];

  return (
    <section id="mission" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-serif mb-6">우리가 하는 일</h2>
          <p className="text-brand-ink/60 text-lg">
            브릿지 미션은 이주민들과 함께하는 여정 속에서 복음의 능력을 통해 
            하나님의 사랑 안에서 연합하는 공동체를 세워갑니다.
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
