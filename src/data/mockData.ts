import { Bouquet, Review, ClassSession } from '../types';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida/AEtjO1XY7XwNYpVwn4KLggKJkvUUKjH2ca2mCufvPc4nyBp4K-LUynodJwEARymT6CRC1vop2MqZDd1vSu4iYkUgqKOtwBXvH-mest3-ZnKTx8J45-2IprSiCY4ydJzdZW2QHQJ3acGQ-4W1dqV7KzmSK_j6q5MVw4F3ttLCXJdvje-iBLBmYc62aqfaRyX8lz31KtWWcr632y0QRyZJazwjJY9BsUGt9dqgtfT-0i_r1PFEvCj-vsjk_ybOJkRi';
export const STORY_IMAGE = 'https://lh3.googleusercontent.com/aida/AEtjO1VCBQ3IPjcihgUDgfwjKn7hn_G5cZwjNM3vC9siFfkS1F6EU_o7UfwWNZEg2H7lR3s_yR8lE5nx3FbDEZFfuppvDMgUGIncZYljC5HHzQQNgj_qL4yb3sqPvFmhFO_2mY9A_gnd9DGun6L6Jxn_8gxV6U1p-q187tmBwaaF52KLpYGFxbBtCkRvqrkQZXb63VskhIhlIangR7hxZgdpoZUsAndoNSLwOYln6bWtuxKDPZnLnCAei_p0lq3F';
export const CLASS_IMAGE_1 = 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fCVFQSVCRCU4MyVFQiU4QiVBNCVFQiVCMCU5QyUyMCVFRCU4MSVCNCVFQiU5RSU5OCVFQyU4QSVBNHxlbnwwfHwwfHx8Mg%3D%3D';
export const CLASS_IMAGE_2 = 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVBJUJEJTgzJUVCJThCJUE0JUVCJUIwJTlDfGVufDB8fDB8fHwy';
export const MAP_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLDkBKyBZTJPypAt04hFUhR_G3Sdj_rgEAczzouJMRDhwFBWM19dosZP5H7MOxtYKuRC48W7BpGen4EIeQVgkFkT9DKsBEVkX7wej1Q-FVavD0n0ecIVXu88TJMfPKQ8N9qUeXD9N8ZyPLEVrVIety5FUE1ppcayLI-vGSpkhZFRvNxHC2JrlKDLfvW8bzqcBADG1_wIb1RknqphctgApOnpJvrwREBrjl9jpE4C1jdFBcCotyPHWDIQ';

