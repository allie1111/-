import React from 'react';

interface FlowerCareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FlowerCareModal: React.FC<FlowerCareModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const tips = [
    {
      icon: 'content_cut',
      title: '줄기 끝 45도 사선 컷팅',
      desc: '꽃병에 꽂기 전, 줄기 끝을 흐르는 물속에서 사선(45도)으로 1~2cm 잘라주세요. 도관이 짓눌리지 않고 물을 힘차게 빨아들입니다.',
    },
    {
      icon: 'water_drop',
      title: '매일 시원한 물 교체 & 화병 세척',
      desc: '줄기가 담긴 물은 매일 아침 시원한 수돗물로 갈아주시고, 화병 내부를 깨끗이 헹궈 박테리아 증식을 막아주세요.',
    },
    {
      icon: 'wb_sunny',
      title: '직사광선 & 히터 바람 피하기',
      desc: '햇볕이 바로 내리쬐는 창가나 에어컨, 난방기 바람 근처는 꽃잎의 수분을 급격히 증발시킵니다. 서늘하고 통풍이 잘되는 반음지가 최적입니다.',
    },
    {
      icon: 'science',
      title: '생화 전용 수명 연장제 활용',
      desc: '꽃을 담다에서 동봉해 드린 크리잘(Chrysal) 보존제를 물 500ml에 희석해 사용하시면 꽃의 수명이 최대 2배까지 지속됩니다.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#faf6f0] rounded-3xl border border-[#eedecf] shadow-2xl overflow-hidden my-8">
        <div className="p-5 bg-[#f5efe6] border-b border-[#eedecf] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg text-[#394634]">spa</span>
            <h3 className="font-serif text-base font-medium text-[#394634]">
              온실 생화 케어 가이드
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
          <p className="text-xs text-[#695e57] leading-relaxed">
            ‘꽃을 담다’의 모든 생화는 농장에서 갓 수확한 싱싱한 최상급 절화입니다. 작은 정성을 더해 꽃과 함께하는 시간을 더 길고 아름답게 누려보세요.
          </p>

          <div className="space-y-3">
            {tips.map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-[#eedecf] flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-[#faece5] text-[#c1664e] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-base">{t.icon}</span>
                </div>
                <div>
                  <h4 className="font-serif text-xs font-semibold text-[#394634] mb-1">
                    {t.title}
                  </h4>
                  <p className="text-[11px] text-[#695e57] leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#e4eae0]/70 border border-[#7d8b76]/30">
            <p className="font-serif text-xs text-[#364535] font-medium mb-1">
              플로리스트의 다정한 한마디
            </p>
            <p className="text-[11px] text-[#364535]/80 leading-relaxed font-light">
              꽃잎이 살짝 고개를 숙였을 땐 물속에서 줄기를 한번 더 과감히 2cm 자르고 얼음 한 조각을 물에 띄워주시면 몇 시간 후 다시 팽팽하게 살아납니다.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-[#394634] text-white hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
