import { describe, it, expect } from 'vitest';
import { writable } from 'svelte/store';

describe('Writable store', () => {
  it('updates value', () => {
    const count = writable(0);
    count.set(1);
    count.subscribe(value => {
      expect(value).toBe(1);
    });
  });
});
