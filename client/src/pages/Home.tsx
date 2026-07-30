import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechnicalArsenal from "@/components/TechnicalArsenal";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import WorkingWithMe from "@/components/WorkingWithMe";
import ProjectEstimator from "@/components/ProjectEstimator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingCallModal from "@/components/BookingCallModal";

const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const href = anchor.getAttribute('href') as string;
        if (href === '#') return;
        
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          const headerOffset = 88;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          window.history.pushState({}, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070a0f] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Header onOpenBookingModal={openBookingModal} />
      <Hero onOpenBookingModal={openBookingModal} />
      <TechnicalArsenal />
      <FeaturedCaseStudies />
      <WorkingWithMe />
      <ProjectEstimator onOpenBookingModal={openBookingModal} />
      <Contact />
      <Footer />

      <BookingCallModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
      />
    </div>
  );
};

export default Home;

