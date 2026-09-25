import React, { useState } from 'react';
import { Review } from '../types';

interface ReviewsSectionProps {
  reviews: Review[];
  onWriteReview: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  onWriteReview,
}) => {
  const [isPaused, setIsPaused] = useState(false);

  // Ensure enough duplicated items for a seamless infinite loop
  const marqueeReviews = reviews.length < 5
    ? [...reviews, ...reviews, ...reviews, ...reviews]
    : [...reviews, ...reviews];

  return (
    <section className="w-full py-20 lg:py-28 bg-[#faf6f0] overflow-hidden" id="client-stories">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faece5] border border-[#f7ded0] text-[#c1664e] text-xs font-semibold mb-3">
            <span className="material-symbols-outlined text-sm">favorite</span>
            <span>Client Letters</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#322a26] font-light mb-2">
            온실에서 피어난 <span className="font-normal text-[#c1664e]">다정한 순간들</span>
          </h2>

          <div className="inline-flex items-center gap-3 mt-3 px-4 py-1.5 rounded-full bg-white border border-[#eedecf] text-xs text-[#695e57]">
            <div className="flex items-center text-[#c1664e]">
              <span className="material-symbols-outlined material-symbols-filled text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined material-symbols-filled text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined material-symbols-filled text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined material-symbols-filled text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined material-symbols-filled text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <span className="font-serif font-semibold text-[#394634]">4.98 / 5.0</span>
            <span className="text-[#695e57]/80">· 고객 만족도 99%</span>
          </div>
        </div>
      </div>

      {/* Marquee Track Container with subtle fade edges */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#faf6f0] via-[#faf6f0]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#faf6f0] via-[#faf6f0]/80 to-transparent z-10" />

        {/* Scrolling Track */}
        <div
          className={`flex gap-5 ${isPaused ? '' : 'animate-marquee-slow'} cursor-grab active:cursor-grabbing`}
          style={isPaused ? { animationPlayState: 'paused' } : undefined}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {marqueeReviews.map((rev, index) => {
            return (
              <div
                key={`${rev.id}-${index}`}
                className="w-[280px] sm:w-[320px] shrink-0 p-5 rounded-2xl bg-white border border-[#eedecf] shadow-sm flex flex-col justify-between hover:border-[#c1664e]/50 hover:shadow-md transition-all select-none group"
              >
                <div>
                  <div className="flex items-center text-[#c1664e] mb-2.5">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined material-symbols-filled text-xs"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-serif text-xs text-[#322a26] leading-relaxed mb-4 group-hover:text-[#394634] transition-colors">
                    {rev.content}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#eedecf]/70 flex items-center justify-between">
                  <span className="font-serif text-xs font-medium text-[#394634]">
                    {rev.author}
                  </span>
                  <span className="text-[10px] text-[#695e57] px-2 py-0.5 rounded-full bg-[#f5efe6]">
                    {rev.occasion}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Controls and Write Review action */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#695e57]">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#eedecf] hover:bg-[#faece5] hover:text-[#c1664e] transition-colors cursor-pointer text-[11px]"
            title={isPaused ? '애니메이션 재생' : '애니메이션 일시정지'}
          >
            <span className="material-symbols-outlined text-sm">
              {isPaused ? 'play_arrow' : 'pause'}
            </span>
            <span>{isPaused ? '애니메이션 재생' : '일시정지 (마우스 올림 시 자동 정지)'}</span>
          </button>

          <span className="hidden sm:inline text-[#eedecf]">|</span>

          <button
            onClick={onWriteReview}
            className="inline-flex items-center gap-1.5 text-xs text-[#695e57] hover:text-[#c1664e] transition-colors py-1 cursor-pointer font-serif"
          >
            <span className="material-symbols-outlined text-sm">rate_review</span>
            <span>온실에서의 따뜻한 이야기를 들려주세요 (후기 작성)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
