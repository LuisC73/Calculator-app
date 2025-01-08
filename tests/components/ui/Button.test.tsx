import React from 'react';
import { describe, it } from 'vitest';
import { render } from '../../test-utils';
import { screen } from '@testing-library/react';
import { Button } from '../../../src/components';

describe('tests in component <Button />', () => {
  it('first test', () => {
    render(<Button id="number-7" label="7" type="primary" action={() => {}} />);
    screen.debug();
  });
});
