import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Navbar/Header';
import Footer from '../Footer/Footer';

export default function MasterLayout() {
  return (
    <React.Fragment>
      <Header />
      <main className="container mt-4">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}
