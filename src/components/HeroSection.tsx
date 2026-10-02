import React from 'react';

interface HeroSectionProps {
  onReserveClick: () => void;
  onClassClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onReserveClick,
  onClassClick,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f0e6] py-14 lg:py-20 border-b border-[#eedecf]">
      {/* Background floral atmospheric glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#f1dfce]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#e4ece0]/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faece5] border border-[#f7ded0] text-[#c1664e] text-xs font-semibold tracking-wider mb-5">
              <span className="material-symbols-outlined text-sm">filter_vintage</span>
              <span>PROVENCE GREENHOUSE ATELIER</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#9f5128] border-[#120e0c] font-light leading-[1.3] tracking-tight mb-4 text-balance">
              꽃으로 머무는<br />
              <span className="font-normal text-[#d9a395]">온실의 시간</span>
            </h1>

            <p className="font-serif text-base text-[#394634] font-medium mb-3">
              성수동 온실 아틀리에 ‘꽃을 담다’
            </p>

            <p className="font-serif text-sm text-[#695e57] font-light leading-relaxed mb-8 max-w-md">
              당신의 마음이,<br />
              가장 아름답게 피어나는 순간<br /><br />
              소중한 날에는 꽃을 담고,<br />
              전하고 싶은 마음까지 함께 담습니다.
            </p>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onReserveClick}
                className="px-7 py-3 rounded-full bg-[#394634] text-[#f5efe6] hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">spa</span>
                <span>꽃다발 예약</span>
              </button>
              <button
                onClick={onClassClick}
                className="px-7 py-3 rounded-full bg-white border border-[#eedecf] text-[#322a26] hover:bg-[#faece5] transition-all text-xs font-semibold tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">local_florist</span>
                <span>온실 클래스 신청</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-[#eedecf] w-full flex items-center gap-6 text-xs text-[#695e57] font-light">
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#c1664e]">wb_sunny</span>
                <span>당일 아침 생화</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-[#eedecf]" />
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#394634]">eco</span>
                <span>친환경 린넨 패키징</span>
              </span>
            </div>
          </div>

          {/* Right Column: AI Flower Arranging Video Showcase */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#1e1917] group">
              <video
                src="/ai_flower_arranging_3s.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
