import React, { useState, useRef, useEffect } from 'react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroSectionProps {
  onReserveClick: () => void;
  onClassClick: () => void;
}

interface FlowerVideo {
  id: string;
  title: string;
  tag: string;
  youtubeId: string;
  desc: string;
}

const FLOWER_VIDEOS: FlowerVideo[] = [
  {
    id: 'vase-arrangement',
    title: '내추럴 화병 꽂이',
    tag: 'Vase Class',
    youtubeId: 'uI0ZQ--yuB4',
    desc: '계절 꽃과 허브를 활용한 프렌치 감성의 테이블 화병 꽂이',
  },
  {
    id: 'handtied-bouquet',
    title: '핸드타이드 부케',
    tag: 'Hand-Tied',
    youtubeId: 'lsGYwI0voBg',
    desc: '가든 로즈와 자연스러운 선율을 살린 핸드타이드 부케 제작',
  },
  {
    id: 'atelier-sketch',
    title: '온실 클래스 일상',
    tag: 'Atelier Vlog',
    youtubeId: 'K00edp3zCl4',
    desc: '성수동 온실 아틀리에에서 피어나는 따뜻한 꽃꽂이의 순간',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onReserveClick,
  onClassClick,
}) => {
  const [activeMedia, setActiveMedia] = useState<'ai-video' | 'youtube' | 'photo'>('ai-video');
  const [selectedVideo, setSelectedVideo] = useState<FlowerVideo>(FLOWER_VIDEOS[0]);
  const [isAiVideoPlaying, setIsAiVideoPlaying] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleAiVideoPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsAiVideoPlaying(true);
    } else {
      video.pause();
      setIsAiVideoPlaying(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f0e6] py-14 lg:py-20 border-b border-[#eedecf]">
      {/* Background floral atmospheric glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#f1dfce]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#e4ece0]/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faece5] border border-[#f7ded0] text-[#c1664e] text-xs font-semibold tracking-wider mb-5">
              <span className="material-symbols-outlined text-sm">filter_vintage</span>
              <span>PROVENCE GREENHOUSE ATELIER</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#322a26] font-light leading-[1.3] tracking-tight mb-4 text-balance">
              꽃으로 머무는<br />
              <span className="italic font-normal text-[#c1664e]">온실의 시간</span>
            </h1>

            <p className="font-serif text-base text-[#394634] font-medium mb-3">
              성수동 온실 아틀리에 ‘꽃을 담다’
            </p>

            <p className="font-serif text-sm text-[#695e57] font-light leading-relaxed mb-6 max-w-md">
              당신의 마음이,<br />
              가장 아름답게 피어나는 순간<br /><br />
              소중한 날에는 꽃을 담고,<br />
              전하고 싶은 마음까지 함께 담습니다.
            </p>

            {/* Media Selector Tabs */}
            <div className="mb-6 flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white/80 border border-[#eedecf] backdrop-blur-sm shadow-xs">
              <button
                onClick={() => setActiveMedia('ai-video')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif transition-all cursor-pointer ${
                  activeMedia === 'ai-video'
                    ? 'bg-[#394634] text-white shadow-xs font-medium'
                    : 'text-[#695e57] hover:text-[#322a26]'
                }`}
              >
                <span className="material-symbols-outlined text-sm text-[#f1bf70]">auto_awesome</span>
                <span>AI 꽃꽂이 영상</span>
              </button>
              <button
                onClick={() => setActiveMedia('youtube')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif transition-all cursor-pointer ${
                  activeMedia === 'youtube'
                    ? 'bg-[#394634] text-white shadow-xs font-medium'
                    : 'text-[#695e57] hover:text-[#322a26]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">play_circle</span>
                <span>클래스 튜토리얼</span>
              </button>
              <button
                onClick={() => setActiveMedia('photo')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif transition-all cursor-pointer ${
                  activeMedia === 'photo'
                    ? 'bg-[#394634] text-white shadow-xs font-medium'
                    : 'text-[#695e57] hover:text-[#322a26]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">photo_camera</span>
                <span>온실 화보</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onReserveClick}
                className="px-7 py-3 rounded-full bg-[#394634] text-[#f5efe6] hover:bg-[#4f6049] transition-all text-xs font-semibold tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">spa</span>
                <span>꽃다발 예약</span>
              </button>
              <button
                onClick={onClassClick}
                className="px-7 py-3 rounded-full bg-white border border-[#eedecf] text-[#322a26] hover:bg-[#faece5] transition-all text-xs font-semibold tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">local_florist</span>
                <span>온실 클래스 신청</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-[#eedecf] w-full flex items-center gap-6 text-xs text-[#695e57] font-light">
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#c1664e]">wb_sunny</span>
                <span>당일 아침 생화</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-[#eedecf]" />
              <span className="inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#394634]">eco</span>
                <span>친환경 린넨 패키징</span>
              </span>
            </div>
          </div>

          {/* Right Column: AI 3-second Flower Arranging Video / Media Showcase */}
          <div className="lg:col-span-7 relative flex flex-col gap-3">
            {/* Visual Frame */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#1e1917] group">
              {activeMedia === 'ai-video' ? (
                /* AI Flower Arranging Video Player - Pure & Clean */
                <div className="relative w-full h-full bg-[#201a17]">
                  <video
                    ref={videoRef}
                    src="/ai_flower_arranging_3s.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] shadow-sm">
                      <span className="material-symbols-outlined text-sm text-[#f1bf70]">auto_awesome</span>
                      <span className="font-serif font-medium">AI 꽃꽂이 시연 영상</span>
                    </div>
                  </div>
                </div>
              ) : activeMedia === 'youtube' ? (
                /* YouTube Video Player */
                <div className="relative w-full h-full">
                  <iframe
                    key={selectedVideo.youtubeId}
                    src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${selectedVideo.youtubeId}&controls=1&modestbranding=1&rel=0&playsinline=1`}
                    title="Florist Flower Arranging Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />

                  {/* Top Floating Badge */}
                  <div className="pointer-events-none absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-serif font-medium">플로리스트 실전 튜토리얼</span>
                  </div>
                </div>
              ) : (
                /* Still Photo View */
                <div className="relative w-full h-full">
                  <img
                    src={HERO_IMAGE}
                    alt="Provence Sunlit Greenhouse Atelier"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#eedecf] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-[#c1664e] text-lg">spa</span>
                      <span className="font-serif text-xs text-[#394634] font-medium">
                        성수동 온실 본점 · 햇살 가득한 플로럴 스튜디오
                      </span>
                    </div>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#c1664e] font-semibold hidden sm:inline-block">
                      Atelier Open
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Card for AI Video Info / YouTube Playlist */}
            {activeMedia === 'ai-video' ? (
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#eedecf] shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#faece5] border border-[#f7ded0] flex items-center justify-center text-[#c1664e] shrink-0">
                    <span className="material-symbols-outlined text-lg">local_florist</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-semibold text-[#322a26] mb-0.5">
                      성수동 온실 아틀리에 · AI 꽃꽂이 시연 영상
                    </h4>
                    <p className="text-[11px] text-[#695e57] font-light leading-snug">
                      따스한 햇살 속 꽃송이를 다듬고 화병에 꽂아 넣는 찰나의 순간을 시네마틱 모션으로 감상해보세요.
                    </p>
                  </div>
                </div>

                <button
                  onClick={toggleAiVideoPlay}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f5efe6] hover:bg-[#faece5] text-[#394634] hover:text-[#c1664e] transition-colors text-xs font-serif shrink-0 cursor-pointer border border-[#eedecf]"
                >
                  <span className="material-symbols-outlined text-sm">
                    {isAiVideoPlaying ? 'pause' : 'replay'}
                  </span>
                  <span>{isAiVideoPlaying ? '일시정지' : '다시 재생'}</span>
                </button>
              </div>
            ) : activeMedia === 'youtube' ? (
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#eedecf] shadow-sm flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#394634] font-serif font-medium">
                    <span className="material-symbols-outlined text-sm text-[#c1664e]">playlist_play</span>
                    <span>클래스 튜토리얼 선택:</span>
                  </div>
                  <span className="text-[10px] text-[#695e57]">
                    영상 내 볼륨 버튼으로 소리를 켜실 수 있습니다
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {FLOWER_VIDEOS.map((vid) => {
                    const isSelected = selectedVideo.id === vid.id;
                    return (
                      <button
                        key={vid.id}
                        onClick={() => setSelectedVideo(vid)}
                        className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#faece5]/70 border-[#c1664e] shadow-xs'
                            : 'bg-[#faf6f0] border-[#eedecf] hover:border-[#c1664e]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-sans font-medium ${
                            isSelected ? 'bg-[#c1664e] text-white' : 'bg-white text-[#695e57]'
                          }`}>
                            {vid.tag}
                          </span>
                          {isSelected && (
                            <span className="material-symbols-outlined text-xs text-[#c1664e]">
                              equalizer
                            </span>
                          )}
                        </div>
                        <span className={`font-serif text-xs font-medium leading-tight ${
                          isSelected ? 'text-[#c1664e]' : 'text-[#322a26]'
                        }`}>
                          {vid.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
