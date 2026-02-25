import { motion } from "motion/react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import People from "./components/People";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import NewsletterModal from "./components/NewsletterModal";
import { useLanguage } from "./contexts/LanguageContext";

interface Post {
  date: string;
  title: string;
  author: string;
  image: string;
  link: string;
  content: string;
}

export default function App() {
  const { t } = useLanguage();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posts: Post[] = [
    { 
      date: "2026.02", 
      title: "브릿지 미션 선교사 리트릿", 
      author: "박익휘 목사",
      image: "https://blogthumb.pstatic.net/MjAyNjAyMDdfMyAg/MDAxNzcwNDMxNzg0MzQz.cYu4JBca8cdTs6xCGmwIL2O5H-ZtXM8uETQty5YuNcYg.TOuuzAxvelj4UnqzksIc35PMaTIDKkXEXMQZKxpscVwg.JPEG/IMG%A3%DF7762.JPG?type=s3",
      link: "https://blog.naver.com/bridgeinterchurch/224174974835",
      content: "김포에서 이주민 선교와 목회를 섬기는 4가정이 함께 속초–양양으로 가족 리트릿을 다녀왔다. 같은 비전, 한 마음으로 모이니 특별한 계획 없어도 서로 나눌것이 많다! 1박으로 짧게 다녀왔는데 새벽까지 이주민의 삶, 타문화 선교로의 부르심, 다문화 목회 등 여럿 포럼의 주제가 올라온다! 서로의 존재만으로도 깊은 배움이 있다! 하나님께서 함께하시는 이주민 사역은 결코 외로운 길이 아님을 확인한다!"
    },
    { 
      date: "2026.02", 
      title: "선교적교회운동의 태동과 발전", 
      author: "박익휘 목사",
      image: "https://blogthumb.pstatic.net/MjAyNjAyMDdfNSAg/MDAxNzcwNDMxNTg5MTUz.yo3mqCxeCKavoFvHz5Igedfc02fcRXqr9cMKGLrRLzsg.PZDv7_GEd91r-PYeue62k1snC-7hytjlisliUPWS2R8g.PNG/IMG%A3%DF7834.PNG?type=s3",
      link: "https://blog.naver.com/bridgeinterchurch/224174972119",
      content: "서울시민교회 디모데 청년부 특강 자료입니다. 선교적 교회 운동의 역사적 배경과 현대적 의미를 탐구하며, 교회가 어떻게 세상 속에서 하나님의 선교에 참여할 수 있는지에 대해 나누었습니다."
    },
    { 
      date: "2025.12", 
      title: "추수감사절을 지나며", 
      author: "브릿지 미션",
      image: "https://picsum.photos/seed/thanksgiving/800/600",
      link: "https://blog.naver.com/bridgeinterchurch/224094399218",
      content: "지나보니 모든것이 은혜이고 감사이지만, 그 과정은 분명 많은 것이 힘들었고 불안했다. 무엇보다 부모는 개척을 결정했지만, 태어나 자기 세상의 전부나 다름없던 교회와 갑자기 단절된 큰 아이는 꽤나 큰 심리적 충격을 겪었던 것 같다. 어제는 추수감사절을 맞아 우리에게 행하신 하나님께 감사하고, 함께 포트럭 파티를 했다. 각자가 음식을 싸와서 먹었는데, 부활절때 보다 더 풍성한 음식 리스트에 감사와 감동!!"
    },
    { 
      date: "2025.07", 
      title: "2025년 7월 브릿지 미션 소식", 
      author: "박익휘 목사",
      image: "https://blogthumb.pstatic.net/MjAyNTEwMTRfMjMy/MDAxNzYwNDIzNDU3ODYy.K-fh7y9GvbuqyosfjAiL-CVPQ3CCvXQgH6CjXDIdWiAg.xX17jHejd5GujGx3NfEpORzb4bMlk6geLj5S-7aCve0g.JPEG/IMG_4309.jpg?type=s3",
      link: "https://blog.naver.com/bridgeinterchurch/223945151836",
      content: "브릿지 미션 소식을 전해요. 박익휘 목사 가정 소식과 아내의 사임 소식입니다. 15년 동안 간사로 섬긴 IVF를 사임하고 새로운 출발을 하게 되었습니다. 많은 분들의 축복 속에 마무리할 수 있어 감사했습니다."
    },
    { 
      date: "2025.07", 
      title: "교회같지않은 이음교회?", 
      author: "브릿지 미션",
      image: "https://picsum.photos/seed/church/800/600",
      link: "https://blog.naver.com/bridgeinterchurch/223945158895",
      content: "브릿지 이음교회의 공간, '이음센터'가 세워지면서 많은 분들이 방문해 주고 계십니다. 이음교회가 생각한 교회 공간의 핵심은 단순합니다. 바로 '복음 전도'와 '복음적 만남'입니다. 어떻게 하면 우리 공간에서 이웃들을 만날 수 있을까? 교회가 도시 속에서 존재할 수 있을까?"
    },
    { 
      date: "2025.05", 
      title: "주님의 전도계획 (독서와 나눔)", 
      author: "박익휘 목사",
      image: "https://picsum.photos/seed/reading/800/600",
      link: "https://blog.naver.com/bridgeinterchurch/223882034712",
      content: "주제: 성령의 분부함과 전도의 힘. 예수님은 자신을 온전히 내어주셨다. 예수님은 제자들에게 순종을 요구하셨지만, 그보다 먼저 자신의 영을 주셨고, 그로 인해 제자들은 하나님의 사랑을 깊이 경험하게 되었다."
    },
  ];

  const handleOpenPost = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-ink selection:bg-brand-olive/20">
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
          
          <section id="newsletter" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                <div className="max-w-2xl">
                  <h2 className="text-5xl font-serif mb-6">{t("newsletter.title")}</h2>
                  <p className="text-brand-ink/60 text-lg">
                    {t("newsletter.desc")}
                  </p>
                </div>
                <a 
                  href="https://blog.naver.com/bridgeinterchurch" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-brand-olive font-bold border-b-2 border-brand-olive pb-1 hover:opacity-70 transition-opacity"
                >
                  {t("newsletter.view_all")}
                </a>
              </div>
              
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
                {posts.map((post, i) => (
                  <motion.div 
                    key={i}
                    onClick={() => handleOpenPost(post)}
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
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          <Donate />
        </motion.div>
      </main>
      
      <Footer />

      <NewsletterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        post={selectedPost} 
      />
    </div>
  );
}
