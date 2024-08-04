import { render } from '@testing-library/svelte';
import Dashboard from '../src/routes/admin/Dashboard.svelte';
import { describe, it, expect } from 'vitest';

describe('Admin Dashboard', () => {
  it('renders the dashboard', () => {
    const { getByText } = render(Dashboard);
    expect(getByText('Admin Dashboard')).toBeInTheDocument();
  });
});