export const INITIAL_BOUQUETS: Bouquet[] = [
  {
    id: 'b1',
    name: '피치 라넌큘러스 온실 부케',
    subtitle: '부드러운 살구빛 라넌큘러스와 가든 로즈 시그니처.',
    price: 78000,
    category: 'romantic',
    tag: 'Best Seller',
    isAvailableToday: true,
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VCBQ3IPjcihgUDgfwjKn7hn_G5cZwjNM3vC9siFfkS1F6EU_o7UfwWNZEg2H7lR3s_yR8lE5nx3FbDEZFfuppvDMgUGIncZYljC5HHzQQNgj_qL4yb3sqPvFmhFO_2mY9A_gnd9DGun6L6Jxn_8gxV6U1p-q187tmBwaaF52KLpYGFxbBtCkRvqrkQZXb63VskhIhlIangR7hxZgdpoZUsAndoNSLwOYln6bWtuxKDPZnLnCAei_p0lq3F',
    flowers: ['살구 라넌큘러스', '줄리엣 가든 로즈', '아스틸베', '유칼립투스 폴리안'],
    description: '따뜻한 온실의 아침 햇살을 그대로 머금은 듯한 피치빛 색감입니다. 부드러운 화이트 톤과 은은한 살구빛이 어우러져 프로포즈 및 기념일에 가장 사랑받는 시그니처 부케입니다.',
    dimensions: '약 35cm x 45cm',
    scentProfile: '싱그러운 가든 로즈와 은은한 허브 풀잎 향',
  },
  {
    id: 'b2',
    name: '프로방스 스위트피 부케',
    subtitle: '하늘거리는 파스텔 핑크 스위트피와 헬레보루스 조화.',
    price: 92000,
    category: 'anniversary',
    tag: 'Florist Pick',
    isAvailableToday: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYgy-zVLeA_Mg30tLi0neIKylppAL74eV9fq6CLtHNXmD9Fx8QI5_AVpDJQmPOZrJB5WZ6PIoYbO6ybZjucpmlUUkRM5GHg6tAPpZYlUg2wDBXUTOeJRG26nkWsUSYGrcCLovN8O3QgMo854IP5aQ4IDAqjLhQYh7KxdMPKWftLeYV7zr1c2hiJk40YOw_Cl3Hu3Yl1BdCtxq9u5tRBDKfXIrBhgmDJjiZr37Ncigrp9fMJ9_U4OF5UQ',
    flowers: ['프로방스 스위트피', '헬레보루스', '클레마티스', '연분홍 튤립'],
    description: '나비의 날갯짓처럼 가볍고 우아한 곡선미를 지닌 스위트피를 중심으로, 헬레보루스와 연분홍 튤립을 조화롭게 엮었습니다. 프렌치 특유의 내추럴한 감성을 듬뿍 담았습니다.',
    dimensions: '약 38cm x 50cm',
    scentProfile: '달콤한 봄꽃 스위트피의 맑고 포근한 플로럴 향',
  },
  {
    id: 'b3',
    name: '온실 블룸 햄퍼 바스켓',
    subtitle: '라탄 바스켓과 손글씨 캘리그라피 엽서가 동봉된 선물 세트.',
    price: 135000,
    category: 'basket',
    tag: 'Premium Gift',
    isAvailableToday: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8sxQColNrrX8vuOTmryuHB-Ixo2JrSK0G7SDN7GcelGm9H07uQ3BkAlXZ-YN-TpUt0CeEKwRkfNgVqU4xYycSqESGwYpBFW0943J7eH5a1y_j8ATnuAfZdNUDeZoYjX3Hrqd0j-im73Mr6zhJupnV48I6a3BTK6twjTJWQBLEeMb7hrCS509T541K68kLtH4DLJ-Zx8UXTSbO2AF2OfWOdoLJdrlsOPzqp6NsPjsayTAcTrB9PVqG3g',
    flowers: ['앤틱 카네이션', '오하라 로즈', '스프레이 카네이션', '계절 열매 유칼립투스'],
    description: '수공예 내추럴 라탄 바스켓에 풍성하게 꽂아 물주기만으로 오랫동안 싱싱하게 감상할 수 있는 센터피스형 바스켓입니다. 부모님 생신, 승진, 특별한 축하 자리에 품격을 더합니다.',
    dimensions: '약 42cm x 48cm',
    scentProfile: '고급스러운 오하라 로즈의 깊고 그윽한 장미 향',
  },
  {
    id: 'b4',
    name: '성수 가든 로맨틱 로즈 부케',
    subtitle: '수입 잉글리시 로즈와 프렌치 리시안셔스의 풍성한 조화.',
    price: 85000,
    category: 'romantic',
    tag: 'Classic',
    isAvailableToday: true,
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VCBQ3IPjcihgUDgfwjKn7hn_G5cZwjNM3vC9siFfkS1F6EU_o7UfwWNZEg2H7lR3s_yR8lE5nx3FbDEZFfuppvDMgUGIncZYljC5HHzQQNgj_qL4yb3sqPvFmhFO_2mY9A_gnd9DGun6L6Jxn_8gxV6U1p-q187tmBwaaF52KLpYGFxbBtCkRvqrkQZXb63VskhIhlIangR7hxZgdpoZUsAndoNSLwOYln6bWtuxKDPZnLnCAei_p0lq3F',
    flowers: ['잉글리시 가든 로즈', '연보라 리시안셔스', '옥시페탈룸', '유칼립투스'],
    description: '클래식한 정원 장미와 투톤 리시안셔스를 볼륨감 있게 연출했습니다. 손끝에서 전해지는 린넨 감촉과 함께 특별한 로맨틱 데이를 완성합니다.',
    dimensions: '약 36cm x 46cm',
    scentProfile: '풍성한 잉글리시 가든 로즈 향',
  },
  {
    id: 'b5',
    name: '내추럴 온실 티타임 바스켓',
    subtitle: '따스한 미색과 버터옐로우 톤의 편안한 정원 꽃바구니.',
    price: 110000,
    category: 'basket',
    tag: 'Warm Harmony',
    isAvailableToday: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8sxQColNrrX8vuOTmryuHB-Ixo2JrSK0G7SDN7GcelGm9H07uQ3BkAlXZ-YN-TpUt0CeEKwRkfNgVqU4xYycSqESGwYpBFW0943J7eH5a1y_j8ATnuAfZdNUDeZoYjX3Hrqd0j-im73Mr6zhJupnV48I6a3BTK6twjTJWQBLEeMb7hrCS509T541K68kLtH4DLJ-Zx8UXTSbO2AF2OfWOdoLJdrlsOPzqp6NsPjsayTAcTrB9PVqG3g',
    flowers: ['버터컵 라넌큘러스', '마트리카리아', '레몬트리', '알스트로메리아'],
    description: '오후의 티타임 햇살처럼 편안하고 포근한 색채로 기획된 바스켓입니다. 집들이나 감사 선물로 자연스러운 화사함을 선사합니다.',
    dimensions: '약 38cm x 42cm',
    scentProfile: '산뜻하고 달콤한 카모마일 마트리카리아 향',
  },
  {
    id: 'b6',
    name: '아틀리에 기념일 화이트 부케',
    subtitle: '눈부신 순백의 튤립과 아네모네가 주는 정갈한 축하.',
    price: 88000,
    category: 'anniversary',
    tag: 'Pure Elegant',
    isAvailableToday: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYgy-zVLeA_Mg30tLi0neIKylppAL74eV9fq6CLtHNXmD9Fx8QI5_AVpDJQmPOZrJB5WZ6PIoYbO6ybZjucpmlUUkRM5GHg6tAPpZYlUg2wDBXUTOeJRG26nkWsUSYGrcCLovN8O3QgMo854IP5aQ4IDAqjLhQYh7KxdMPKWftLeYV7zr1c2hiJk40YOw_Cl3Hu3Yl1BdCtxq9u5tRBDKfXIrBhgmDJjiZr37Ncigrp9fMJ9_U4OF5UQ',
    flowers: ['화이트 더블 튤립', '화이트 아네모네', '시레네', '피토스포룸'],
    description: '순수함과 고결함을 상징하는 화이트 플라워 컬렉션. 은은한 그린 텍스처와 배색되어 세련되고 감각적인 축하 메시지를 전합니다.',
    dimensions: '약 35cm x 45cm',
    scentProfile: '이슬 맺힌 풀꽃의 청초한 향',
  },
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: '한예린 님',
    occasion: '결혼기념일',
    rating: 5,
    content: '“프로방스 햇살 가득한 정원에 서 있는 기분이었어요. 장미와 린넨 리본 매치가 감동입니다.”',
    date: '2026. 09. 20',
  },
  {
    id: 'r2',
    author: '서지민 님',
    occasion: '온실 클래스',
    rating: 5,
    content: '“온실에서 허브차를 마시며 나만의 꽃을 만드는데 깊이 힐링되었습니다.”',
    date: '2026. 09. 18',
  },
  {
    id: 'r3',
    author: '이동현 님',
    occasion: '생신 바스켓',
    rating: 5,
    content: '“부모님께서 ‘이렇게 고운 꽃은 평생 처음’이라며 환하게 웃으셨어요.”',
    date: '2026. 09. 15',
  },
  {
    id: 'r4',
    author: '박찬우 님',
    occasion: '프로포즈',
    rating: 5,
    content: '“당일 아침 생화라 싱싱함이 일주일 넘게 지속되었어요. 프로포즈 대성공!”',
    date: '2026. 09. 12',
  },
];

