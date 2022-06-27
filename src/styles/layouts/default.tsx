import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '@/styles/themes';
import Header from '@/components/header';

type props = {
  children: ReactNode
}

const Layout = ({ children } : props) => (
  <ThemeProvider theme={LIGHT_THEME}>
    <Header />
    {children}
  </ThemeProvider>
);

export default Layout;
