import React from 'react';

interface ConsultationBannerProps {
  onOpenKakaoChat: () => void;
  onOnlineReservation: () => void;
}

export const ConsultationBanner: React.FC<ConsultationBannerProps> = ({
  onOpenKakaoChat,
  onOnlineReservation,
}) => {
  return (
    <section
      className="w-full py-20 lg:py-24 bg-gradient-to-r from-[#e7d8c7] via-[#faece5] to-[#f4ebe1] border-y border-[#eedecf]"
      id="consultation"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        {/* Flower Emblem */}
        <div className="w-10 h-10 rounded-full bg-white/90 border border-[#eedecf] text-[#c1664e] mx-auto flex items-center justify-center mb-4 shadow-sm">
          <span className="material-symbols-outlined text-xl">spa</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#322a26] font-light mb-3 tracking-tight">
          따스한 온실에서 나누는<br />
          <span className="font-normal text-[#c1664e]">플로럴 다이얼로그</span>
        </h2>

        <p className="font-serif text-xs sm:text-sm text-[#695e57] font-light max-w-md mx-auto mb-6 leading-relaxed">
          전하고픈 이야기와 원하는 색감을 편안히 들려주세요. 플로리스트가 1:1 맞춤 제작해 드립니다.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenKakaoChat}
            className="px-6 py-3 rounded-full bg-[#c1664e] text-white hover:bg-[#9c4832] transition-all text-xs font-semibold tracking-wider inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">chat_bubble</span>
            <span>카카오톡 1:1 실시간 상담</span>
          </button>
          <button
            onClick={onOnlineReservation}
            className="px-6 py-3 rounded-full bg-white border border-[#eedecf] text-[#394634] hover:bg-[#faf6f0] transition-all text-xs font-semibold tracking-wider shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            <span>온라인 예약</span>
          </button>
        </div>
      </div>
    </section>
  );
};
