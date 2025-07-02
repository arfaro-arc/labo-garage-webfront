
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          onClick={scrollToTop}
          className="cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
        >
          <img 
            src="/lovable-uploads/4b988250-060f-4dfe-a086-8cbff87f8f2a.png" 
            alt="LABO inc." 
            className="h-12 sm:h-14 md:h-16 w-auto drop-shadow-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
        
        <button
          onClick={toggleMenu}
          className="p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm"
          aria-label="メニューを開く"
        >
          {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
        </button>
      </div>
      
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
