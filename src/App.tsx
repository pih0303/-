import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import People from "./components/People";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <About />
          <Mission />
          <People />
          
          {/* Newsletter Section Placeholder */}
          <section id="newsletter" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                <div className="max-w-2xl">
                  <h2 className="text-5xl font-serif mb-6">소식지</h2>
                  <p className="text-brand-ink/60 text-lg">
                    브릿지 미션의 발걸음과 이주민 친구들의 이야기를 전해드립니다.
                  </p>
                </div>
                <a href="https://blog.naver.com/bridgeinterchurch" target="_blank" rel="noopener noreferrer" className="text-brand-olive font-bold border-b-2 border-brand-olive pb-1 hover:opacity-70 transition-opacity">
                  전체 소식 보기
                </a>
              </div>
              
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
                {[
                  { 
                    date: "2026.02", 
                    title: "브릿지 미션 선교사 리트릿", 
                    author: "박익휘 목사",
                    image: "https://blogthumb.pstatic.net/MjAyNjAyMDdfMyAg/MDAxNzcwNDMxNzg0MzQz.cYu4JBca8cdTs6xCGmwIL2O5H-ZtXM8uETQty5YuNcYg.TOuuzAxvelj4UnqzksIc35PMaTIDKkXEXMQZKxpscVwg.JPEG/IMG%A3%DF7762.JPG?type=s3",
                    link: "https://blog.naver.com/bridgeinterchurch/224174974835"
                  },
                  { 
                    date: "2026.02", 
                    title: "선교적교회운동의 태동과 발전", 
                    author: "박익휘 목사",
                    image: "https://blogthumb.pstatic.net/MjAyNjAyMDdfNSAg/MDAxNzcwNDMxNTg5MTUz.yo3mqCxeCKavoFvHz5Igedfc02fcRXqr9cMKGLrRLzsg.PZDv7_GEd91r-PYeue62k1snC-7hytjlisliUPWS2R8g.PNG/IMG%A3%DF7834.PNG?type=s3",
                    link: "https://blog.naver.com/bridgeinterchurch/224174972119"
                  },
                  { 
                    date: "2025.12", 
                    title: "추수감사절을 지나며", 
                    author: "브릿지 미션",
                    image: "https://picsum.photos/seed/thanksgiving/800/600",
                    link: "https://blog.naver.com/bridgeinterchurch/224094399218"
                  },
                  { 
                    date: "2025.07", 
                    title: "2025년 7월 브릿지 미션 소식", 
                    author: "박익휘 목사",
                    image: "https://blogthumb.pstatic.net/MjAyNTEwMTRfMjMy/MDAxNzYwNDIzNDU3ODYy.K-fh7y9GvbuqyosfjAiL-CVPQ3CCvXQgH6CjXDIdWiAg.xX17jHejd5GujGx3NfEpORzb4bMlk6geLj5S-7aCve0g.JPEG/IMG_4309.jpg?type=s3",
                    link: "https://blog.naver.com/bridgeinterchurch/223945151836"
                  },
                  { 
                    date: "2025.07", 
                    title: "교회같지않은 이음교회?", 
                    author: "브릿지 미션",
                    image: "https://picsum.photos/seed/church/800/600",
                    link: "https://blog.naver.com/bridgeinterchurch/223945158895"
                  },
                  { 
                    date: "2025.05", 
                    title: "주님의 전도계획 (독서와 나눔)", 
                    author: "박익휘 목사",
                    image: "https://picsum.photos/seed/reading/800/600",
                    link: "https://blog.naver.com/bridgeinterchurch/223882034712"
                  },
                ].map((post, i) => (
                  <motion.a 
                    key={i}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer block"
                  >
                    <div className="aspect-video overflow-hidden rounded-3xl mb-6">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-xs font-bold text-brand-olive tracking-widest uppercase">{post.date}</span>
                    <h3 className="text-xl font-serif mt-2 mb-4 group-hover:text-brand-olive transition-colors line-clamp-2 h-14">{post.title}</h3>
                    <p className="text-sm text-brand-ink/50">By {post.author}</p>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
          
          <Donate />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
