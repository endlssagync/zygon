import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/organisms/Header';
import { Hero } from './components/organisms/Hero';
import { CustomersSection } from './components/ui/customers-section';
import { Services } from './components/organisms/Services';
import { About } from './components/organisms/About';
import { TalentShowcase } from './components/organisms/TalentShowcase';
import { Process } from './components/organisms/Process';
import { Contact } from './components/organisms/Contact';
import { Footer } from './components/organisms/Footer';
import { Talent } from './components/organisms/Talent';

const customers = [
  {
    src: "/coinbase-logo.svg",
    alt: "Coinbase Logo",
    height: 20,
  },
  {
    src: "/coinbase-logo.svg",
    alt: "Coinbase Logo",
    height: 16,
  },
  {
    src: "/coinbase-logo.svg",
    alt: "Coinbase Logo",
    height: 16,
  },
  {
    src: "/coinbase-logo.svg",
    alt: "Coinbase Logo",
    height: 20,
  },
  {
    src: "/coinbase-logo.svg",
    alt: "Coinbase Logo",
    height: 20,
  },
  {
    src: "/coinbase-logo.svg",
    alt: "Coinbase Logo",
    height: 16,
  },
  {
    src: "/coinbase-logo.svg",
    alt: "Coinbase Logo",
    height: 28,
  },
  {
    src: "/coinbase-logo.svg",
    alt: "Coinbase Logo",
    height: 24,
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <CustomersSection customers={customers} />
      <Services />
      <TalentShowcase />
      <About />
      <Process />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
            <Header />
            <main>
              <HomePage />
            </main>
            <Footer />
          </div>
        }
      />
      <Route path="/talent" element={<Talent />} />
    </Routes>
  );
}

export default App;

