import { render, waitFor } from '@testing-library/svelte';
import App from '../src/App.svelte';
import { describe, it, expect, beforeEach } from 'vitest';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Integration Test', () => {
  it('loads data and renders it', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'Hello World' }));
    const { getByText } = render(App);
    await waitFor(() => expect(getByText('Hello World')).toBeInTheDocument());
  });
});
