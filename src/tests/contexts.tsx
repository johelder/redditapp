import React, { ReactElement } from 'react';

import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from '../styles/theme';
import { IProvidersProps } from './types';

const AllTheProviders = ({ children }: IProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (component: ReactElement, options = {}) =>
  render(component, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
