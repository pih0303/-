import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function About() {
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
                  "이곳이 낯설고 외로운 타향이 아니라 따뜻하고 소망이 있는 또다른 고향으로 기억되길 바라며..."
                </p>
                <p className="mt-4 font-bold text-sm">— 박익휘 목사</p>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl font-serif mb-8">브릿지 미션 지기 이야기</h2>
              <div className="space-y-6 text-brand-ink/80 leading-relaxed text-lg">
                <p>
                  유학생 이민자로서 보낸 10여년의 타지생활은 나그네의 마음을 품는 하나님의 훈련이었습니다. 
                  또한 지난 3년동안 지역교회 안에서 외국인공동체를 세우고 이주민들을 돌보는 사역을 통해 
                  선하신 하나님의 마음을 더욱 느끼는 시간이었습니다.
                </p>
                <p>
                  그러던 중 하나님께서는 가까이 찾아온 이주민시대를 향해 더욱 그들의 삶에 들어가 함께하는 마음을 주셨고, 
                  그동안의 훈련속에 인도하신 하나님의 은혜를 따라 건강한 외국인과 함께하는 다민족교회를 세우고 
                  그리스도의 복음을 전하는 비전을 품게 되었습니다.
                </p>
                <p>
                  세상과 교회, 이주민과 선주민, 불신자와 그리스도인 서로를 사랑으로 연결하고 
                  복음의 통로 역할을 감당할 "브릿지 미션"을 통해 하나님나라의 풍성한 공동체를 세워가고자 합니다.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-brand-olive/10 pt-12">
                <div>
                  <h4 className="font-serif text-2xl text-brand-olive mb-2">환대 (Hospitality)</h4>
                  <p className="text-sm text-brand-ink/60">찾아온 이들을 그리스도의 사랑으로 맞이합니다.</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-brand-olive mb-2">공동체 (Community)</h4>
                  <p className="text-sm text-brand-ink/60">그리스도 안에서 하나 된 교회를 꿈꿉니다.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
