import React, { useState } from 'react';
import { Review } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: Review) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) return null;

  const [author, setAuthor] = useState('');
  const [occasion, setOccasion] = useState('프로포즈');
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');

  const occasions = [
    '프로포즈',
    '결혼기념일',
    '생신 바스켓',
    '온실 클래스',
    '부모님 선물',
    '생일 축하',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) {
      alert('성함과 소중한 후기 내용을 적어주세요.');
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      author: `${author.trim()} 님`,
      occasion,
      rating,
      content: `“${content.trim()}”`,
      date: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
    };

    onSubmit(newReview);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-md bg-[#faf6f0] rounded-3xl border border-[#eedecf] shadow-2xl overflow-hidden my-8">
        <div className="p-5 bg-[#f5efe6] border-b border-[#eedecf] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg text-[#c1664e]">rate_review</span>
            <h3 className="font-serif text-base font-medium text-[#394634]">
              다정한 온실 후기 작성
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#695e57] hover:text-[#322a26] hover:bg-[#eedecf]/50 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Star rating */}
          <div>
            <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
              만족도 별점
            </label>
            <div className="flex items-center gap-1 text-[#c1664e]">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 cursor-pointer transition-transform hover:scale-110"
                >
                  <span
                    className={`material-symbols-outlined text-2xl ${star <= rating ? 'material-symbols-filled' : ''}`}
                    style={{ fontVariationSettings: star <= rating ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {star <= rating ? 'star' : 'star_border'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Occasion */}
          <div>
            <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
              이용 목적 / 행사
            </label>
            <div className="grid grid-cols-3 gap-2">
              {occasions.map((occ) => (
                <button
                  key={occ}
                  type="button"
                  onClick={() => setOccasion(occ)}
                  className={`py-1.5 px-2 text-xs rounded-xl border transition-all ${
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

          {/* Author */}
          <div>
            <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
              성함 / 닉네임
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="예: 윤지수"
              className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
              후기 내용
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              placeholder="온실의 꽃과 함께했던 따스한 기억을 들려주세요."
              className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] placeholder-[#695e57]/50 focus:outline-none focus:border-[#394634] resize-none"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#394634] text-white hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider cursor-pointer"
            >
              후기 등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
