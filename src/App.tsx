import React from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';

import { Home } from './pages/Home';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};
