import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "홈", href: "#home" },
    { name: "브릿지미션 소개", href: "#about" },
    { name: "우리가 하는 일", href: "#mission" },
    { name: "섬기는 사람들", href: "#people" },
    { name: "소식지", href: "#newsletter" },
    { name: "후원하기", href: "#donate", primary: true },
  ];

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
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
        </motion.div>
      )}
    </nav>
  );
}
