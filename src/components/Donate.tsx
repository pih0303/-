import { motion } from "motion/react";
import { Heart, CheckCircle2 } from "lucide-react";

export default function Donate() {
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
                브릿지 미션 <br />
                <span className="italic opacity-80">설립 파트너</span> 모집
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                여러분의 후원금은 100% 이주민 사역을 위해 사용됩니다. 
                기도와 물질로 함께해주실 300명의 동역자를 기다립니다.
              </p>
              
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-white/60" size={20} />
                  <span className="text-lg">정기후원: 월 1만원 (1구좌)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-white/60" size={20} />
                  <span className="text-lg">일시후원: 신한은행 100-031-673977</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-white/60" size={20} />
                  <span className="text-lg">기부금 영수증 발급 가능 (비영리단체)</span>
                </div>
              </div>

              <a 
                href="https://missionfund.org/go/?pi=bridgemission" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-brand-olive px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-cream transition-all shadow-xl"
              >
                <Heart fill="currentColor" size={20} />
                정기 후원하기 (파트너)
              </a>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10">
                <h3 className="text-2xl font-serif mb-6">후원금 100% 원칙</h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  저희 가정도 이주민 선교를 위해 함께 헌신하고자 약속드립니다. 
                  기초가 세워질 기간 2년 동안은 기관에서 사례를 받지 않고 
                  자비량(강의, 번역 등)으로 섬기며 모든 후원금을 사역에 사용하겠습니다.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-serif text-xl">P</div>
                  <div>
                    <p className="font-bold">박익휘 목사 가정</p>
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
