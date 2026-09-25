import React from 'react';
import { ReservationData, ClassBookingData } from '../types';

interface OrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  bouquetReservations: ReservationData[];
  classBookings: ClassBookingData[];
}

export const OrdersModal: React.FC<OrdersModalProps> = ({
  isOpen,
  onClose,
  bouquetReservations,
  classBookings,
}) => {
  if (!isOpen) return null;

  const hasItems = bouquetReservations.length > 0 || classBookings.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#faf6f0] rounded-3xl border border-[#eedecf] shadow-2xl overflow-hidden my-8">
        <div className="p-5 bg-[#f5efe6] border-b border-[#eedecf] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg text-[#394634]">receipt_long</span>
            <h3 className="font-serif text-base font-medium text-[#394634]">
              나의 온실 예약 내역
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#695e57] hover:text-[#322a26] hover:bg-[#eedecf]/50 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {!hasItems ? (
            <div className="py-12 text-center text-[#695e57] space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#eedecf]">local_florist</span>
              <p className="text-xs">현재 진행 중인 예약 내역이 없습니다.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Bouquet Reservations */}
              {bouquetReservations.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#394634] block">
                    꽃다발 예약 ({bouquetReservations.length}건)
                  </span>
                  {bouquetReservations.map((res, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white border border-[#eedecf] text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-semibold text-[#394634]">{res.bouquetName}</span>
                        <span className="font-semibold text-[#c1664e] tabular-nums">
                          ₩{res.price.toLocaleString('ko-KR')}
                        </span>
                      </div>
                      <p className="text-[#695e57]">
                        일정: {res.date} ({res.timeSlot})
                      </p>
                      <p className="text-[#695e57]">
                        수령: {res.deliveryType === 'pickup' ? '매장 방문 픽업' : `퀵 배송 (${res.recipientAddress || ''})`}
                      </p>
                      <p className="text-[#695e57]">
                        예약자: {res.recipientName} ({res.recipientPhone})
                      </p>
                      {res.handwrittenLetter && (
                        <p className="italic text-[#322a26] bg-[#faf6f0] p-2 rounded-lg mt-1">
                          손글씨 엽서: “{res.handwrittenLetter}”
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Class Bookings */}
              {classBookings.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#eedecf]">
                  <span className="text-xs font-semibold text-[#394634] block">
                    클래스 예약 ({classBookings.length}건)
                  </span>
                  {classBookings.map((cls, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white border border-[#eedecf] text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-semibold text-[#394634]">{cls.sessionTitle}</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#e4eae0] text-[#364535] text-[10px]">
                          {cls.participants}인 참석
                        </span>
                      </div>
                      <p className="text-[#695e57]">일정: {cls.date} · {cls.time}</p>
                      <p className="text-[#695e57]">티 페어링: {cls.teaChoice}</p>
                      <p className="text-[#695e57]">신청자: {cls.applicantName} ({cls.applicantPhone})</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-[#394634] text-white hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
