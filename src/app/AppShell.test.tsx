// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AppShell } from './AppShell';

describe('AppShell', () => {
  it('renders page content inside the existing application frame', () => {
    render(
      <AppShell>
        <main>Voyage content</main>
      </AppShell>,
    );

    expect(screen.getByRole('main')).toHaveTextContent('Voyage content');
  });
});
