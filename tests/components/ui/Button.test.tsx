import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

describe('first', () => {
  it('first test', () => {
    render(<p>hello</p>);
  });
});
