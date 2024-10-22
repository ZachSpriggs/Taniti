import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNav from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout: React.FC = () => {
  return (
    <div className="root-layout">
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;