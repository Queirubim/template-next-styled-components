'use client';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/themes';
import StyledComponentsRegistry from '../lib/registry';

type Props = {
  children: React.ReactNode;
};

const MyThemeProvider = ({ children }: Props) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default MyThemeProvider;
