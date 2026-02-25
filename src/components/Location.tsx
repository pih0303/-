import { motion } from "motion/react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-24 bg-brand-cream/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-serif mb-6">{t("nav.location")}</h2>
          <p className="text-brand-ink/60 text-lg">
            브릿지 미션 센터는 언제나 여러분을 향해 열려 있습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[40px] p-10 shadow-sm flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-brand-olive/10 text-brand-olive rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">주소</h4>
                <p className="text-brand-ink/70 leading-relaxed">
                  {t("footer.location")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-brand-olive/10 text-brand-olive rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">연락처</h4>
                <p className="text-brand-ink/70 leading-relaxed">
                  {t("footer.contact_phone")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-brand-olive/10 text-brand-olive rounded-2xl flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">운영 시간</h4>
                <p className="text-brand-ink/70 leading-relaxed">
                  월요일 - 금요일: 09:00 - 18:00<br />
                  토요일 - 일요일: 사역 일정에 따름
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="https://map.naver.com/v5/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B9%80%ED%8F%AC%EC%8B%9C%20%EA%B9%80%ED%8F%AC%ED%95%9C%EA%B0%9511%EB%A1%9C%20140%EB%B2%88%EA%B8%B8%20102" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-brand-olive text-white px-8 py-4 rounded-full font-bold hover:bg-brand-olive/90 transition-all shadow-md"
              >
                네이버 지도로 보기
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-[500px] lg:h-auto rounded-[40px] overflow-hidden shadow-lg border border-brand-olive/10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.942973121544!2d126.6666993125603!3d37.63311197190013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c83f982855555%3A0x8888888888888888!2z6rK96riw64-EIOq5gO2PrOyLnCDquYDtj6ztlZzqsqcxMeuhnCAxNDDrsojqsqwgMTAy!5e0!3m2!1sko!2skr!4v1710000000000!5m2!1sko!2skr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bridge Mission Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
