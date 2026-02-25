export interface Post {
  date: string;
  title: string;
  author: string;
  image: string;
  link: string;
  content: string;
}

export const initialPosts: Post[] = [
  { 
    date: "2026.02", 
    title: "브릿지 미션 선교사 리트릿", 
    author: "박익휘 목사",
    image: "https://blogthumb.pstatic.net/MjAyNjAyMDdfMyAg/MDAxNzcwNDMxNzg0MzQz.cYu4JBca8cdTs6xCGmwIL2O5H-ZtXM8uETQty5YuNcYg.TOuuzAxvelj4UnqzksIc35PMaTIDKkXEXMQZKxpscVwg.JPEG/IMG%A3%DF7762.JPG?type=s3",
    link: "https://blog.naver.com/bridgeinterchurch/224174974835",
    content: "김포에서 이주민 선교와 목회를 섬기는 4가정이 함께 속초–양양으로 가족 리트릿을 다녀왔다. 같은 비전, 한 마음으로 모이니 특별한 계획 없어도 서로 나눌것이 많다!\n\n1박으로 짧게 다녀왔는데 새벽까지 이주민의 삶, 타문화 선교로의 부르심, 다문화 목회 등 여럿 포럼의 주제가 올라온다! 서로의 존재만으로도 깊은 배움이 있다!\n\n하나님께서 함께하시는 이주민 사역은 결코 외로운 길이 아님을 확인한다! 함께 걷는 동역자들이 있음에 감사하며, 앞으로의 사역을 위해 기도를 부탁드린다."
  },
  { 
    date: "2026.02", 
    title: "선교적교회운동의 태동과 발전", 
    author: "박익휘 목사",
    image: "https://blogthumb.pstatic.net/MjAyNjAyMDdfNSAg/MDAxNzcwNDMxNTg5MTUz.yo3mqCxeCKavoFvHz5Igedfc02fcRXqr9cMKGLrRLzsg.PZDv7_GEd91r-PYeue62k1snC-7hytjlisliUPWS2R8g.PNG/IMG%A3%DF7834.PNG?type=s3",
    link: "https://blog.naver.com/bridgeinterchurch/224174972119",
    content: "서울시민교회 디모데 청년부 특강 자료입니다. 선교적 교회 운동의 역사적 배경과 현대적 의미를 탐구하며, 교회가 어떻게 세상 속에서 하나님의 선교에 참여할 수 있는지에 대해 나누었습니다.\n\n선교적 교회(Missional Church)란 단순히 선교를 많이 하는 교회가 아니라, 교회의 본질 자체가 선교적임을 깨닫고 삶의 모든 영역에서 하나님의 통치를 드러내는 공동체입니다. 청년들이 각자의 삶의 현장에서 선교사적 삶을 살아내기를 도전하는 시간이었습니다."
  },
  { 
    date: "2025.12", 
    title: "추수감사절을 지나며", 
    author: "브릿지 미션",
    image: "https://picsum.photos/seed/thanksgiving/800/600",
    link: "https://blog.naver.com/bridgeinterchurch/224094399218",
    content: "지나보니 모든것이 은혜이고 감사이지만, 그 과정은 분명 많은 것이 힘들었고 불안했다. 무엇보다 부모는 개척을 결정했지만, 태어나 자기 세상의 전부나 다름없던 교회와 갑자기 단절된 큰 아이는 꽤나 큰 심리적 충격을 겪었던 것 같다.\n\n어제는 추수감사절을 맞아 우리에게 행하신 하나님께 감사하고, 함께 포트럭 파티를 했다. 각자가 음식을 싸와서 먹었는데, 부활절때 보다 더 풍성한 음식 리스트에 감사와 감동!!\n\n이주민 친구들과 함께 나누는 식탁 교제 속에서 하나님 나라의 풍성함을 맛봅니다. 우리의 작은 나눔이 그들에게 따뜻한 위로가 되길 소망합니다."
  },
  { 
    date: "2025.07", 
    title: "2025년 7월 브릿지 미션 소식", 
    author: "박익휘 목사",
    image: "https://blogthumb.pstatic.net/MjAyNTEwMTRfMjMy/MDAxNzYwNDIzNDU3ODYy.K-fh7y9GvbuqyosfjAiL-CVPQ3CCvXQgH6CjXDIdWiAg.xX17jHejd5GujGx3NfEpORzb4bMlk6geLj5S-7aCve0g.JPEG/IMG_4309.jpg?type=s3",
    link: "https://blog.naver.com/bridgeinterchurch/223945151836",
    content: "브릿지 미션 소식을 전해요. 박익휘 목사 가정 소식과 아내의 사임 소식입니다. 15년 동안 간사로 섬긴 IVF를 사임하고 새로운 출발을 하게 되었습니다. 많은 분들의 축복 속에 마무리할 수 있어 감사했습니다.\n\n이제 새로운 사역의 장으로 나아갑니다. 이주민들을 향한 하나님의 마음을 품고, 그들의 삶 속으로 더 깊이 들어가고자 합니다. 기도로 함께해주시는 모든 분들께 감사의 인사를 전합니다."
  },
  { 
    date: "2025.07", 
    title: "교회같지않은 이음교회?", 
    author: "브릿지 미션",
    image: "https://picsum.photos/seed/church/800/600",
    link: "https://blog.naver.com/bridgeinterchurch/223945158895",
    content: "브릿지 이음교회의 공간, '이음센터'가 세워지면서 많은 분들이 방문해 주고 계십니다. 이음교회가 생각한 교회 공간의 핵심은 단순합니다. 바로 '복음 전도'와 '복음적 만남'입니다.\n\n어떻게 하면 우리 공간에서 이웃들을 만날 수 있을까? 교회가 도시 속에서 존재할 수 있을까? 거창한 건물보다 따뜻한 환대가 있는 공간, 누구나 편하게 찾아와 쉴 수 있는 공간을 꿈꿉니다. 이음센터가 지역 사회와 이주민들을 잇는 소중한 통로가 되길 바랍니다."
  },
  { 
    date: "2025.06", 
    title: "이음센터: 환대의 식탁 이야기", 
    author: "브릿지 미션",
    image: "https://picsum.photos/seed/table/800/600",
    link: "https://blog.naver.com/bridgeinterchurch",
    content: "이음센터에서는 매주 목요일 '환대의 식탁'이 열립니다. 국적과 언어는 다르지만 함께 밥을 먹으며 식구가 되어가는 시간입니다.\n\n정성껏 준비한 음식을 나누며 서로의 삶을 응원하고 기도합니다. 이 작은 식탁이 이주민들에게는 고향의 따뜻함을, 우리에게는 하나님 나라의 풍성함을 경험하게 하는 통로가 됩니다."
  },
  { 
    date: "2025.06", 
    title: "이주민을 위한 한국어 교실 개강", 
    author: "브릿지 미션",
    image: "https://picsum.photos/seed/korean/800/600",
    link: "https://blog.naver.com/bridgeinterchurch",
    content: "새로운 학기를 맞아 이주민들을 위한 한국어 교실이 개강했습니다. 다양한 국적의 친구들이 모여 한국어를 배우고 서로의 문화를 나누는 소중한 시간입니다.\n\n단순히 언어를 배우는 것을 넘어, 한국 사회에 잘 적응하고 서로를 깊이 이해하는 공동체가 되길 소망합니다. 자원봉사로 섬겨주시는 선생님들께도 감사의 마음을 전합니다."
  },
  { 
    date: "2025.05", 
    title: "주님의 전도계획 (독서와 나눔)", 
    author: "박익휘 목사",
    image: "https://picsum.photos/seed/reading/800/600",
    link: "https://blog.naver.com/bridgeinterchurch/223882034712",
    content: "주제: 성령의 분부함과 전도의 힘. 예수님은 자신을 온전히 내어주셨다. 예수님은 제자들에게 순종을 요구하셨지만, 그보다 먼저 자신의 영을 주셨고, 그로 인해 제자들은 하나님의 사랑을 깊이 경험하게 되었다.\n\n전도는 단순히 지식을 전달하는 것이 아니라, 우리가 경험한 하나님의 사랑을 흘려보내는 것입니다. 제자들의 삶을 변화시켰던 그 성령의 능력이 오늘날 우리의 전도 현장에도 동일하게 역사하시기를 기도합니다."
  },
  { 
    date: "2025.04", 
    title: "지역 사회와 함께하는 바자회", 
    author: "브릿지 미션",
    image: "https://picsum.photos/seed/bazaar/800/600",
    link: "https://blog.naver.com/bridgeinterchurch",
    content: "이주민 사역 기금 마련을 위한 지역 사회 바자회를 열었습니다. 많은 분들이 물품을 기증해주시고 방문해주셔서 풍성한 나눔의 시간이 되었습니다.\n\n수익금 전액은 이주민들의 긴급 의료비와 생활 지원금으로 사용될 예정입니다. 함께해주신 모든 분들의 따뜻한 손길에 진심으로 감사드립니다."
  },
  { 
    date: "2025.03", 
    title: "브릿지 다문화 연구소 개소식", 
    author: "박익휘 목사",
    image: "https://picsum.photos/seed/lab/800/600",
    link: "https://blog.naver.com/bridgeinterchurch",
    content: "브릿지 다문화 연구소가 정식으로 문을 열었습니다. 변화하는 한국 사회 속에서 교회가 어떻게 성경적 환대를 실천할 수 있을지 연구하고 대안을 제시하는 역할을 감당할 것입니다.\n\n연구소의 첫 프로젝트로 '이주민 실태 조사 및 선교 전략 연구'를 시작합니다. 많은 관심과 기도를 부탁드립니다."
  },
  { 
    date: "2025.02", 
    title: "설날 맞이 이주민 초청 잔치", 
    author: "브릿지 미션",
    image: "https://picsum.photos/seed/lunar/800/600",
    link: "https://blog.naver.com/bridgeinterchurch",
    content: "민족의 명절 설날을 맞아 고향에 가지 못하는 이주민 친구들을 초청하여 따뜻한 떡국을 나누고 한국의 전통 놀이를 즐기는 시간을 가졌습니다.\n\n비록 몸은 멀리 떨어져 있지만, 그리스도의 사랑 안에서 한 가족임을 느끼는 행복한 시간이었습니다. 함께해주신 모든 분들께 감사드립니다."
  },
];
