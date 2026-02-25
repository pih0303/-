import { motion, AnimatePresence } from "motion/react";
import { X, Image as ImageIcon, Link as LinkIcon, Type, User, Calendar } from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface Post {
  date: string;
  title: string;
  author: string;
  image: string;
  link: string;
  content: string;
}

interface NewsletterEditorProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (post: Post) => void;
  initialData?: Post | null;
}

export default function NewsletterEditor({ isOpen, onClose, onSave, initialData }: NewsletterEditorProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<Post>({
    date: new Date().toISOString().split('T')[0].replace(/-/g, '.').substring(0, 7),
    title: "",
    author: "",
    image: "",
    link: "",
    content: ""
  });

  React.useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        date: new Date().toISOString().split('T')[0].replace(/-/g, '.').substring(0, 7),
        title: "",
        author: "",
        image: "",
        link: "",
        content: ""
      });
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert("제목과 내용은 필수입니다.");
      return;
    }
    onSave(formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-ink/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-brand-cream w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-[40px] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-brand-olive/10 flex justify-between items-center">
              <h2 className="text-2xl font-serif">{initialData ? "소식 수정하기" : "새 소식 작성하기"}</h2>
              <button onClick={onClose} className="text-brand-ink/50 hover:text-brand-ink">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="overflow-y-auto p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-olive uppercase tracking-widest flex items-center gap-2">
                  <Type size={14} /> 제목
                </label>
                <input 
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="소식의 제목을 입력하세요"
                  className="w-full bg-white border border-brand-olive/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-olive/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-olive uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} /> 날짜
                  </label>
                  <input 
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    placeholder="YYYY.MM"
                    className="w-full bg-white border border-brand-olive/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-olive/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-olive uppercase tracking-widest flex items-center gap-2">
                    <User size={14} /> 작성자
                  </label>
                  <input 
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    placeholder="작성자 이름"
                    className="w-full bg-white border border-brand-olive/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-olive/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-olive uppercase tracking-widest flex items-center gap-2">
                  <ImageIcon size={14} /> 대표 이미지 URL
                </label>
                <input 
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  placeholder="https://..."
                  className="w-full bg-white border border-brand-olive/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-olive/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-olive uppercase tracking-widest flex items-center gap-2">
                  <LinkIcon size={14} /> 블로그 원문 링크 (선택)
                </label>
                <input 
                  type="text"
                  value={formData.link}
                  onChange={(e) => setFormData({...formData, link: e.target.value})}
                  placeholder="https://blog.naver.com/..."
                  className="w-full bg-white border border-brand-olive/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-olive/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-olive uppercase tracking-widest flex items-center gap-2">
                  <Type size={14} /> 내용
                </label>
                <textarea 
                  rows={8}
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder="상세 내용을 입력하세요..."
                  className="w-full bg-white border border-brand-olive/10 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-olive/20 resize-none"
                />
              </div>

              <div className="pt-4 flex gap-4">
                <button 
                  type="submit"
                  className="flex-1 bg-brand-olive text-white py-4 rounded-full font-bold hover:bg-brand-olive/90 transition-all"
                >
                  저장하기
                </button>
                <button 
                  type="button"
                  onClick={onClose}
                  className="flex-1 border border-brand-olive/20 text-brand-ink/50 py-4 rounded-full font-bold hover:bg-brand-olive/5 transition-all"
                >
                  취소
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
