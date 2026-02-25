import { motion, AnimatePresence } from "motion/react";
import { Menu, X, LogIn, LogOut, User as UserIcon, Languages, Lock } from "lucide-react";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  
  const { user, login, logout, idLogin } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.mission"), href: "#mission" },
    { name: t("nav.people"), href: "#people" },
    { name: t("nav.newsletter"), href: "#newsletter" },
    { name: t("nav.location"), href: "#location" },
    { name: t("nav.donate"), href: "#donate", primary: true },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  const handleIdLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      await idLogin(adminId, adminPassword);
      setIsLoginModalOpen(false);
      setAdminId("");
      setAdminPassword("");
    } catch (err) {
      setLoginError("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-olive/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-brand-olive rounded-full flex items-center justify-center text-white font-serif text-xl">B</div>
            <span className="font-serif text-2xl font-semibold tracking-tight">Bridge Mission</span>
          </a>

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
                onClick={() => setIsLoginModalOpen(true)}
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
                  onClick={() => { setIsLoginModalOpen(true); setIsOpen(false); }}
                  className="flex items-center gap-2 text-lg font-serif text-brand-ink/80"
                >
                  <LogIn size={20} /> {t("nav.admin_login")}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute inset-0 bg-brand-ink/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-md rounded-[40px] p-10 shadow-2xl"
            >
              <button 
                onClick={() => setIsLoginModalOpen(false)}
                className="absolute top-8 right-8 text-brand-ink/30 hover:text-brand-ink transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-brand-olive/10 text-brand-olive rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Lock size={32} />
                </div>
                <h2 className="text-3xl font-serif mb-2">관리자 로그인</h2>
                <p className="text-brand-ink/50 text-sm">브릿지 미션 관리자 권한이 필요합니다.</p>
              </div>

              <form onSubmit={handleIdLogin} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-brand-ink/40 uppercase tracking-widest mb-2 ml-1">ID</label>
                  <input 
                    type="text" 
                    required
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    className="w-full bg-brand-cream/50 border border-brand-olive/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-olive transition-colors"
                    placeholder="아이디를 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-ink/40 uppercase tracking-widest mb-2 ml-1">Password</label>
                  <input 
                    type="password" 
                    required
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="w-full bg-brand-cream/50 border border-brand-olive/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-olive transition-colors"
                    placeholder="비밀번호를 입력하세요"
                  />
                </div>

                {loginError && (
                  <p className="text-red-500 text-xs text-center font-medium">{loginError}</p>
                )}

                <button 
                  type="submit"
                  className="w-full bg-brand-olive text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-olive/90 transition-all shadow-xl shadow-brand-olive/20"
                >
                  로그인
                </button>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-brand-olive/10"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-4 text-brand-ink/30 font-bold tracking-widest">Or</span>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={() => { login(); setIsLoginModalOpen(false); }}
                  className="w-full border border-brand-olive/20 text-brand-ink/70 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-cream transition-all"
                >
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                  Google 계정으로 로그인
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
