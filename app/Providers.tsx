'use client';
import { ThemeProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider enableSystem={true} attribute={'class'}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
