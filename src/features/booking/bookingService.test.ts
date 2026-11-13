import { describe, expect, it } from 'vitest';
import { TOURS } from '../../data/catalog';
import { createPrototypeBookingRequest } from './bookingService';

describe('prototype booking request', () => {
  it('creates a pending, unpaid booking with a currency snapshot', () => {
    const booking = createPrototypeBookingRequest({
      tour: TOURS[0],
      date: TOURS[0].availableDates[0],
      guestsCount: 2,
      travelerName: 'Demo Traveler',
      travelerEmail: 'demo@example.com',
      currency: 'IDR',
      exchangeRate: 16_000,
    });

    expect(booking.status).toBe('Pending');
    expect(booking.paymentStatus).toBe('Unpaid');
    expect(booking.currency).toBe('IDR');
    expect(booking.totalAmount).toBe(TOURS[0].price * 2 * 16_000);
    expect(booking.baseAmountUsd).toBe(TOURS[0].price * 2);
    expect(booking.source).toBe('prototype');
  });
});
