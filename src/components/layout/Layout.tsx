import React from 'react';
import LeftSidebar from './LeftSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex">
      <LeftSidebar />
      <main className="flex-1 min-h-screen overflow-auto bg-zinc-900">
        {children}
      </main>
    </div>
  );
};

export default Layout; 