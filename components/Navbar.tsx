
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart3 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '상세 정보', path: '/details' },
    { name: '구독 플랜', path: '/support' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-[#E42F2F]" />
              <span className="text-xl font-bold text-[#1A2B4C]">SELLINGCHECK</span>
            </Link>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => {
              const isLast = index === navLinks.length - 1;
              if (isLast) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="bg-[#1A2B4C] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#253961] transition-all ml-4"
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path) ? 'text-[#E42F2F]' : 'text-[#1A2B4C] hover:text-[#E42F2F]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1A2B4C] hover:text-[#E42F2F] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link, index) => {
              const isLast = index === navLinks.length - 1;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isLast 
                      ? 'bg-[#1A2B4C] text-white text-center mt-4' 
                      : isActive(link.path) ? 'text-[#E42F2F] bg-red-50' : 'text-[#1A2B4C] hover:text-[#E42F2F] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
