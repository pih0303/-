export interface Person {
  id: string;
  name: string;
  role: string;
  email?: string;
  description: string;
  details: string[];
  social?: {
    facebook?: string;
    scholar?: string;
  };
  image: string;
}

export const initialPeople: Person[] = [
  {
    id: "park",
    name: "박익휘 (Park Ik-hui)",
    role: "대표 선교사",
    email: "ek@bridgeinternational.church",
    description: "이주민들에게 '사람이 꽃보다 아름답다'고 말해주고 싶습니다. 고된 노동현장을 살다 방문한 이들에게 따뜻하고 소망이 있는 또다른 고향으로 기억되길 바랍니다.",
    details: [
      "브릿지 이음 국제교회 대표목사",
      "브릿지 미션 대표",
      "고신대학교 신학전공",
      "Biblical (Missio) Theological Seminary M.Div",
      "Biola University Doctor of Intercultural Studies (Candidate)"
    ],
    social: {
      facebook: "https://www.facebook.com/ekparkbiblical/",
      scholar: "https://scholar.google.com/citations?user=ZMvOd9cAAAAJ&hl=ko"
    },
    image: "https://picsum.photos/seed/park/600/600"
  },
  {
    id: "devon",
    name: "데븐 (Devon Grobler)",
    role: "국내 이주민 선교사",
    description: "남아프리카 침례신학대학교에서 신학을 공부하고 아내와 함께 한국으로 와 이주민과 다문화 공동체를 섬기고 있습니다. 언어와 문화의 장벽으로 복음을 접하기 어려운 이웃들에게 복음의 다리가 되는 것이 저의 사명입니다.",
    details: [
      "남아프리카 침례신학대학교 (B.Th.)",
      "브릿지 이음 국제교회 협력 사역",
      "다문화 공동체 세우기 헌신"
    ],
    image: "https://picsum.photos/seed/devon/600/600"
  },
  {
    id: "somwang",
    name: "소정 & 소망 (Somwang & Kim So-jung)",
    role: "태국 파송 선교사",
    description: "태국 현지 콘캔 출신 남편과 한국인 아내의 만남으로 이루어진 선교 가정입니다. 태국 북동부(이싼) 지역에서 미디어 사역과 예배 사역을 통해 하나님을 섬기고 있습니다.",
    details: [
      "태국 북동부(이싼) 컨깬 지역 사역",
      "미디어 사역 (단편영화, 뮤직비디오 제작)",
      "예배 및 음악 교육 사역"
    ],
    image: "https://picsum.photos/seed/somwang/600/600"
  },
  {
    id: "kim",
    name: "김현주 (Kim Hyun-joo)",
    role: "이주민 목회 선교사",
    description: "김포, 인천 지역에서 태국·라오스 이주민 공동체를 섬기고 있습니다. 하나님의 말씀을 삶으로 살아내고 영혼을 살리는 교회를 세우는 것이 저의 비전입니다.",
    details: [
      "김포/인천 지역 태국·라오스 공동체 사역",
      "다문화 교회 공동체 세우기 헌신",
      "삶으로 살아내는 신앙 강조"
    ],
    image: "https://picsum.photos/seed/kim/600/600"
  }
];
