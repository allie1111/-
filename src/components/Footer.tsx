import React from 'react';

interface FooterProps {
  onOpenCareGuide: () => void;
  onOpenKakaoChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCareGuide,
  onOpenKakaoChat,
}) => {
  return (
    <footer className="w-full bg-[#f2e7db] text-[#695e57] pt-16 pb-12 border-t border-[#eedecf]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Col 1 */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <span className="font-serif text-xl text-[#394634] font-medium block">꽃을 담다</span>
              <span className="text-[11px] uppercase tracking-widest text-[#7d8b76] font-semibold">
                L'Atelier de Fleurs & Romantic Greenhouse
              </span>
            </div>
            <p className="font-serif text-xs text-[#695e57] max-w-sm font-light leading-relaxed">
              햇살과 바람, 계절의 숨결을 그대로 엮어냅니다. 성수동 골목에 자리 잡은 프렌치 감성의 로맨틱 온실에서 지친 하루를 달래는 꽃과 따스한 온기를 만나보세요.
            </p>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-4 flex flex-col">
            <span className="font-sans text-xs uppercase tracking-widest text-[#394634] font-semibold mb-3">
              Greenhouse Info
            </span>
            <div className="space-y-1.5 text-xs text-[#695e57] font-light">
              <p>
                <span className="font-medium text-[#322a26]">온실 운영:</span> 화 – 토 10:30 – 19:30
              </p>
              <p>
                <span className="font-medium text-[#322a26]">일요일:</span> 100% 사전 예약 픽업제 (월요일 정기휴무)
              </p>
              <p>
                <span className="font-medium text-[#322a26]">오시는 곳:</span> 서울시 성동구 연무장길 24, 1층
              </p>
              <p>
                <span className="font-medium text-[#322a26]">문의:</span> 02-543-8820 / atelier@kkot-damda.com
              </p>
            </div>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-3 flex flex-col">
            <span className="font-sans text-xs uppercase tracking-widest text-[#394634] font-semibold mb-3">
              Follow The Garden
            </span>
            <div className="flex flex-col gap-2 text-xs">
              <a
                className="inline-flex items-center gap-2 hover:text-[#c1664e] transition-colors"
                href="#visit-boutique"
                onClick={(e) => {
                  e.preventDefault();
                  alert('@kkot.damda_greenhouse 공식 인스타그램 계정입니다. 오늘의 생화 입고 소식을 확인하세요.');
                }}
              >
                <span className="material-symbols-outlined text-sm">filter_vintage</span>
                <span>@kkot.damda_greenhouse</span>
              </a>
              <button
                className="inline-flex items-center gap-2 hover:text-[#c1664e] transition-colors text-left cursor-pointer"
                onClick={onOpenKakaoChat}
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>카카오톡 채널 '꽃을담다'</span>
              </button>
              <button
                className="inline-flex items-center gap-2 hover:text-[#c1664e] transition-colors text-left cursor-pointer"
                onClick={onOpenCareGuide}
              >
                <span className="material-symbols-outlined text-sm">menu_book</span>
                <span>계절 온실 저널 & 케어 팁</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#eedecf]/70 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#695e57]/80">
          <p>© 2024 L'Atelier de Fleurs KKOT-EUL DAMDA. Provence Greenhouse Edition.</p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => alert('개인정보처리방침: 고객님의 주문 및 예약 정보는 안전하게 보관되며 주문 처리 목적으로만 이용됩니다.')}
              className="hover:text-[#322a26] transition-colors cursor-pointer"
            >
              개인정보처리방침
            </button>
            <button
              onClick={() => alert('이용약관: 생화 특성상 제작 시작 후 단순 변심에 의한 당일 취소는 어려울 수 있습니다.')}
              className="hover:text-[#322a26] transition-colors cursor-pointer"
            >
              이용약관
            </button>
            <button
              onClick={onOpenCareGuide}
              className="hover:text-[#322a26] transition-colors cursor-pointer text-[#c1664e] font-medium"
            >
              생화 케어 가이드
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
