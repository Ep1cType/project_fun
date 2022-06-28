import React, { FC, ReactNode } from 'react';
import Sidebar from '@/src/app/sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div
        className="relative min-h-screen lg:left-[200px] w-full lg:w-[calc(100%_-_200px)] bg-amber-100"
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
