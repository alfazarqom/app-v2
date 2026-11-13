import { expect, test } from '@playwright/test';

test('onboarding opens the Voyage home screen', async ({ page }) => {
  await page.route('https://api.frankfurter.dev/**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([
        { date: '2026-11-13', base: 'USD', quote: 'IDR', rate: 16000 },
        { date: '2026-11-13', base: 'USD', quote: 'EUR', rate: 0.92 },
      ]),
    });
  });

  await page.goto('/');
  await page.getByRole('button', { name: 'Explore Now' }).click();
  await expect(page.getByRole('heading', { name: 'Where will you travel next?' })).toBeVisible();
  await expect(page.getByText('Curated 2026 Escapes')).toBeVisible();
});
