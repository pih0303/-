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
                <a href="#" className="text-brand-olive font-bold border-b-2 border-brand-olive pb-1 hover:opacity-70 transition-opacity">
                  전체 소식 보기
                </a>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { date: "2026.02", title: "새로운 시작, 브릿지 미션", author: "박익휘 목사" },
                  { date: "2026.02", title: "Welcome to Bridge", author: "Devon Grobler" },
                  { date: "2025.07", title: "여름 사역 보고", author: "박익휘 목사" },
                ].map((post, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-video overflow-hidden rounded-3xl mb-6">
                      <img 
                        src={`https://picsum.photos/seed/news${i}/800/600`} 
                        alt="News" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-xs font-bold text-brand-olive tracking-widest uppercase">{post.date}</span>
                    <h3 className="text-2xl font-serif mt-2 mb-4 group-hover:text-brand-olive transition-colors">{post.title}</h3>
                    <p className="text-sm text-brand-ink/50">By {post.author}</p>
                  </motion.div>
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
