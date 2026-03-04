import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AnnouncementBar from './components/AnnouncementBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import SEOHead from './components/SEOHead';
import { getSeoForPath } from './seo';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const seo = getSeoForPath(location.pathname);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    const sections = Array.from(document.querySelectorAll('main section'));
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isTopSection = rect.top < window.innerHeight;

      if (isTopSection) {
        // Elements currently in viewport or at top should show immediately
        section.classList.add('reveal');
        // Small timeout to ensure CSS transitions trigger correctly
        setTimeout(() => {
          section.classList.add('is-visible');
        }, 50);
      } else {
        // Elements further down wait for scroll
        section.classList.add('reveal');
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <SEOHead title={seo.title} tags={seo.tags} links={seo.links} jsonLd={seo.jsonLd} />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
