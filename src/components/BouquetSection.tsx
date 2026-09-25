import React, { useState } from 'react';
import { Bouquet } from '../types';

interface BouquetSectionProps {
  bouquets: Bouquet[];
  onSelectBouquet: (bouquet: Bouquet) => void;
  onPreviewBouquet?: (bouquet: Bouquet) => void;
}

export const BouquetSection: React.FC<BouquetSectionProps> = ({
  bouquets,
  onSelectBouquet,
  onPreviewBouquet,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 컬렉션' },
    { id: 'romantic', label: '로맨틱 & 프로포즈' },
    { id: 'anniversary', label: '기념일' },
    { id: 'basket', label: '플라워 바스켓' },
  ];

  const filteredBouquets = activeCategory === 'all'
    ? bouquets
    : bouquets.filter((b) => b.category === activeCategory);

  return (
    <section className="w-full py-20 lg:py-28 bg-[#faf6f0]" id="bouquet-reservation">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c1664e] mb-2">
              <span className="w-5 h-px bg-[#c1664e]" />
              <span>Boutique Bouquet Collection</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#394634] font-normal">
              계절의 온도를 담은 꽃다발
            </h2>
          </div>
          <p className="font-serif text-xs sm:text-sm text-[#695e57] max-w-sm mt-2 md:mt-0 font-light">
            당일 아침 수확한 가장 신선한 최상급 생화로 준비합니다.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#394634] text-white shadow-sm'
                    : 'bg-white border border-[#eedecf] text-[#695e57] hover:bg-[#faece5] hover:text-[#c1664e]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Bouquet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBouquets.map((bouquet) => {
            return (
              <article
                key={bouquet.id}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#eedecf] shadow-sm hover:shadow-md transition-all"
              >
                {/* Image Frame */}
                <div 
                  className="relative w-full aspect-[4/5] overflow-hidden bg-[#f5efe6] cursor-pointer"
                  onClick={() => onPreviewBouquet ? onPreviewBouquet(bouquet) : onSelectBouquet(bouquet)}
                >
                  <img
                    src={bouquet.image}
                    alt={bouquet.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {bouquet.tag && (
                    <div
                      className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full backdrop-blur-sm text-[11px] font-semibold border ${
                        bouquet.tag === 'Best Seller'
                          ? 'bg-white/90 text-[#c1664e] border-[#eedecf]'
                          : bouquet.tag === 'Florist Pick'
                          ? 'bg-white/90 text-[#394634] border-[#eedecf]'
                          : bouquet.tag === 'Premium Gift'
                          ? 'bg-[#f7ded0] text-[#c1664e] border-[#c1664e]/20'
                          : 'bg-white/90 text-[#394634] border-[#eedecf]'
                      }`}
                    >
                      {bouquet.tag}
                    </div>
                  )}

                  {bouquet.isAvailableToday && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-[#394634]/80 backdrop-blur-sm text-white text-[10px]">
                      당일 제작 가능
                    </div>
                  )}
                </div>

                {/* Card Content & Action */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-serif text-base font-medium text-[#394634] group-hover:text-[#c1664e] transition-colors">
                        {bouquet.name}
                      </h3>
                      <span className="font-serif text-sm font-semibold text-[#c1664e] tabular-nums">
                        ₩{bouquet.price.toLocaleString('ko-KR')}
                      </span>
                    </div>
                    <p className="font-serif text-xs text-[#695e57] font-light mb-4">
                      {bouquet.subtitle}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => onSelectBouquet(bouquet)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#394634] text-[#f5efe6] hover:bg-[#4f6049] text-xs font-semibold tracking-wider text-center transition-colors shadow-sm cursor-pointer"
                    >
                      예약하기
                    </button>
                    {onPreviewBouquet && (
                      <button
                        onClick={() => onPreviewBouquet(bouquet)}
                        className="py-2.5 px-3 rounded-xl bg-white border border-[#eedecf] text-[#695e57] hover:bg-[#faece5] hover:text-[#c1664e] text-xs transition-colors cursor-pointer"
                        title="상세 보기"
                      >
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