export const CLASS_SESSIONS: ClassSession[] = [
  {
    id: 'c1',
    title: '프로방스 온실 프렌치 핸드타이드 클래스',
    date: '매주 목요일 (2026년 10월 1일)',
    time: '오전 11:00 - 13:00 (2시간)',
    remainingSeats: 2,
    totalSeats: 4,
    price: 95000,
  },
  {
    id: 'c2',
    title: '가든 센터피스 & 캔들링 워크숍',
    date: '매주 토요일 (2026년 10월 3일)',
    time: '오후 14:00 - 16:00 (2시간)',
    remainingSeats: 1,
    totalSeats: 4,
    price: 110000,
  },
  {
    id: 'c3',
    title: '모닝 선샤인 플라워 바스켓 클래스',
    date: '매주 화요일 (2026년 10월 6일)',
    time: '오전 11:00 - 13:00 (2시간)',
    remainingSeats: 3,
    totalSeats: 4,
    price: 105000,
  },
];

export const TEA_OPTIONS = [
  '유기농 카모마일 & 피치 블렌드 티',
  '프로방스 프렌치 라벤더 & 민트 티',
  '제주 유기농 귤꽃 녹차',
  '디카페인 젠틀 루이보스 바닐라',
];

export const RIBBON_OPTIONS = [
  { id: 'natural', name: '워시드 린넨 내추럴 베이지', desc: '자연 친화적 크라프트 & 린넨 톤' },
  { id: 'peach', name: '은은한 살구 피치 쉬폰', desc: '부드럽고 로맨틱한 파스텔 무드' },
  { id: 'sage', name: '포레스트 세이지 그린', desc: '싱그럽고 차분한 온실 정원 무드' },
];
