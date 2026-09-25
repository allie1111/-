export interface Bouquet {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  category: 'all' | 'romantic' | 'anniversary' | 'basket';
  tag?: string;
  isAvailableToday?: boolean;
  image: string;
  flowers: string[];
  description: string;
  dimensions?: string;
  scentProfile?: string;
}

export interface Review {
  id: string;
  author: string;
  occasion: string;
  rating: number;
  content: string;
  date: string;
}

export interface ClassSession {
  id: string;
  title: string;
  date: string;
  time: string;
  remainingSeats: number;
  totalSeats: number;
  price: number;
}

export interface ReservationData {
  bouquetId: string;
  bouquetName: string;
  price: number;
  deliveryType: 'pickup' | 'delivery';
  date: string;
  timeSlot: string;
  recipientName: string;
  recipientPhone: string;
  recipientAddress?: string;
  ribbonColor: 'natural' | 'peach' | 'sage';
  handwrittenLetter: string;
  specialRequests?: string;
}

export interface ClassBookingData {
  sessionId: string;
  sessionTitle: string;
  date: string;
  time: string;
  participants: number;
  teaChoice: string;
  applicantName: string;
  applicantPhone: string;
  notes?: string;
}

export interface ConsultationInquiry {
  occasion: string;
  colorPalette: string;
  budgetRange: string;
  notes: string;
  contactName: string;
  contactPhone: string;
}
