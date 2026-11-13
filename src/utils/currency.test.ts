import { describe, expect, it } from 'vitest';
import {
  convertUsdAmount,
  formatCurrencyAmount,
  formatStoredCurrencyAmount,
} from './currency';

const rates = { USD: 1, IDR: 16_000, EUR: 0.92 };

describe('currency conversion', () => {
  it('converts USD to the selected reference currency', () => {
    expect(convertUsdAmount(10, 'IDR', rates)).toBe(160_000);
    expect(convertUsdAmount(10, 'EUR', rates)).toBeCloseTo(9.2);
  });

  it('formats prices with Intl currency rules', () => {
    expect(formatCurrencyAmount(10, 'USD', rates)).toContain('$');
    expect(formatCurrencyAmount(10, 'IDR', rates)).toContain('Rp');
    expect(formatCurrencyAmount(10, 'EUR', rates)).toContain('€');
  });

  it('formats a booking amount already stored in its transaction currency', () => {
    expect(formatStoredCurrencyAmount(160_000, 'IDR')).toContain('Rp');
  });

  it('rejects an invalid exchange rate instead of fabricating a price', () => {
    expect(() => convertUsdAmount(10, 'IDR', { ...rates, IDR: 0 })).toThrow();
  });
});
