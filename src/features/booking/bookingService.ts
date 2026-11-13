import type { Booking, Tour } from '../../types';

export interface PrototypeBookingRequestInput {
  tour: Tour;
  date: string;
  guestsCount: number;
  travelerName: string;
  travelerEmail: string;
  currency: 'USD' | 'IDR' | 'EUR';
  exchangeRate: number;
}

/**
 * Creates a local-only booking request for the frontend prototype.
 * It must never be treated as a confirmed reservation or payment.
 */
export function createPrototypeBookingRequest({
  tour,
  date,
  guestsCount,
  travelerName,
  travelerEmail,
  currency,
  exchangeRate,
}: PrototypeBookingRequestInput): Booking {
  return {
    id: `prototype-${Date.now()}`,
    bookingCode: `DEMO-${Math.floor(100000 + Math.random() * 900000)}`,
    tourTitle: tour.title,
    location: tour.location,
    image: tour.image,
    date,
    guestsCount,
    totalAmount: tour.price * guestsCount * exchangeRate,
    currency,
    baseAmountUsd: tour.price * guestsCount,
    status: 'Pending',
    paymentStatus: 'Unpaid',
    paymentMethod: `Not processed (${currency})`,
    travelerName,
    travelerEmail,
    source: 'prototype',
    trackingSteps: [
      { label: 'Booking Request Submitted', time: 'Just now', done: true },
      { label: 'Payment Verification', time: 'Not started', done: false },
      { label: 'Reservation Confirmation', time: 'Pending', done: false },
      { label: 'Ready for Departure', time: 'Pending', done: false },
    ],
  };
}
