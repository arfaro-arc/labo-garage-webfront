
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/2ff50b82-babe-4890-923c-aa63963d7651.png" 
            alt="LABO inc." 
            className="h-12 sm:h-14 md:h-16 w-auto"
          />
        </Link>
        
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="メニューを開く"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
