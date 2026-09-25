import React, { useState } from 'react';
import { Bouquet, ReservationData } from '../types';
import { RIBBON_OPTIONS } from '../data/mockData';

interface ReservationModalProps {
  bouquet: Bouquet | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ReservationData) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  bouquet,
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen || !bouquet) return null;

  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup');
  const [date, setDate] = useState('2026-09-26');
  const [timeSlot, setTimeSlot] = useState('14:00 - 15:00');
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [ribbonColor, setRibbonColor] = useState<'natural' | 'peach' | 'sage'>('natural');
  const [handwrittenLetter, setHandwrittenLetter] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  const timeSlots = [
    '11:00 - 12:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '16:00 - 17:00',
    '18:00 - 19:00',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientName.trim() || !recipientPhone.trim()) {
      alert('성함과 연락처를 입력해 주세요.');
      return;
    }

    const code = `KD-${Math.floor(100000 + Math.random() * 900000)}`;
    setReservationCode(code);

    const reservationData: ReservationData = {
      bouquetId: bouquet.id,
      bouquetName: bouquet.name,
      price: bouquet.price,
      deliveryType,
      date,
      timeSlot,
      recipientName,
      recipientPhone,
      recipientAddress: deliveryType === 'delivery' ? recipientAddress : undefined,
      ribbonColor,
      handwrittenLetter,
      specialRequests,
    };

    onSubmit(reservationData);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#faf6f0] rounded-3xl border border-[#eedecf] shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="p-5 bg-[#f5efe6] border-b border-[#eedecf] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg text-[#c1664e]">spa</span>
            <h3 className="font-serif text-base font-medium text-[#394634]">
              {isSuccess ? '꽃다발 예약 완료' : '계절 꽃다발 예약'}
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
          /* Confirmation Screen */
          <div className="p-6 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#e4eae0] text-[#364535] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#c1664e] font-semibold">
                Reservation Confirmed
              </span>
              <h4 className="font-serif text-xl text-[#394634] font-medium mt-1">
                따스한 정성을 담아 준비하겠습니다
              </h4>
              <p className="text-xs text-[#695e57] mt-1">
                예약 번호: <strong className="text-[#322a26] tracking-wider">{reservationCode}</strong>
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#eedecf] text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#695e57]">선택 상품:</span>
                <span className="font-medium text-[#322a26]">{bouquet.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#695e57]">수령 방식:</span>
                <span className="font-medium text-[#322a26]">
                  {deliveryType === 'pickup' ? '온실 매장 픽업' : '차량 퀵 배송'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#695e57]">일정:</span>
                <span className="font-medium text-[#322a26]">{date} ({timeSlot})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#695e57]">예약자:</span>
                <span className="font-medium text-[#322a26]">{recipientName} ({recipientPhone})</span>
              </div>
              {handwrittenLetter && (
                <div className="pt-2 border-t border-[#eedecf]">
                  <span className="text-[#695e57] block mb-1">손글씨 엽서 문구:</span>
                  <p className="italic text-[#322a26] bg-[#faf6f0] p-2 rounded-lg">“{handwrittenLetter}”</p>
                </div>
              )}
            </div>

            <p className="text-[11px] text-[#7d8b76]">
              * 당일 신선한 생화 수급을 위해 플로리스트가 작업 1시간 전 최종 컨디셔닝을 진행합니다.
            </p>

            <button
              onClick={handleClose}
              className="w-full py-3 rounded-full bg-[#394634] text-white hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider"
            >
              확인
            </button>
          </div>
        ) : (
          /* Reservation Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* Selected Bouquet Summary */}
            <div className="flex gap-4 p-3 bg-white rounded-2xl border border-[#eedecf]">
              <img
                src={bouquet.image}
                alt={bouquet.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-[10px] text-[#c1664e] font-semibold">{bouquet.tag || 'Boutique Collection'}</span>
                <h4 className="font-serif text-sm font-medium text-[#394634]">{bouquet.name}</h4>
                <p className="font-serif text-xs font-semibold text-[#c1664e] mt-1 tabular-nums">
                  ₩{bouquet.price.toLocaleString('ko-KR')}
                </p>
              </div>
            </div>

            {/* Delivery Type Segmented Control */}
            <div>
              <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                수령 방식 선택
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliveryType('pickup')}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-all ${
                    deliveryType === 'pickup'
                      ? 'bg-[#394634] text-white border-[#394634]'
                      : 'bg-white text-[#695e57] border-[#eedecf] hover:bg-[#faece5]'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">storefront</span>
                  <span>온실 매장 직접 픽업</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border flex items-center justify-center gap-1.5 transition-all ${
                    deliveryType === 'delivery'
                      ? 'bg-[#394634] text-white border-[#394634]'
                      : 'bg-white text-[#695e57] border-[#eedecf] hover:bg-[#faece5]'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">local_shipping</span>
                  <span>서울/경기 차량 퀵 배송</span>
                </button>
              </div>
            </div>

            {/* Date and Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                  희망 날짜
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                  희망 시간대
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
                >
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts}>{ts}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Ribbon Selection */}
            <div>
              <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                워시드 린넨 리본 컬러
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {RIBBON_OPTIONS.map((ribbon) => (
                  <button
                    key={ribbon.id}
                    type="button"
                    onClick={() => setRibbonColor(ribbon.id as any)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      ribbonColor === ribbon.id
                        ? 'border-[#c1664e] bg-[#faece5] font-semibold text-[#394634]'
                        : 'border-[#eedecf] bg-white text-[#695e57] hover:bg-[#faf6f0]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${
                        ribbon.id === 'natural' ? 'bg-[#d8c7b5]' : ribbon.id === 'peach' ? 'bg-[#f7ded0]' : 'bg-[#7d8b76]'
                      }`} />
                      <span>{ribbon.name.split(' ')[0]}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Handwritten Card Message */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-[#322a26]">
                  손글씨 캘리그라피 엽서 문구 (무료)
                </label>
                <span className="text-[10px] text-[#695e57]">{handwrittenLetter.length}/60자</span>
              </div>
              <textarea
                value={handwrittenLetter}
                maxLength={60}
                onChange={(e) => setHandwrittenLetter(e.target.value)}
                placeholder="마음을 담은 메시지를 적어주시면 온실 정원 엽서에 정성껏 손글씨로 적어 동봉해 드립니다."
                rows={2}
                className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] placeholder-[#695e57]/50 focus:outline-none focus:border-[#394634] resize-none"
              />
            </div>

            {/* Customer Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                  주문자/수령인 성함
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="예: 김민지"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                  연락처 (휴대폰 번호)
                </label>
                <input
                  type="tel"
                  value={recipientPhone}
                  onChange={(e) => setRecipientPhone(e.target.value)}
                  placeholder="예: 010-1234-5678"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
                  required
                />
              </div>
            </div>

            {/* Address if Delivery */}
            {deliveryType === 'delivery' && (
              <div>
                <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                  배송지 주소
                </label>
                <input
                  type="text"
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                  placeholder="도로명 주소 및 상세 주소"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
                  required
                />
                <p className="text-[10px] text-[#7d8b76] mt-1">
                  * 차량 퀵 배송비는 거리에 따라 착불 또는 사전 안내됩니다.
                </p>
              </div>
            )}

            {/* Special Request */}
            <div>
              <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                요청 사항 (선택)
              </label>
              <input
                type="text"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="예: 조금 더 살구빛이 많이 돌게 해주세요"
                className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#394634] text-white hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>₩{bouquet.price.toLocaleString('ko-KR')} 예약 접수하기</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
