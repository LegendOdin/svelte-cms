import { render } from '@testing-library/svelte';
import Dashboard from '../src/routes/Dashboard.svelte';
import { describe, it, expect } from 'vitest';

describe('Dashboard', () => {
  it('renders the dashboard', () => {
    const { getByText } = render(Dashboard);
    expect(getByText('Dashboard')).toBeInTheDocument();
  });
});
