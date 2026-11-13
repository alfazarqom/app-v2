import type { CurrencyCode } from '../types';

export interface ExchangeRates {
  base: 'USD';
  date: string;
  rates: Record<CurrencyCode, number>;
}

interface FrankfurterRateRow {
  date: string;
  base: string;
  quote: string;
  rate: number;
}

const FRANKFURTER_RATES_URL =
  'https://api.frankfurter.dev/v2/rates?base=USD&quotes=IDR,EUR';

export async function fetchLatestUsdRates(signal?: AbortSignal): Promise<ExchangeRates> {
  const response = await fetch(FRANKFURTER_RATES_URL, { signal });
  if (!response.ok) {
    throw new Error(`Exchange-rate service returned HTTP ${response.status}`);
  }

  const rows = (await response.json()) as FrankfurterRateRow[];
  const idr = rows.find((row) => row.quote === 'IDR' && Number.isFinite(row.rate));
  const eur = rows.find((row) => row.quote === 'EUR' && Number.isFinite(row.rate));

  if (!idr || !eur || !rows[0]?.date) {
    throw new Error('Exchange-rate response is incomplete');
  }

  return {
    base: 'USD',
    date: rows[0].date,
    rates: { USD: 1, IDR: idr.rate, EUR: eur.rate },
  };
}

export function convertUsdAmount(
  amount: number,
  currency: CurrencyCode,
  rates: ExchangeRates['rates'],
): number {
  if (!Number.isFinite(amount)) return 0;
  const rate = rates[currency];
  if (!Number.isFinite(rate) || rate <= 0) {
    throw new Error(`No valid USD to ${currency} exchange rate is available`);
  }
  return amount * rate;
}

export function formatCurrencyAmount(
  amount: number,
  currency: CurrencyCode,
  rates: ExchangeRates['rates'],
): string {
  const converted = convertUsdAmount(amount, currency, rates);
  const locale = currency === 'IDR' ? 'id-ID' : currency === 'EUR' ? 'de-DE' : 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: currency === 'IDR' ? 0 : 2,
  }).format(converted);
}
