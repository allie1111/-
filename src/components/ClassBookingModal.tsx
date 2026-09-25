import React, { useState } from 'react';
import { CLASS_SESSIONS, TEA_OPTIONS, CLASS_IMAGE_1 } from '../data/mockData';
import { ClassBookingData } from '../types';

interface ClassBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ClassBookingData) => void;
}

export const ClassBookingModal: React.FC<ClassBookingModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  if (!isOpen) return null;

  const [selectedSessionId, setSelectedSessionId] = useState(CLASS_SESSIONS[0].id);
  const [participants, setParticipants] = useState(1);
  const [teaChoice, setTeaChoice] = useState(TEA_OPTIONS[0]);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const currentSession = CLASS_SESSIONS.find((s) => s.id === selectedSessionId) || CLASS_SESSIONS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantPhone.trim()) {
      alert('성함과 연락처를 입력해 주세요.');
      return;
    }

    const code = `CLS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingCode(code);

    const bookingData: ClassBookingData = {
      sessionId: currentSession.id,
      sessionTitle: currentSession.title,
      date: currentSession.date,
      time: currentSession.time,
      participants,
      teaChoice,
      applicantName,
      applicantPhone,
      notes,
    };

    onSubmit(bookingData);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const totalPrice = currentSession.price * participants;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#faf6f0] rounded-3xl border border-[#eedecf] shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="p-5 bg-[#f5efe6] border-b border-[#eedecf] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg text-[#c1664e]">local_florist</span>
            <h3 className="font-serif text-base font-medium text-[#394634]">
              {isSuccess ? '온실 클래스 신청 완료' : '온실 플라워 클래스 신청'}
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
            <div className="w-16 h-16 rounded-full bg-[#e4eae0] text-[#364535] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">celebration</span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#c1664e] font-semibold">
                Class Reserved
              </span>
              <h4 className="font-serif text-xl text-[#394634] font-medium mt-1">
                온실에서 뵙겠습니다
              </h4>
              <p className="text-xs text-[#695e57] mt-1">
                신청 번호: <strong className="text-[#322a26] tracking-wider">{bookingCode}</strong>
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#eedecf] text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#695e57]">클래스:</span>
                <span className="font-medium text-[#322a26]">{currentSession.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#695e57]">일정:</span>
                <span className="font-medium text-[#322a26]">{currentSession.date} · {currentSession.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#695e57]">인원:</span>
                <span className="font-medium text-[#322a26]">{participants}인</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#695e57]">선택 티타임:</span>
                <span className="font-medium text-[#322a26]">{teaChoice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#695e57]">신청자:</span>
                <span className="font-medium text-[#322a26]">{applicantName} ({applicantPhone})</span>
              </div>
            </div>

            <p className="text-[11px] text-[#7d8b76]">
              * 수업 시작 10분 전까지 성수동 온실 1층으로 방문해 주시면 웰컴 티와 마카롱이 준비됩니다.
            </p>

            <button
              onClick={handleClose}
              className="w-full py-3 rounded-full bg-[#394634] text-white hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider"
            >
              확인
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* Atelier Image Preview */}
            <div className="relative h-32 rounded-2xl overflow-hidden border border-[#eedecf]">
              <img
                src={CLASS_IMAGE_1}
                alt="클래스 미리보기"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                <div className="text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#faece5]">Private Atelier Workshop</span>
                  <p className="font-serif text-xs font-medium">유리온실에서 피어나는 나만의 플라워 워크숍</p>
                </div>
              </div>
            </div>

            {/* Select Class Session */}
            <div>
              <label className="block text-xs font-semibold text-[#322a26] mb-2">
                워크숍 프로그램 선택
              </label>
              <div className="space-y-2">
                {CLASS_SESSIONS.map((sess) => {
                  const isSelected = selectedSessionId === sess.id;
                  return (
                    <div
                      key={sess.id}
                      onClick={() => setSelectedSessionId(sess.id)}
                      className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#c1664e] bg-[#faece5] shadow-sm'
                          : 'border-[#eedecf] bg-white hover:bg-[#faf6f0]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif text-xs font-semibold text-[#394634]">
                          {sess.title}
                        </span>
                        <span className="text-[11px] font-semibold text-[#c1664e] tabular-nums">
                          ₩{sess.price.toLocaleString('ko-KR')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#695e57]">
                        <span>{sess.date} ({sess.time})</span>
                        <span className="text-[#394634] font-medium">잔여 {sess.remainingSeats}석 / {sess.totalSeats}석</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Participants */}
            <div>
              <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                신청 인원 (최대 4인 정예)
              </label>
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setParticipants(num)}
                    className={`flex-1 py-2 text-xs rounded-xl font-medium border transition-all ${
                      participants === num
                        ? 'bg-[#394634] text-white border-[#394634]'
                        : 'bg-white text-[#695e57] border-[#eedecf] hover:bg-[#faece5]'
                    }`}
                  >
                    {num}인
                  </button>
                ))}
              </div>
            </div>

            {/* Tea Selection */}
            <div>
              <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                웰컴 유기농 허브티 선택
              </label>
              <select
                value={teaChoice}
                onChange={(e) => setTeaChoice(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
              >
                {TEA_OPTIONS.map((tea) => (
                  <option key={tea} value={tea}>{tea}</option>
                ))}
              </select>
            </div>

            {/* Applicant Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                  신청자 성함
                </label>
                <input
                  type="text"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="예: 이소연"
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
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  placeholder="예: 010-9876-5432"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
                  required
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-semibold text-[#322a26] mb-1.5">
                기타 문의사항 (선택)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="예: 플라워 클래스가 처음인데 난이도가 어떤가요?"
                className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
              />
            </div>

            {/* Total and Submit */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs text-[#695e57] mb-2 px-1">
                <span>총 신청 금액</span>
                <span className="font-serif font-bold text-sm text-[#c1664e] tabular-nums">
                  ₩{totalPrice.toLocaleString('ko-KR')}
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#394634] text-white hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>클래스 예약 신청하기</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
