import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-olive rounded-full flex items-center justify-center text-white font-serif text-lg">B</div>
              <span className="font-serif text-2xl font-semibold">Bridge Mission</span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed">
              브릿지 미션은 그리스도의 사랑으로 이주민들을 섬기며, 
              모든 민족이 하나 되어 하나님 나라를 확장해가는 선교의 다리가 되고자 합니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} />
                bridgemcenter@outlook.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} />
                대한민국
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Information</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>브릿지미션 다문화연구소</li>
              <li>대표: 박익휘</li>
              <li>사업자 등록번호: 137-82-83255</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:row justify-between items-center gap-4 text-white/30 text-xs">
          <p>COPYRIGHT ⓒ BRIDGE MISSION. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
