import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-brand-olive/10 text-brand-olive rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Migrant Mission Community
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8">
            세상과 이주민을 <br />
            <span className="serif-italic text-brand-olive">사랑으로</span> 잇는 다리
          </h1>
          <p className="text-lg text-brand-ink/70 max-w-lg mb-10 leading-relaxed">
            브릿지 미션은 환대, 섬김, 공동체라는 기독교 핵심 가치를 기반으로 
            우리에게 찾아온 이주민들을 그리스도의 사랑으로 섬기는 비영리 선교단체입니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#donate" className="bg-brand-olive text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-brand-olive/90 transition-all">
              파트너로 동참하기 <ArrowRight size={18} />
            </a>
            <a href="#about" className="border border-brand-olive/30 text-brand-olive px-8 py-4 rounded-full font-medium hover:bg-brand-olive/5 transition-all">
              브릿지미션 소개
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
