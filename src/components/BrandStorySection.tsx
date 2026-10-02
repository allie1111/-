import React from 'react';
import { STORY_IMAGE } from '../data/mockData';

interface BrandStorySectionProps {
  onLearnMoreCare?: () => void;
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = ({ onLearnMoreCare }) => {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#f5efe6] border-y border-[#eedecf]" id="brand-story">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bouquet on Stone Pedestal */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-md border-4 border-white bg-[#f5efe6]">
              <img
                src={STORY_IMAGE}
                alt="Sunlit Bouquet on Stone Pedestal"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Editorial Philosophy & Feature Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c1664e] mb-2">
              <span className="w-5 h-px bg-[#c1664e]" />
              <span>Notre Philosophie</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#322a26] font-light leading-snug mb-4">
              꽃 한 송이에 담긴<br />
              <span className="font-normal text-[#394634]">온실의 시간과 계절의 기억</span>
            </h2>

            <p className="font-serif text-sm sm:text-base text-[#695e57] font-light leading-relaxed mb-6">
              제철 꽃 본연의 선율과 허브 향기를 정갈한 프렌치 핸드타이드로 전합니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Feature 1 */}
              <div className="p-4 rounded-2xl bg-white border border-[#eedecf] shadow-sm flex flex-col hover:border-[#c1664e]/40 transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#f7ded0]/60 text-[#c1664e] flex items-center justify-center mb-2.5">
                  <span className="material-symbols-outlined text-base">nature</span>
                </div>
                <h3 className="font-serif text-xs font-semibold text-[#394634] mb-1">
                  파스텔 가든 플라워
                </h3>
                <p className="text-[11px] text-[#695e57] leading-relaxed">
                  피치 로즈와 연분홍 스위트피의 싱그러운 색채 조화
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-4 rounded-2xl bg-white border border-[#eedecf] shadow-sm flex flex-col hover:border-[#c1664e]/40 transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#e4eae0] text-[#364535] flex items-center justify-center mb-2.5">
                  <span className="material-symbols-outlined text-base">local_florist</span>
                </div>
                <h3 className="font-serif text-xs font-semibold text-[#394634] mb-1">
                  워시드 린넨 리본
                </h3>
                <p className="text-[11px] text-[#695e57] leading-relaxed">
                  자연 분해 크라프트 페이퍼 & 내추럴 린넨 마감
                </p>
              </div>

              {/* Feature 3 */}
              <div 
                onClick={onLearnMoreCare}
                className="p-4 rounded-2xl bg-white border border-[#eedecf] shadow-sm flex flex-col hover:border-[#c1664e]/40 transition-all cursor-pointer group"
                title="생화 케어 가이드 보기"
              >
                <div className="w-8 h-8 rounded-xl bg-[#faece5] text-[#c1664e] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-base">card_giftcard</span>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif text-xs font-semibold text-[#394634]">
                    손글씨 엽서 & 케어
                  </h3>
                  <span className="material-symbols-outlined text-xs text-[#c1664e] opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </div>
                <p className="text-[11px] text-[#695e57] leading-relaxed">
                  생화 수명 연장제와 맞춤 손글씨 레터 카드 동봉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
