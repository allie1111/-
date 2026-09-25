import React, { useState } from 'react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenQuickReservation: () => void;
  reservationsCount: number;
  onOpenMyOrders: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation,
  onOpenQuickReservation,
  reservationsCount,
  onOpenMyOrders,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Ribbon */}
      <aside
        aria-label="Announcement"
        className="w-full bg-[#f2e7db] text-[#695e57] py-2 px-4 border-b border-[#eedecf] text-center text-xs tracking-wider flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-sm text-[#c1664e]">wb_sunny</span>
        <span>따사로운 햇살이 가득한 프로방스풍 온실 아틀리에 — 매일 아침 전하는 제철 생화와 허브 티타임</span>
      </aside>

      {/* Main Navigation Header */}
      <header className="sticky top-0 left-0 w-full z-40 bg-[#faf6f0]/90 backdrop-blur-md border-b border-[#eedecf]/80 transition-all">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-full bg-[#faece5] border border-[#eedecf] flex items-center justify-center text-[#c1664e] shadow-sm transition-transform group-hover:rotate-12">
              <span className="material-symbols-outlined text-xl">potted_plant</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl tracking-tight text-[#394634] font-medium">꽃을 담다</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#7d8b76] font-semibold">
                L'Atelier de Fleurs & Jardin
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-9 text-sm text-[#695e57] font-medium tracking-wide">
            <button
              onClick={() => scrollTo('brand-story')}
              className="hover:text-[#c1664e] transition-colors py-1 cursor-pointer"
            >
              온실 스토리
            </button>
            <button
              onClick={() => scrollTo('bouquet-reservation')}
              className="hover:text-[#c1664e] transition-colors py-1 cursor-pointer"
            >
              계절 꽃다발
            </button>
            <button
              onClick={() => scrollTo('atelier-classes')}
              className="hover:text-[#c1664e] transition-colors py-1 cursor-pointer"
            >
              온실 플라워 클래스
            </button>
            <button
              onClick={() => scrollTo('client-stories')}
              className="hover:text-[#c1664e] transition-colors py-1 cursor-pointer"
            >
              후기
            </button>
            <button
              onClick={() => scrollTo('visit-boutique')}
              className="hover:text-[#c1664e] transition-colors py-1 cursor-pointer"
            >
              오시는 길
            </button>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            {reservationsCount > 0 && (
              <button
                onClick={onOpenMyOrders}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#faece5] border border-[#f7ded0] text-[#c1664e] text-xs font-semibold hover:bg-[#f7ded0] transition-colors"
                title="내 예약 내역"
              >
                <span className="material-symbols-outlined text-sm">receipt_long</span>
                <span className="hidden sm:inline">예약 내역</span>
                <span className="w-4 h-4 rounded-full bg-[#c1664e] text-white text-[10px] flex items-center justify-center font-bold">
                  {reservationsCount}
                </span>
              </button>
            )}

            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#c1664e]/40 text-[#c1664e] hover:bg-[#c1664e] hover:text-white transition-all text-xs font-semibold tracking-wider cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              <span>온실 상담소</span>
            </button>

            <button
              onClick={onOpenQuickReservation}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#394634] text-[#fbf8f5] hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider shadow-sm cursor-pointer"
            >
              오늘의 꽃 예약
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#394634] hover:bg-[#f5efe6] transition-colors"
              aria-label="메뉴 열기"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#faf6f0] border-b border-[#eedecf] px-6 py-4 shadow-lg animate-fade-in flex flex-col gap-3">
            <button
              onClick={() => scrollTo('brand-story')}
              className="text-left py-2 text-sm font-medium text-[#322a26] hover:text-[#c1664e] border-b border-[#eedecf]/50"
            >
              온실 스토리
            </button>
            <button
              onClick={() => scrollTo('bouquet-reservation')}
              className="text-left py-2 text-sm font-medium text-[#322a26] hover:text-[#c1664e] border-b border-[#eedecf]/50"
            >
              계절 꽃다발
            </button>
            <button
              onClick={() => scrollTo('atelier-classes')}
              className="text-left py-2 text-sm font-medium text-[#322a26] hover:text-[#c1664e] border-b border-[#eedecf]/50"
            >
              온실 플라워 클래스
            </button>
            <button
              onClick={() => scrollTo('client-stories')}
              className="text-left py-2 text-sm font-medium text-[#322a26] hover:text-[#c1664e] border-b border-[#eedecf]/50"
            >
              후기
            </button>
            <button
              onClick={() => scrollTo('visit-boutique')}
              className="text-left py-2 text-sm font-medium text-[#322a26] hover:text-[#c1664e] border-b border-[#eedecf]/50"
            >
              오시는 길
            </button>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 rounded-full border border-[#c1664e]/40 text-[#c1664e] text-xs font-semibold text-center flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>온실 상담소</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
