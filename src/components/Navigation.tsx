
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation = ({ isOpen, onClose }: NavigationProps) => {
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onClose(); // Close the menu after clicking
  };

  const menuItems = [
    { title: 'ホーム', path: '/', isScroll: false },
    { title: '整備サービス', sectionId: 'Group Services', isScroll: true },
    { title: '車両販売', sectionId: 'Group Inventory', isScroll: true },
    { title: 'お問い合わせ', sectionId: 'Group Contact', isScroll: true },
    { title: 'アクセス', path: '/', isScroll: true, scrollTarget: 'access' },
  ];

  const handleLineClick = () => {
    window.open('https://lin.ee/Akkloat', '_blank');
    onClose();
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:0426963713';
    onClose();
  };

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (item.isScroll) {
      if (item.sectionId) {
        // Scroll to the new section IDs
        scrollToSection(item.sectionId);
      } else if (item.scrollTarget) {
        // Handle existing access section
        if (location.pathname !== '/') {
          window.location.href = `/#${item.scrollTarget}`;
        } else {
          const element = document.getElementById(item.scrollTarget);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        onClose();
      }
    }
  };

  return (
    <nav className={`absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${
      isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}>
      <div className="container mx-auto px-4 py-6">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.title}>
              {item.isScroll ? (
                <button
                  onClick={() => handleMenuClick(item)}
                  className="block text-lg text-gray-700 hover:text-blue-600 transition-colors py-2 w-full text-left"
                >
                  {item.title}
                </button>
              ) : (
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="block text-lg text-gray-700 hover:text-blue-600 transition-colors py-2"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        
        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">お問い合わせ</h3>
          <div className="space-y-3">
            <button
              onClick={handleLineClick}
              className="w-full flex items-center gap-3 bg-[#2ECC71] hover:bg-[#27AE60] text-white px-4 py-3 rounded-lg transition-colors"
            >
              <MessageCircle size={20} />
              <span>LINEで相談</span>
            </button>
            <button
              onClick={handlePhoneClick}
              className="w-full flex items-center gap-3 bg-[#3498DB] hover:bg-[#2980B9] text-white px-4 py-3 rounded-lg transition-colors"
            >
              <Phone size={20} />
              <span>電話で相談</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
