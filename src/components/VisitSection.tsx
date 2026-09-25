import React from 'react';
import { MAP_IMAGE } from '../data/mockData';

interface VisitSectionProps {
  onCopyAddress: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onCopyAddress }) => {
  return (
    <section className="w-full py-20 lg:py-24 bg-[#faf6f0]" id="visit-boutique">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Boutique Info */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c1664e] mb-3">
              <span className="w-5 h-px bg-[#c1664e]" />
              <span>Atelier & Greenhouse Visit</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#394634] font-normal mb-8">
              성수동 로맨틱 온실 아틀리에 안내
            </h2>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#faece5] text-[#c1664e] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">location_on</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-serif text-sm font-semibold text-[#394634]">온실 위치</p>
                    <button
                      onClick={onCopyAddress}
                      className="text-[11px] font-sans text-[#c1664e] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-xs">content_copy</span>
                      <span>주소 복사</span>
                    </button>
                  </div>
                  <p className="text-xs text-[#695e57] mt-0.5 leading-relaxed font-light">
                    서울특별시 성동구 연무장길 24, 1층 온실 아틀리에<br />
                    <span className="text-[11px] text-[#7d8b76]">
                      (성수역 3번 출구 도보 5분 거리 / 붉은 벽돌 온실 파사드)
                    </span>
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#e4eae0] text-[#364535] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">schedule</span>
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-[#394634]">온실 운영 시간</p>
                  <p className="text-xs text-[#695e57] mt-0.5 leading-relaxed font-light">
                    화요일 – 토요일 : 10:30 – 19:30 (생화 픽업 & 티타임)<br />
                    일요일 : 11:00 – 18:00 (100% 사전 예약 픽업제 운영)<br />
                    <span className="text-[11px] text-[#c1664e]">
                      * 매주 월요일은 식물 컨디셔닝을 위해 정기 휴무입니다.
                    </span>
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#f7ded0]/60 text-[#c1664e] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">directions_car</span>
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-[#394634]">방문 주차 & 드라이브 픽업</p>
                  <p className="text-xs text-[#695e57] mt-0.5 leading-relaxed font-light">
                    온실 매장 전면 전용 주차공간 2대 완비 (예약 픽업 시 30분 무료 주차)
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#faece5] text-[#c1664e] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">call</span>
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-[#394634]">직통 유선 안내</p>
                  <a
                    href="tel:02-543-8820"
                    className="text-xs text-[#394634] font-medium mt-0.5 hover:text-[#c1664e] transition-colors inline-block"
                  >
                    02-543-8820
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map visual */}
          <div className="lg:col-span-6">
            <div
              className="w-full h-80 rounded-3xl overflow-hidden shadow-md border-4 border-white relative flex items-end p-6 bg-cover bg-center"
              style={{ backgroundImage: `url(${MAP_IMAGE})` }}
            >
              <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-md border border-[#eedecf] max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c1664e] animate-pulse" />
                  <span className="font-serif text-xs text-[#394634] font-semibold">
                    꽃을 담다 온실 본점
                  </span>
                </div>
                <p className="text-[11px] text-[#695e57] font-light">
                  성수역 3번 출구 연무장길 안쪽 따스한 온실
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
