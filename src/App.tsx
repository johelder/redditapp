import React from 'react';

import { Routes } from './routes';

import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};
