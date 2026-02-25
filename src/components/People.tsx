import { motion } from "motion/react";
import { Mail, Facebook, Globe, Camera, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import { initialPeople, Person } from "../data/people";
import { useAuth } from "../contexts/AuthContext";

export default function People() {
  const [people, setPeople] = useState<Person[]>(initialPeople);
  const { user } = useAuth();

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("bridge_mission_people");
    if (saved) {
      try {
        setPeople(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load people data", e);
      }
    }
  }, []);

  // Save to localStorage when people state changes
  const savePeople = (newPeople: Person[]) => {
    setPeople(newPeople);
    localStorage.setItem("bridge_mission_people", JSON.stringify(newPeople));
  };

  const handleUpdateImage = (id: string) => {
    const currentPerson = people.find(p => p.id === id);
    const newUrl = prompt("새로운 이미지 URL을 입력해주세요:", currentPerson?.image);
    
    if (newUrl && newUrl !== currentPerson?.image) {
      const newPeople = people.map(p => 
        p.id === id ? { ...p, image: newUrl } : p
      );
      savePeople(newPeople);
    }
  };

  const handleReset = () => {
    if (confirm("모든 사진을 초기 상태로 되돌리시겠습니까?")) {
      savePeople(initialPeople);
    }
  };

  return (
    <section id="people" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-serif mb-6">섬기는 사람들</h2>
            <p className="text-brand-ink/60 text-lg">
              브릿지 미션은 각자의 자리에서 이주민들을 사랑으로 섬기는 
              헌신된 사역자들과 함께합니다.
            </p>
          </div>
          {user?.isAdmin && (
            <button 
              onClick={handleReset}
              className="flex items-center gap-2 text-xs font-bold text-brand-olive hover:opacity-70 transition-opacity uppercase tracking-widest"
            >
              <RotateCcw size={14} /> 사진 초기화
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {people.map((person, idx) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-[40px] bg-brand-cream/30 border border-brand-olive/5"
            >
              <div className="w-full md:w-48 shrink-0 relative group">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full aspect-square object-cover rounded-[32px] shadow-md transition-transform group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                {user?.isAdmin && (
                  <button 
                    onClick={() => handleUpdateImage(person.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px] text-white gap-2 text-sm font-medium"
                  >
                    <Camera size={20} /> 사진 수정
                  </button>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold">{person.name}</h3>
                    <p className="text-brand-olive font-medium text-sm">{person.role}</p>
                  </div>
                  <div className="flex gap-2">
                    {person.email && (
                      <a href={`mailto:${person.email}`} className="p-2 bg-white rounded-full text-brand-olive hover:bg-brand-olive hover:text-white transition-colors">
                        <Mail size={16} />
                      </a>
                    )}
                    {person.social?.facebook && (
                      <a href={person.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-brand-olive hover:bg-brand-olive hover:text-white transition-colors">
                        <Facebook size={16} />
                      </a>
                    )}
                    {person.social?.scholar && (
                      <a href={person.social.scholar} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-brand-olive hover:bg-brand-olive hover:text-white transition-colors">
                        <Globe size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-brand-ink/70 text-sm leading-relaxed mb-6 italic">
                  "{person.description}"
                </p>
                
                <ul className="space-y-1">
                  {person.details.map((detail, i) => (
                    <li key={i} className="text-xs text-brand-ink/50 flex items-center gap-2">
                      <div className="w-1 h-1 bg-brand-olive/30 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
