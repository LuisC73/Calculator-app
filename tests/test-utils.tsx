import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../src/context/ThemeProvider.tsx';

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: ThemeProvider, ...options });

export { customRender as render };