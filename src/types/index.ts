export type CategoryType = 'All' | 'Popular' | 'Beach' | 'Mountain' | 'Adventure';

export interface Destination {
  id: string;
  city: string;
  country: string;
  category: CategoryType;
  subtitle: string;
  count: string;
  price: number;
  badgeColor: string;
  rating: number;
  reviewsCount: number;
  temp: string;
  duration: string;
  dates: string;
  tag: string;
  image: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  bestSeason: string;
}

export interface Tour {
  id: string;
  title: string;
  destinationId: string;
  category: string;
  location: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  duration: string;
  image: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  availableDates: string[];
  itinerary: {
    day: number;
    dateLabel: string;
    activities: {
      id: string;
      title: string;
      subtitle: string;
      time: string;
      color: string;
      iconType: 'flight' | 'hotel' | 'dining' | 'shopping' | 'adventure';
    }[];
  }[];
}

export type BookingStatus = 'Pending' | 'Confirmed' | 'Cancelled' | 'Completed';
export type PaymentStatus = 'Unpaid' | 'Pending' | 'Paid' | 'Failed' | 'Refunded';
export type CurrencyCode = 'USD' | 'IDR' | 'EUR';

export interface Traveler {
  id: string;
  name: string;
  relation: 'Self' | 'Companion' | 'Family' | 'Other';
  nationality: string;
  passportNumber?: string;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  currency: 'USD' | 'IDR' | 'EUR';
  status: PaymentStatus;
  providerTransactionId?: string;
}

export interface BookingTracking {
  id: string;
  bookingId: string;
  event: string;
  occurredAt: string;
  completed: boolean;
}

export interface Booking {
  id: string;
  bookingCode: string;
  tourTitle: string;
  location: string;
  image: string;
  date: string;
  guestsCount: number;
  totalAmount: number;
  currency: CurrencyCode;
  baseAmountUsd?: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: string;
  travelerName: string;
  travelerEmail: string;
  source: 'prototype' | 'backend';
  trackingSteps: { label: string; time: string; done: boolean }[];
}
