import React from 'react';
import { Bouquet } from '../types';

interface BouquetPreviewModalProps {
  bouquet: Bouquet | null;
  isOpen: boolean;
  onClose: () => void;
  onReserve: (bouquet: Bouquet) => void;
}

export const BouquetPreviewModal: React.FC<BouquetPreviewModalProps> = ({
  bouquet,
  isOpen,
  onClose,
  onReserve,
}) => {
  if (!isOpen || !bouquet) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#faf6f0] rounded-3xl border border-[#eedecf] shadow-2xl overflow-hidden my-8">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#f5efe6]">
          <img
            src={bouquet.image}
            alt={bouquet.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm text-[#322a26] hover:bg-white transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
          {bouquet.tag && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#c1664e] border border-[#eedecf]">
              {bouquet.tag}
            </div>
          )}
        </div>

        <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto">
          <div className="flex items-baseline justify-between border-b border-[#eedecf] pb-3">
            <div>
              <h3 className="font-serif text-xl font-medium text-[#394634]">
                {bouquet.name}
              </h3>
              <p className="text-xs text-[#695e57] mt-0.5">{bouquet.subtitle}</p>
            </div>
            <span className="font-serif text-lg font-bold text-[#c1664e] tabular-nums">
              ₩{bouquet.price.toLocaleString('ko-KR')}
            </span>
          </div>

          <p className="text-xs text-[#322a26] leading-relaxed font-serif">
            {bouquet.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white border border-[#eedecf]">
              <span className="text-[#695e57] block mb-1 font-semibold">주요 생화 구성</span>
              <div className="flex flex-wrap gap-1">
                {bouquet.flowers.map((fl, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-[#f5efe6] text-[11px] text-[#394634]"
                  >
                    {fl}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#eedecf] space-y-1.5">
              <div>
                <span className="text-[#695e57] font-semibold">사이즈: </span>
                <span className="text-[#322a26]">{bouquet.dimensions || '약 35cm x 45cm'}</span>
              </div>
              <div>
                <span className="text-[#695e57] font-semibold">향기 노트: </span>
                <span className="text-[#322a26]">{bouquet.scentProfile || '은은한 가든 플로럴'}</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              onClick={() => {
                onClose();
                onReserve(bouquet);
              }}
              className="flex-1 py-3 rounded-full bg-[#394634] text-white hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-base">spa</span>
              <span>이 꽃다발로 예약하기</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-full bg-white border border-[#eedecf] text-[#695e57] hover:bg-[#faf6f0] text-xs font-medium cursor-pointer"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
