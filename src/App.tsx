import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/organisms/Header';
import { Hero } from './components/organisms/Hero';
// Temporarily commented out until brand logos are ready
// import { CustomersSection } from './components/ui/customers-section';
import { Services } from './components/organisms/Services';
import { About } from './components/organisms/About';
import { TalentShowcase } from './components/organisms/TalentShowcase';
import { Footer } from './components/organisms/Footer';
import { Talent } from './components/organisms/Talent';
import { ContactPage } from './components/organisms/ContactPage';

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Temporarily commented out until brand logos are ready
// const customers = [
//   {
//     src: "/coinbase-logo.svg",
//     alt: "Coinbase Logo",
//     height: 20,
//   },
//   {
//     src: "/coinbase-logo.svg",
//     alt: "Coinbase Logo",
//     height: 16,
//   },
//   {
//     src: "/coinbase-logo.svg",
//     alt: "Coinbase Logo",
//     height: 16,
//   },
//   {
//     src: "/coinbase-logo.svg",
//     alt: "Coinbase Logo",
//     height: 20,
//   },
//   {
//     src: "/coinbase-logo.svg",
//     alt: "Coinbase Logo",
//     height: 20,
//   },
//   {
//     src: "/coinbase-logo.svg",
//     alt: "Coinbase Logo",
//     height: 16,
//   },
//   {
//     src: "/coinbase-logo.svg",
//     alt: "Coinbase Logo",
//     height: 28,
//   },
//   {
//     src: "/coinbase-logo.svg",
//     alt: "Coinbase Logo",
//     height: 24,
//   },
// ];

function HomePage() {
  return (
    <>
      <Hero />
      {/* Temporarily hidden until brand logos are ready */}
      {/* <CustomersSection customers={customers} /> */}
      <Services />
      <TalentShowcase />
      <About />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
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
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;

