import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="font-montserrat font-bold text-2xl text-primary">Harshit Joshi</a>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#home" className="nav-link text-dark hover:text-primary transition duration-300 font-medium">HOME</a>
            <a href="#works" className="nav-link text-dark hover:text-primary transition duration-300 font-medium">WORKS</a>
            <a href="#about" className="nav-link text-dark hover:text-primary transition duration-300 font-medium">ABOUT</a>
            <a href="#contact" className="nav-link text-dark hover:text-primary transition duration-300 font-medium">CONTACT</a>
          </nav>
          
          {/* Contact Button */}
          <div className="hidden lg:block">
            <a href="#contact" className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300 font-medium">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white`}>
        <div className="px-4 py-2 space-y-2">
          <a 
            href="#home" 
            onClick={closeMenu}
            className="block py-2 text-dark hover:text-primary transition duration-300 font-medium"
          >
            HOME
          </a>
          <a 
            href="#works" 
            onClick={closeMenu}
            className="block py-2 text-dark hover:text-primary transition duration-300 font-medium"
          >
            WORKS
          </a>
          <a 
            href="#about" 
            onClick={closeMenu}
            className="block py-2 text-dark hover:text-primary transition duration-300 font-medium"
          >
            ABOUT
          </a>
          <a 
            href="#workstation" 
            onClick={closeMenu}
            className="block py-2 text-dark hover:text-primary transition duration-300 font-medium"
          >
            WORKSPACE
          </a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="block py-2 text-dark hover:text-primary transition duration-300 font-medium"
          >
            CONTACT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
