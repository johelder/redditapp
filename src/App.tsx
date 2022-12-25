import React from 'react';

import { Routes } from './routes';

import { ThemeProvider } from 'styled-components';
import { SubRedditProvider } from './hooks/useSubreddit';

import { theme } from './styles/theme';

export const App = () => {
  return (
    <SubRedditProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SubRedditProvider>
  );
};
