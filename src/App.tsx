import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import People from "./components/People";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import NewsletterModal from "./components/NewsletterModal";
import NewsletterEditor from "./components/NewsletterEditor";
import Location from "./components/Location";
import { useLanguage } from "./contexts/LanguageContext";
import { useAuth } from "./contexts/AuthContext";
import { initialPosts, Post } from "./data/posts";
import { Plus, Trash2 } from "lucide-react";

export default function App() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Load posts from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("bridge_mission_posts");
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load posts", e);
      }
    }
  }, []);

  const savePosts = (newPosts: Post[]) => {
    setPosts(newPosts);
    localStorage.setItem("bridge_mission_posts", JSON.stringify(newPosts));
  };

  const handleAddPost = (newPost: Post) => {
    savePosts([newPost, ...posts]);
  };

  const handleDeletePost = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    if (confirm("이 소식을 삭제하시겠습니까?")) {
      const newPosts = posts.filter((_, i) => i !== index);
      savePosts(newPosts);
    }
  };

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
                <div className="flex items-center gap-4">
                  {user?.isAdmin && (
                    <button 
                      onClick={() => setIsEditorOpen(true)}
                      className="flex items-center gap-2 bg-brand-olive text-white px-6 py-3 rounded-full font-bold hover:bg-brand-olive/90 transition-all shadow-md"
                    >
                      <Plus size={20} /> 소식 올리기
                    </button>
                  )}
                  <a 
                    href="https://blog.naver.com/bridgeinterchurch" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-olive font-bold border-b-2 border-brand-olive pb-1 hover:opacity-70 transition-opacity"
                  >
                    {t("newsletter.view_all")}
                  </a>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
                {posts.map((post, i) => (
                  <motion.div 
                    key={i}
                    onClick={() => handleOpenPost(post)}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer block relative"
                  >
                    {user?.isAdmin && (
                      <button 
                        onClick={(e) => handleDeletePost(e, i)}
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                    <div className="aspect-video overflow-hidden rounded-3xl mb-6">
                      <img 
                        src={post.image || "https://picsum.photos/seed/bridge/800/600"} 
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
          
          <Location />
          <Donate />
        </motion.div>
      </main>
      
      <Footer />

      <NewsletterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        post={selectedPost} 
      />

      <NewsletterEditor 
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        onSave={handleAddPost}
      />
    </div>
  );
}
