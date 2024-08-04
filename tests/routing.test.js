import { render, fireEvent } from '@testing-library/svelte';
import { Router, Route } from 'svelte-routing';
import Home from '../src/routes/Home.svelte';
import About from '../src/routes/About.svelte';
import { describe, it, expect } from 'vitest';

describe('Routing', () => {
  it('navigates to about page', async () => {
    const { getByText, container } = render(
      Router,
      {
        props: {
          children: [
            { component: Home, path: '/' },
            { component: About, path: '/about' }
          ]
        }
      }
    );
    expect(container.innerHTML).toContain('Home');
    const aboutLink = getByText('About');
    await fireEvent.click(aboutLink);
    expect(container.innerHTML).toContain('About');
  });
});
