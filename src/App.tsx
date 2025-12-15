import { Routes, Route } from 'react-router-dom';
import { Header } from './components/organisms/Header';
import { Hero } from './components/organisms/Hero';
// Temporarily commented out until brand logos are ready
// import { CustomersSection } from './components/ui/customers-section';
import { Services } from './components/organisms/Services';
import { About } from './components/organisms/About';
import { TalentShowcase } from './components/organisms/TalentShowcase';
import { Footer } from './components/organisms/Footer';
import { Talent } from './components/organisms/Talent';

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

