import { render, waitFor } from '@testing-library/svelte';
import App from '../src/App.svelte';
import { describe, it, expect, beforeEach, vi } from 'vitest';

beforeEach(() => {
  global.fetch = vi.fn();
});

describe('Integration Test', () => {
  it('loads data and renders it', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: 'Site Navq' }),
    });
    const { getByText } = render(App);
    await waitFor(() => expect(getByText('Site Nav')).toBeInTheDocument());
  });
});
