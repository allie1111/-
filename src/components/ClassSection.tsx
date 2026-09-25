import React from 'react';
import { CLASS_IMAGE_1, CLASS_IMAGE_2 } from '../data/mockData';

interface ClassSectionProps {
  onBookClass: () => void;
}

export const ClassSection: React.FC<ClassSectionProps> = ({ onBookClass }) => {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#f5efe6] border-y border-[#eedecf]" id="atelier-classes">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Workshop Details */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c1664e] mb-2">
              <span className="w-5 h-px bg-[#c1664e]" />
              <span>Greenhouse One-day Atelier</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#322a26] font-light leading-snug mb-4">
              햇살 아래 향긋한 차와 함께,<br />
              <span className="font-normal text-[#c1664e]">나만의 꽃을 피우는 온실 클래스</span>
            </h2>

            <p className="font-serif text-sm text-[#695e57] font-light mb-6 leading-relaxed">
              유리온실의 아침 햇살 속에서 즐기는 소수 정예 프라이빗 플라워 워크숍입니다.
            </p>

            {/* Benefit Cards */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#eedecf] shadow-sm">
                <div className="w-7 h-7 rounded-full bg-[#f7ded0]/60 text-[#c1664e] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-sm">local_cafe</span>
                </div>
                <div>
                  <p className="font-serif text-xs font-semibold text-[#394634]">
                    웰컴 유기농 허브티 & 마카롱 티타임
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#eedecf] shadow-sm">
                <div className="w-7 h-7 rounded-full bg-[#e4eae0] text-[#364535] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-sm">yard</span>
                </div>
                <div>
                  <p className="font-serif text-xs font-semibold text-[#394634]">
                    1:4 밀착 코칭 (생화 컨디셔닝부터 핸드타이드)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#eedecf] shadow-sm">
                <div className="w-7 h-7 rounded-full bg-[#faece5] text-[#c1664e] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                </div>
                <div>
                  <p className="font-serif text-xs font-semibold text-[#394634]">
                    친환경 린넨 패키징 & 자연광 포토존 촬영
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="flex items-center gap-4">
              <button
                onClick={onBookClass}
                className="px-6 py-3 bg-[#394634] text-[#f5efe6] hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider rounded-full shadow-sm text-center flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">event_available</span>
                <span>클래스 신청하기</span>
              </button>
              <span className="text-xs text-[#695e57] font-serif">회당 최대 4인 프라이빗</span>
            </div>
          </div>

          {/* Right Column: Dual Staggered Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-md border-4 border-white bg-[#f5efe6]">
              <img
                src={CLASS_IMAGE_1}
                alt="온실 플라워 클래스 실습 모습"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-md border-4 border-white bg-[#f5efe6] mt-6">
              <img
                src={CLASS_IMAGE_2}
                alt="완성된 온실 센터피스와 캔들"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
