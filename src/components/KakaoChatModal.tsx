import React, { useState } from 'react';

interface KakaoChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToReservation: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export const KakaoChatModal: React.FC<KakaoChatModalProps> = ({
  isOpen,
  onClose,
  onNavigateToReservation,
}) => {
  if (!isOpen) return null;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: '안녕하세요! 성수동 온실 아틀리에 ‘꽃을 담다’ 플로리스트입니다. 🌿 오늘 어떤 꽃을 찾으시나요?',
      time: '오후 2:34',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const quickPrompts = [
    '오늘 바로 픽업 가능한 꽃다발이 있나요?',
    '기념일 꽃다발 추천해 주세요.',
    '원데이 클래스 신청 방법이 궁금해요.',
    '드라이브 픽업 주차는 어디에 하나요?',
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      time: '방금',
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');

    setTimeout(() => {
      let reply = '말씀해 주셔서 감사합니다! 플로리스트가 꼼꼼히 확인하여 최상의 제철 생화로 준비해 드리겠습니다. 편하게 예약하기 버튼을 통해 일정과 옵션을 선택해 보세요.';
      if (text.includes('오늘') || text.includes('픽업')) {
        reply = '네! 오늘 아침 수확한 피치 라넌큘러스 부케와 스위트피 부케가 온실 쇼케이스에 싱싱하게 준비되어 있어 바로 예약 픽업이 가능합니다. 온실 1층으로 방문해 주시면 정성껏 포장해 드립니다. 🌸';
      } else if (text.includes('기념일') || text.includes('추천')) {
        reply = '기념일에는 가장 반응이 뜨거운 ‘피치 라넌큘러스 온실 부케’와 ‘온실 블룸 햄퍼 바스켓’을 가장 추천드립니다! 맞춤 손글씨 레터 카드도 무료로 함께 적어드려요.';
      } else if (text.includes('클래스')) {
        reply = '클래스는 회당 최대 4인으로 진행되며, 웰컴 유기농 허브티와 마카롱이 제공됩니다. 상단 메뉴의 [온실 플라워 클래스]에서 원하시는 요일과 시간을 선택하여 신청하실 수 있어요!';
      } else if (text.includes('주차')) {
        reply = '온실 매장 전면에 전용 주차공간 2대가 완비되어 있습니다. 예약 픽업 시 30분 무료 주차 및 차량 드라이브스루 픽업도 편리하게 이용하실 수 있습니다.';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: reply,
          time: '방금',
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-[#faf6f0] rounded-3xl border border-[#eedecf] shadow-2xl overflow-hidden flex flex-col h-[580px]">
        {/* Kakao Header */}
        <div className="p-4 bg-[#fced3f] text-[#3c1e1e] flex items-center justify-between border-b border-[#e5d535]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#394634] text-white flex items-center justify-center font-serif text-sm">
              꽃
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-semibold text-xs text-[#3c1e1e]">꽃을 담다 온실 아틀리에</h4>
                <span className="w-2 h-2 rounded-full bg-[#25b546]" />
              </div>
              <p className="text-[10px] text-[#3c1e1e]/70">성수동 1:1 플로리스트 실시간 상담</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-black/10 transition-colors text-[#3c1e1e]"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Chat message history */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f8f4ec]">
          {messages.map((m) => {
            const isBot = m.sender === 'bot';
            return (
              <div
                key={m.id}
                className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${
                    isBot
                      ? 'bg-white text-[#322a26] border border-[#eedecf] rounded-tl-sm'
                      : 'bg-[#fee500] text-[#3c1e1e] rounded-tr-sm font-medium shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-[#695e57]/60 mt-1 px-1">{m.time}</span>
              </div>
            );
          })}
        </div>

        {/* Quick prompt suggestions */}
        <div className="p-2 bg-white border-t border-[#eedecf] overflow-x-auto flex gap-1.5 no-scrollbar">
          {quickPrompts.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-[#f5efe6] text-[#695e57] hover:bg-[#faece5] hover:text-[#c1664e] transition-colors border border-[#eedecf]"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(inputText);
          }}
          className="p-3 bg-[#faf6f0] border-t border-[#eedecf] flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="상담하실 내용을 입력하세요..."
            className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-[#eedecf] text-[#322a26] focus:outline-none focus:border-[#394634]"
          />
          <button
            type="submit"
            className="p-2 rounded-xl bg-[#c1664e] text-white hover:bg-[#9c4832] transition-colors flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </form>

        {/* Bottom CTA to order directly */}
        <div className="p-2 bg-[#f5efe6] text-center border-t border-[#eedecf]">
          <button
            onClick={() => {
              onClose();
              onNavigateToReservation();
            }}
            className="text-[11px] text-[#394634] font-semibold hover:text-[#c1664e] transition-colors"
          >
            꽃다발 컬렉션 바로 둘러보기 &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
