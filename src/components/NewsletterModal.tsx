import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    date: string;
    author: string;
    content: string;
    image: string;
    link: string;
  } | null;
}

export default function NewsletterModal({ isOpen, onClose, post }: NewsletterModalProps) {
  const { t } = useLanguage();

  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
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
            className="relative bg-brand-cream w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[40px] shadow-2xl flex flex-col"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-ink hover:bg-brand-olive hover:text-white transition-colors shadow-md"
            >
              <X size={24} />
            </button>

            <div className="overflow-y-auto flex-1">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 md:p-12">
                <span className="text-xs font-bold text-brand-olive tracking-widest uppercase mb-4 block">
                  {post.date}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                  {post.title}
                </h2>
                <div className="flex items-center gap-4 mb-10 pb-10 border-b border-brand-olive/10">
                  <div className="w-10 h-10 bg-brand-olive/10 rounded-full flex items-center justify-center text-brand-olive font-serif">
                    {post.author[0]}
                  </div>
                  <span className="text-sm font-medium text-brand-ink/60">By {post.author}</span>
                </div>
                
                <div className="prose prose-lg max-w-none text-brand-ink/80 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>
                
                <div className="mt-16 pt-10 border-t border-brand-olive/10 flex flex-wrap justify-center gap-4">
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-brand-olive text-brand-olive px-10 py-4 rounded-full font-bold hover:bg-brand-olive/5 transition-all"
                  >
                    {t("newsletter.view_original")}
                  </a>
                  <button 
                    onClick={onClose}
                    className="bg-brand-olive text-white px-10 py-4 rounded-full font-bold hover:bg-brand-olive/90 transition-all"
                  >
                    {t("newsletter.close")}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
