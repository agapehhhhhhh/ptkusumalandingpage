import { useState } from 'react';
import { Facebook, Linkedin, Instagram, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 max-w-7xl left-0 right-0 mx-auto">
      <div className="flex items-center justify-between">
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className={`text-sm font-medium ${link.label === 'Home' ? 'text-[#991B1B] font-bold border-b-2 border-[#EF4444]' : 'text-gray-500 hover:text-[#991B1B]'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

         {/* Mobile Menu Button */}
         <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#991B1B]">
               {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
         </div>

        {/* Logo */}
        <div className="text-2xl font-serif font-bold text-[#991B1B]">
          Kusuma Soemantri Putra
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="p-2 border border-[#991B1B] rounded-full hover:bg-[#EF4444] hover:border-[#EF4444] transition-colors">
            <Facebook size={18} className="text-[#991B1B] hover:text-white" />
          </a>
          <a href="#" className="p-2 border border-[#991B1B] rounded-full hover:bg-[#EF4444] hover:border-[#EF4444] transition-colors">
            <Linkedin size={18} className="text-[#991B1B] hover:text-white" />
          </a>
          <a href="#" className="p-2 border border-[#991B1B] rounded-full hover:bg-[#EF4444] hover:border-[#EF4444] transition-colors">
            <Instagram size={18} className="text-[#991B1B] hover:text-white" />
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col space-y-4 rounded-b-xl border-t border-gray-100">
             {NAV_LINKS.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-[#991B1B] font-medium py-2 hover:bg-red-50 px-4 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex space-x-4 px-4 pt-2 border-t border-gray-100 mt-2">
                 <a href="#"><Facebook size={20} className="text-[#991B1B]" /></a>
                 <a href="#"><Linkedin size={20} className="text-[#991B1B]" /></a>
                 <a href="#"><Instagram size={20} className="text-[#991B1B]" /></a>
              </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
