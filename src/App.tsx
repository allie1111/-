/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrandStorySection } from './components/BrandStorySection';
import { BouquetSection } from './components/BouquetSection';
import { ClassSection } from './components/ClassSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ConsultationBanner } from './components/ConsultationBanner';
import { VisitSection } from './components/VisitSection';
import { Footer } from './components/Footer';

import { ReservationModal } from './components/ReservationModal';
import { ClassBookingModal } from './components/ClassBookingModal';
import { ConsultationModal } from './components/ConsultationModal';
import { KakaoChatModal } from './components/KakaoChatModal';
import { FlowerCareModal } from './components/FlowerCareModal';
import { ReviewModal } from './components/ReviewModal';
import { BouquetPreviewModal } from './components/BouquetPreviewModal';
import { OrdersModal } from './components/OrdersModal';
import { Toast } from './components/Toast';

import { INITIAL_BOUQUETS, INITIAL_REVIEWS } from './data/mockData';
import { Bouquet, Review, ReservationData, ClassBookingData, ConsultationInquiry } from './types';

export default function App() {
  const [bouquets] = useState<Bouquet[]>(INITIAL_BOUQUETS);
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [bouquetReservations, setBouquetReservations] = useState<ReservationData[]>([]);
  const [classBookings, setClassBookings] = useState<ClassBookingData[]>([]);

  // Modal visibility states
  const [selectedBouquet, setSelectedBouquet] = useState<Bouquet | null>(null);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const [previewBouquet, setPreviewBouquet] = useState<Bouquet | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const [isClassBookingOpen, setIsClassBookingOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isKakaoChatOpen, setIsKakaoChatOpen] = useState(false);
  const [isCareGuideOpen, setIsCareGuideOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  };

  // Handlers
  const handleSelectBouquet = (bouquet: Bouquet) => {
    setSelectedBouquet(bouquet);
    setIsReservationOpen(true);
  };

  const handlePreviewBouquet = (bouquet: Bouquet) => {
    setPreviewBouquet(bouquet);
    setIsPreviewOpen(true);
  };

  const handleReserveFromPreview = (bouquet: Bouquet) => {
    setIsPreviewOpen(false);
    setSelectedBouquet(bouquet);
    setIsReservationOpen(true);
  };

  const handleQuickReservation = () => {
    const defaultBouquet = bouquets[0];
    setSelectedBouquet(defaultBouquet);
    setIsReservationOpen(true);
  };

  const handleReservationSubmit = (data: ReservationData) => {
    setBouquetReservations((prev) => [data, ...prev]);
    showToast(`‘${data.bouquetName}’ 예약이 정상 접수되었습니다.`);
  };

  const handleClassBookingSubmit = (data: ClassBookingData) => {
    setClassBookings((prev) => [data, ...prev]);
    showToast(`‘${data.sessionTitle}’ 클래스 신청이 접수되었습니다.`);
  };

  const handleConsultationSubmit = (inquiry: ConsultationInquiry) => {
    showToast(`맞춤 상담 요청이 플로리스트에게 전달되었습니다.`);
  };

  const handleAddReview = (newReview: Review) => {
    setReviews((prev) => [newReview, ...prev]);
    showToast('따스한 온실 후기가 등록되었습니다.');
  };

  const handleCopyAddress = () => {
    const address = '서울특별시 성동구 연무장길 24, 1층 온실 아틀리에';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(address).then(() => {
        showToast('온실 아틀리에 주소가 복사되었습니다.');
      }).catch(() => {
        showToast('주소: 서울특별시 성동구 연무장길 24, 1층');
      });
    } else {
      showToast('주소: 서울특별시 성동구 연무장길 24, 1층');
    }
  };

  const scrollToBouquets = () => {
    const el = document.getElementById('bouquet-reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalReservationsCount = bouquetReservations.length + classBookings.length;

  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#322a26] flex flex-col font-sans selection:bg-[#f7ded0] selection:text-[#c1664e]">
      {/* Navigation Header */}
      <Header
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenQuickReservation={handleQuickReservation}
        reservationsCount={totalReservationsCount}
        onOpenMyOrders={() => setIsOrdersModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HeroSection
          onReserveClick={scrollToBouquets}
          onClassClick={() => setIsClassBookingOpen(true)}
        />

        {/* 2. Brand Story / Philosophy */}
        <BrandStorySection
          onLearnMoreCare={() => setIsCareGuideOpen(true)}
        />

        {/* 3. Boutique Bouquet Collection */}
        <BouquetSection
          bouquets={bouquets}
          onSelectBouquet={handleSelectBouquet}
          onPreviewBouquet={handlePreviewBouquet}
        />

        {/* 4. Greenhouse One-Day Class */}
        <ClassSection
          onBookClass={() => setIsClassBookingOpen(true)}
        />

        {/* 5. Client Letters & Reviews */}
        <ReviewsSection
          reviews={reviews}
          onWriteReview={() => setIsReviewModalOpen(true)}
        />

        {/* 6. Floral Consultation Banner */}
        <ConsultationBanner
          onOpenKakaoChat={() => setIsKakaoChatOpen(true)}
          onOnlineReservation={() => setIsConsultationOpen(true)}
        />

        {/* 7. Seongsu Boutique Visit & Map */}
        <VisitSection
          onCopyAddress={handleCopyAddress}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCareGuide={() => setIsCareGuideOpen(true)}
        onOpenKakaoChat={() => setIsKakaoChatOpen(true)}
      />

      {/* Modals & Dialogs */}
      <ReservationModal
        bouquet={selectedBouquet}
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onSubmit={handleReservationSubmit}
      />

      <BouquetPreviewModal
        bouquet={previewBouquet}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onReserve={handleReserveFromPreview}
      />

      <ClassBookingModal
        isOpen={isClassBookingOpen}
        onClose={() => setIsClassBookingOpen(false)}
        onSubmit={handleClassBookingSubmit}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onSubmit={handleConsultationSubmit}
      />

      <KakaoChatModal
        isOpen={isKakaoChatOpen}
        onClose={() => setIsKakaoChatOpen(false)}
        onNavigateToReservation={scrollToBouquets}
      />

      <FlowerCareModal
        isOpen={isCareGuideOpen}
        onClose={() => setIsCareGuideOpen(false)}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleAddReview}
      />

      <OrdersModal
        isOpen={isOrdersModalOpen}
        onClose={() => setIsOrdersModalOpen(false)}
        bouquetReservations={bouquetReservations}
        classBookings={classBookings}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
