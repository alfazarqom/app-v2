import type { Booking, Traveler } from '../types';
import { TOURS } from './catalog';

export const INITIAL_BOOKINGS: Booking[] = {
      id: 'bk-1',
      bookingCode: 'VYG-849201',
      tourTitle: TOURS[0].title,
      location: TOURS[0].location,
      image: TOURS[0].image,
      date: '16 Jun - 20 Jun',
      guestsCount: 2,
      totalAmount: 4200,
      status: 'Confirmed',
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card (•••• 4921)',
      source: 'prototype',
      travelerName: 'Alex Morgan',
      travelerEmail: 'alex.morgan@example.com',
      trackingSteps: [
        { label: 'Booking Confirmed', time: 'May 10, 10:24 AM', done: true },
        { label: 'Chauffeur Assigned', time: 'May 12, 02:15 PM', done: true },
        { label: 'Villa & Spa Reserved', time: 'May 14, 09:00 AM', done: true },
        { label: 'Ready for Departure', time: 'Pending', done: false }
      ]
    };

export const INITIAL_PROFILE = {
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 382-9102',
    city: 'Los Angeles, USA';

export const INITIAL_TRAVELERS: Traveler[] = { id: 'tr-1', name: 'Alex Morgan', relation: 'Self', nationality: 'USA' },
    { id: 'tr-2', name: 'Taylor Swift', relation: 'Companion', nationality: 'USA' };
