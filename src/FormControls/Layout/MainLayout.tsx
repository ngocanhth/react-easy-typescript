import { Footer, Header } from '@/components/common';
import  React, { Children } from 'react';

export interface MainLayoutProps {
    children?: React.ReactNode
}

export function MainLayout ({children}: MainLayoutProps) {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  );
}
