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
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch posts", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSavePost = async (postData: Post) => {
    try {
      const url = editingPost ? `/api/posts/${(editingPost as any).id}` : "/api/posts";
      const method = editingPost ? "PUT" : "POST";
      
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      
      if (res.ok) {
        fetchPosts();
        setIsEditorOpen(false);
        setEditingPost(null);
      }
    } catch (error) {
      console.error("Failed to save post", error);
    }
  };

  const handleDeletePost = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm("이 소식을 삭제하시겠습니까?")) {
      try {
        const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
        if (res.ok) {
          fetchPosts();
        }
      } catch (error) {
        console.error("Failed to delete post", error);
      }
    }
  };

  const handleEditPost = (e: React.MouseEvent, post: Post) => {
    e.stopPropagation();
    setEditingPost(post);
    setIsEditorOpen(true);
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
                {posts.map((post) => (
                  <motion.div 
                    key={(post as any).id}
                    onClick={() => handleOpenPost(post)}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer block relative"
                  >
                    {user?.isAdmin && (
                      <div className="absolute top-4 right-4 z-10 flex gap-2">
                        <button 
                          onClick={(e) => handleEditPost(e, post)}
                          className="w-10 h-10 bg-brand-olive text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-brand-olive/90"
                        >
                          <Plus size={18} className="rotate-45" />
                        </button>
                        <button 
                          onClick={(e) => handleDeletePost(e, (post as any).id)}
                          className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-600"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
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
        onClose={() => {
          setIsEditorOpen(false);
          setEditingPost(null);
        }}
        onSave={handleSavePost}
        initialData={editingPost}
      />
    </div>
  );
}
