import { motion } from "motion/react";
import { Menu, X, LogIn, LogOut, User as UserIcon, Languages } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, login, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.mission"), href: "#mission" },
    { name: t("nav.people"), href: "#people" },
    { name: t("nav.newsletter"), href: "#newsletter" },
    { name: t("nav.donate"), href: "#donate", primary: true },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-olive/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-olive rounded-full flex items-center justify-center text-white font-serif text-xl">B</div>
          <span className="font-serif text-2xl font-semibold tracking-tight">Bridge Mission</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand-olive ${
                item.primary 
                  ? "bg-brand-olive text-white px-6 py-2 rounded-full hover:bg-brand-olive/90" 
                  : "text-brand-ink/70"
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-bold text-brand-olive hover:opacity-70 transition-opacity uppercase tracking-widest"
          >
            <Languages size={16} />
            {language === "ko" ? "EN" : "KO"}
          </button>

          <div className="h-6 w-px bg-brand-olive/20 mx-2" />
          
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {user.picture ? (
                  <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full border border-brand-olive/20" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-brand-olive/10 flex items-center justify-center text-brand-olive">
                    <UserIcon size={16} />
                  </div>
                )}
                <span className="text-xs font-medium text-brand-ink/70">{user.name}</span>
              </div>
              <button 
                onClick={logout}
                className="text-brand-ink/50 hover:text-brand-olive transition-colors"
                title={t("nav.logout")}
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button 
              onClick={login}
              className="flex items-center gap-2 text-sm font-medium text-brand-ink/70 hover:text-brand-olive transition-colors"
            >
              <LogIn size={18} />
              {t("nav.admin_login")}
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="text-brand-olive font-bold text-sm"
          >
            {language === "ko" ? "EN" : "KO"}
          </button>
          {user && (
             <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full border border-brand-olive/20" />
          )}
          <button className="text-brand-ink" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-cream border-b border-brand-olive/10 px-6 py-8 flex flex-col gap-6"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-serif ${
                item.primary ? "text-brand-olive font-bold" : "text-brand-ink/80"
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="border-t border-brand-olive/10 pt-6 flex flex-col gap-6">
            <button 
              onClick={() => { toggleLanguage(); setIsOpen(false); }}
              className="flex items-center gap-2 text-lg font-serif text-brand-ink/80"
            >
              <Languages size={20} /> {language === "ko" ? "English" : "한국어"}
            </button>
            {user ? (
              <button 
                onClick={() => { logout(); setIsOpen(false); }}
                className="flex items-center gap-2 text-lg font-serif text-brand-ink/80"
              >
                <LogOut size={20} /> {t("nav.logout")}
              </button>
            ) : (
              <button 
                onClick={() => { login(); setIsOpen(false); }}
                className="flex items-center gap-2 text-lg font-serif text-brand-ink/80"
              >
                <LogIn size={20} /> {t("nav.admin_login")}
              </button>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
