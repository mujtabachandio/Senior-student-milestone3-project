import { ReactNode } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import CartProvider from './components/CartProvider';
import Footer from './components/Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}
