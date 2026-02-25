import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ko: {
    "nav.home": "홈",
    "nav.about": "브릿지미션 소개",
    "nav.mission": "우리가 하는 일",
    "nav.people": "섬기는 사람들",
    "nav.newsletter": "소식지",
    "nav.donate": "후원하기",
    "nav.admin_login": "관리자 로그인",
    "nav.logout": "로그아웃",
    
    "hero.tag": "Migrant Mission Community",
    "hero.title": "세상과 이주민을 사랑으로 잇는 다리",
    "hero.description": "브릿지 미션은 환대, 섬김, 공동체라는 기독교 핵심 가치를 기반으로 우리에게 찾아온 이주민들을 그리스도의 사랑으로 섬기는 비영리 선교단체입니다.",
    "hero.cta_partner": "파트너로 동참하기",
    "hero.cta_about": "브릿지미션 소개",
    
    "about.title": "브릿지 미션 지기 이야기",
    "about.quote": "이곳이 낯설고 외로운 타향이 아니라 따뜻하고 소망이 있는 또다른 고향으로 기억되길 바라며...",
    "about.pastor": "박익휘 목사",
    "about.p1": "유학생 이민자로서 보낸 10여년의 타지생활은 나그네의 마음을 품는 하나님의 훈련이었습니다. 또한 지난 3년동안 지역교회 안에서 외국인공동체를 세우고 이주민들을 돌보는 사역을 통해 선하신 하나님의 마음을 더욱 느끼는 시간이었습니다.",
    "about.p2": "그러던 중 하나님께서는 가까이 찾아온 이주민시대를 향해 더욱 그들의 삶에 들어가 함께하는 마음을 주셨고, 그동안의 훈련속에 인도하신 하나님의 은혜를 따라 건강한 외국인과 함께하는 다민족교회를 세우고 그리스도의 복음을 전하는 비전을 품게 되었습니다.",
    "about.p3": "세상과 교회, 이주민과 선주민, 불신자와 그리스도인 서로를 사랑으로 연결하고 복음의 통로 역할을 감당할 '브릿지 미션'을 통해 하나님나라의 풍성한 공동체를 세워가고자 합니다.",
    "about.value_1_desc": "찾아온 이들을 그리스도의 사랑으로 맞이합니다.",
    "about.value_3_desc": "그리스도 안에서 하나 된 교회를 꿈꿉니다.",
    
    "mission.title": "우리가 하는 일",
    "mission.desc": "브릿지 미션은 이주민들과 함께하는 여정 속에서 복음의 능력을 통해 하나님의 사랑 안에서 연합하는 공동체를 세워갑니다.",
    "mission.1_title": "만남과 복음전도",
    "mission.1_desc": "하나님이 주신 환대로 이주민들을 만나 복음을 전합니다. 한국어 교육 및 생활 지원 등으로 섬기며 그리스도의 복음을 증거합니다.",
    "mission.2_title": "훈련과 파송",
    "mission.2_desc": "이주민들을 말씀으로 양육하고 훈련합니다. 현지 사역자들을 양육하여 그리스도의 비전을 발견하고 사역자로 세워가도록 돕습니다.",
    "mission.3_title": "이주민 공동체 세움",
    "mission.3_desc": "여러 민족들과 함께 공동체를 세웁니다. 영어와 한국어 등 다국어로 예배드리며 다민족 교회를 세워가는 꿈을 이루어 갑니다.",
    "mission.4_title": "연구",
    "mission.4_desc": "변화하는 한국사회를 탐구하고 교회가 성경적 환대를 실천하도록 돕습니다. 이주민 선교의 필요성을 알리고 훈련하는 사명을 감당합니다.",
    
    "people.title": "섬기는 사람들",
    "people.desc": "브릿지 미션은 각자의 자리에서 이주민들을 사랑으로 섬기는 헌신된 사역자들과 함께합니다.",
    "people.reset": "사진 초기화",
    "people.edit": "사진 수정",
    
    "newsletter.title": "소식지",
    "newsletter.desc": "브릿지 미션의 발걸음과 이주민 친구들의 이야기를 전해드립니다.",
    "newsletter.view_all": "전체 소식 보기",
    "newsletter.read_more": "자세히 보기",
    "newsletter.view_original": "블로그에서 원문 보기",
    "newsletter.close": "닫기",
    
    "donate.title": "브릿지 미션 설립 파트너 모집",
    "donate.desc": "여러분의 후원금은 100% 이주민 사역을 위해 사용됩니다. 기도와 물질로 함께해주실 300명의 동역자를 기다립니다.",
    "donate.monthly": "정기후원: 월 1만원 (1구좌)",
    "donate.one_time": "일시후원: 신한은행 100-031-673977",
    "donate.receipt": "기부금 영수증 발급 가능 (비영리단체)",
    "donate.cta": "정기 후원하기 (파트너)",
    "donate.principle_title": "후원금 100% 원칙",
    "donate.principle_desc": "저희 가정도 이주민 선교를 위해 함께 헌신하고자 약속드립니다. 기초가 세워질 기간 2년 동안은 기관에서 사례를 받지 않고 자비량(강의, 번역 등)으로 섬기며 모든 후원금을 사역에 사용하겠습니다.",
    "donate.pastor_family": "박익휘 목사 가정",
    
    "footer.rights": "COPYRIGHT ⓒ BRIDGE MISSION. ALL RIGHTS RESERVED.",
    "footer.desc": "브릿지 미션은 그리스도의 사랑으로 이주민들을 섬기며, 모든 민족이 하나 되어 하나님 나라를 확장해가는 선교의 다리가 되고자 합니다.",
    "footer.contact_title": "연락처",
    "footer.info_title": "정보",
    "footer.institute": "브릿지미션 다문화연구소",
    "footer.representative": "대표: 박익휘",
    "footer.biz_number": "사업자 등록번호: 137-82-83255",
    "footer.privacy": "개인정보 처리방침",
    "footer.terms": "이용약관",
    "footer.location": "대한민국"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.mission": "What We Do",
    "nav.people": "People",
    "nav.newsletter": "Newsletter",
    "nav.donate": "Donate",
    "nav.admin_login": "Admin Login",
    "nav.logout": "Logout",
    
    "hero.tag": "Migrant Mission Community",
    "hero.title": "A Bridge Connecting the World and Migrants with Love",
    "hero.description": "Bridge Mission is a non-profit mission organization that serves migrants based on core Christian values of hospitality, service, and community.",
    "hero.cta_partner": "Become a Partner",
    "hero.cta_about": "About Us",
    
    "about.title": "The Story of Bridge Mission",
    "about.quote": "I hope this place is remembered not as a strange and lonely foreign land, but as another home with warmth and hope...",
    "about.pastor": "Pastor Ik-hui Park",
    "about.p1": "The 10 years of life abroad as an international student and immigrant was God's training to embrace the heart of a stranger. Also, through the ministry of building foreign communities and caring for migrants within local churches over the past 3 years, I felt the good heart of God even more.",
    "about.p2": "In the meantime, God gave me a heart to enter into the lives of migrants and be with them in this era of migration. Following the grace of God guided through training, I came to have a vision of building a healthy multi-ethnic church with foreigners and spreading the Gospel of Christ.",
    "about.p3": "Through 'Bridge Mission,' which will connect the world and the church, migrants and residents, unbelievers and Christians with love and serve as a channel for the Gospel, we want to build a rich community of the Kingdom of God.",
    "about.value_1_desc": "We welcome those who come with the love of Christ.",
    "about.value_3_desc": "We dream of a church united in Christ.",
    
    "mission.title": "What We Do",
    "mission.desc": "Bridge Mission builds a community united in God's love through the power of the Gospel in the journey with migrants.",
    "mission.1_title": "Encounter and Evangelism",
    "mission.1_desc": "We meet migrants with the hospitality God has given us and spread the Gospel. We witness the Gospel of Christ by serving through Korean language education and living support.",
    "mission.2_title": "Training and Sending",
    "mission.2_desc": "We nurture and train migrants with the Word. We help local ministers discover the vision of Christ and establish themselves as ministers.",
    "mission.3_title": "Building Migrant Communities",
    "mission.3_desc": "We build communities with various ethnic groups. We realize the dream of building multi-ethnic churches by worshiping in multiple languages such as English and Korean.",
    "mission.4_title": "Research",
    "mission.4_desc": "We explore the changing Korean society and help the church practice biblical hospitality. We fulfill the mission of informing and training the necessity of migrant mission.",
    
    "people.title": "People",
    "people.desc": "Bridge Mission is with dedicated ministers who serve migrants with love in their respective places.",
    "people.reset": "Reset Photos",
    "people.edit": "Edit Photo",
    
    "newsletter.title": "Newsletter",
    "newsletter.desc": "We share the footsteps of Bridge Mission and the stories of our migrant friends.",
    "newsletter.view_all": "View All News",
    "newsletter.read_more": "Read More",
    "newsletter.view_original": "View Original on Blog",
    "newsletter.close": "Close",
    
    "donate.title": "Recruiting Founding Partners of Bridge Mission",
    "donate.desc": "100% of your donations are used for migrant ministry. We are waiting for 300 partners to join us in prayer and material support.",
    "donate.monthly": "Regular Donation: 10,000 KRW/month (1 account)",
    "donate.one_time": "One-time Donation: Shinhan Bank 100-031-673977",
    "donate.receipt": "Donation receipt can be issued (Non-profit organization)",
    "donate.cta": "Regular Donation (Partner)",
    "donate.principle_title": "100% Donation Principle",
    "donate.principle_desc": "Our family also promises to dedicate ourselves to migrant mission. For the first 2 years while the foundation is being established, we will not receive a salary from the organization and will serve through self-support (lectures, translation, etc.), using all donations for the ministry.",
    "donate.pastor_family": "Pastor Ik-hui Park's Family",
    
    "footer.rights": "COPYRIGHT ⓒ BRIDGE MISSION. ALL RIGHTS RESERVED.",
    "footer.desc": "Bridge Mission serves migrants with the love of Christ and aims to be a bridge of mission where all nations become one and expand the Kingdom of God.",
    "footer.contact_title": "Contact",
    "footer.info_title": "Information",
    "footer.institute": "Bridge Mission Multicultural Institute",
    "footer.representative": "Representative: Ik-hui Park",
    "footer.biz_number": "Business Registration: 137-82-83255",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.location": "South Korea"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ko");

  useEffect(() => {
    const saved = localStorage.getItem("bridge_mission_lang") as Language;
    if (saved && (saved === "ko" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("bridge_mission_lang", lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
