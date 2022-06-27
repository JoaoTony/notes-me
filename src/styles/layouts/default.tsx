import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '@/styles/themes';

type props = {
  children: ReactNode
}

const Layout = ({ children } : props) => (
  <ThemeProvider theme={LIGHT_THEME}>
    {children}
  </ThemeProvider>
);

export default Layout;
