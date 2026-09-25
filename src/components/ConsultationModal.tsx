import React, { useState } from 'react';
import { ConsultationInquiry } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (inquiry: ConsultationInquiry) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) return null;

  const [occasion, setOccasion] = useState('프로포즈 & 고백');
  const [colorPalette, setColorPalette] = useState('살구빛 피치 & 크림');
  const [budgetRange, setBudgetRange] = useState('8만원 - 12만원');
  const [notes, setNotes] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const occasions = [
    '프로포즈 & 고백',
    '결혼기념일 & 생일',
    '부모님 생신 & 환갑',
    '승진 & 개업 축하',
    '셀프 힐링 & 홈 스타일링',
    '추모 & 위로',
  ];

  const palettes = [
    { title: '살구빛 피치 & 크림', desc: '온실 아틀리에 시그니처, 따뜻하고 로맨틱한 파스텔' },
    { title: '프렌치 화이트 & 싱그런 세이지', desc: '깨끗하고 우아한 정원 감성의 청초한 조화' },
    { title: '앤틱 로즈 & 빈티지 모브', desc: '깊이감 있고 클래식한 유럽 정원 분위기' },
    { title: '선샤인 버터옐로우 & 탠저린', desc: '밝고 경쾌한 비타민 활력을 전하는 색채' },
  ];

  const budgets = [
    '5만원 - 8만원 (미니멀 가든 핸드타이드)',
    '8만원 - 12만원 (온실 시그니처 부케)',
    '12만원 - 18만원 (풍성한 라탄 바스켓/대형 부케)',
    '20만원 이상 (스페셜 온실 커스텀 스타일링)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim()) {
      alert('성함과 연락처를 입력해 주세요.');
      return;
    }

    const inquiry: ConsultationInquiry = {
      occasion,
      colorPalette,
      budgetRange,
      notes,
      contactName,
      contactPhone,
    };

    onSubmit(inquiry);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#faf6f0] rounded-3xl border border-[#eedecf] shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-5 bg-[#f5efe6] border-b border-[#eedecf] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg text-[#c1664e]">chat</span>
            <h3 className="font-serif text-base font-medium text-[#394634]">
              {isSuccess ? '상담 요청 접수 완료' : '온실 상담소 · 1:1 플로럴 다이얼로그'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1 rounded-full text-[#695e57] hover:text-[#322a26] hover:bg-[#eedecf]/50 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {isSuccess ? (
          <div className="p-6 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#faece5] text-[#c1664e] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">mark_email_read</span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#c1664e] font-semibold">
                Inquiry Received
              </span>
              <h4 className="font-serif text-xl text-[#394634] font-medium mt-1">
                플로리스트가 곧 맞춤 안내를 전합니다
              </h4>
              <p className="text-xs text-[#695e57] mt-1">
                영업 시간(10:30~19:30) 내에 문자로 제철 추천 생화 시안과 견적을 전해드립니다.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#eedecf] text-left text-xs space-y-1.5">
              <p><strong className="text-[#322a26]">목적:</strong> {occasion}</p>
              <p><strong className="text-[#322a26]">희망 색감:</strong> {colorPalette}</p>
              <p><strong className="text-[#322a26]">예산대:</strong> {budgetRange}</p>
              <p><strong className="text-[#322a26]">성함:</strong> {contactName} ({contactPhone})</p>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 rounded-full bg-[#394634] text-white hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider"
            >
              확인
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            <p className="text-xs text-[#695e57] leading-relaxed">
              선물하시는 상황과 받으시는 분의 취향을 편안하게 적어주시면, 당일 가장 상태가 좋은 제철 꽃으로 구성해 드립니다.
            </p>

            {/* Occasion */}
            <div>
              <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                꽃을 선물하시는 상황
              </label>
              <div className="grid grid-cols-2 gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border text-left transition-all ${
                      occasion === occ
                        ? 'bg-[#394634] text-white border-[#394634]'
                        : 'bg-white text-[#695e57] border-[#eedecf] hover:bg-[#faece5]'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                희망하시는 온실 무드 & 색감
              </label>
              <div className="space-y-2">
                {palettes.map((pal) => (
                  <div
                    key={pal.title}
                    onClick={() => setColorPalette(pal.title)}
                    className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                      colorPalette === pal.title
                        ? 'border-[#c1664e] bg-[#faece5]'
                        : 'border-[#eedecf] bg-white hover:bg-[#faf6f0]'
                    }`}
                  >
                    <p className="font-serif text-xs font-semibold text-[#394634]">{pal.title}</p>
                    <p className="text-[11px] text-[#695e57]">{pal.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                희망 예산 범위
              </label>
              <select
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
              >
                {budgets.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                전하고 싶은 특별한 이야기 / 취향
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="예: 3주년 기념일이고 여자친구가 피치 로즈와 자연스러운 들꽃 느낌을 좋아해요."
                className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] placeholder-[#695e57]/50 focus:outline-none focus:border-[#394634] resize-none"
              />
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                  성함
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="예: 박정우"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                  연락처 (문자 상담용)
                </label>
                <input
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="예: 010-3333-7777"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#c1664e] text-white hover:bg-[#9c4832] transition-all text-xs font-semibold tracking-wider shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">send</span>
                <span>맞춤 상담 신청하기</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
