import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <nav
      className="absolute top-0 left-6 right-6 lg:left-24 lg:right-24 flex items-center justify-between text-gray-700 text-sm font-medium z-50 h-[80px] bg-transparent"
    >
      {/* Logo aligned left */}
      <div className="text-2xl font-bold">
        <span className="text-rose-600">FRUIT </span>
        <span className="text-orange-500">STORE</span>
        <span className="text-green-500 ml-1">🍃</span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center gap-8 cursor-pointer">
        <span>Home</span>
        <span>Products</span>
        <span>About</span>
        <span>Shop</span>
        <span>Contacts</span>
        <FaShoppingCart className="text-xl" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <p
        className="lg:hidden text-black text-[25px] focus:outline-none mr-2 cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}

      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </p>

      {/* Mobile Menu: slides down/up below navbar */}
      <div
        className={`
          absolute  mt-108 left-0 right-0 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 text-white 
          flex flex-col items-center gap-6 py-6 rounded-2xl
          transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-y-0' : '-translate-y-110'}
          lg:hidden
          z-40
        `}
      >
        {/* Close icon inside mobile menu (top-right corner) */}

        {/* Each menu item closes menu when clicked */}
        <span className="cursor-pointer hover:text-yellow-300 text-[20px] hover:scale-110 hover:underline" onClick={toggleMenu}>Home</span>
        <span className="cursor-pointer hover:text-yellow-300 text-[20px] hover:scale-110 hover:underline" onClick={toggleMenu}>Products</span>
        <span className="cursor-pointer hover:text-yellow-300 text-[20px] hover:scale-110 hover:underline" onClick={toggleMenu}>About</span>
        <span className="cursor-pointer hover:text-yellow-300 text-[20px] hover:scale-110 hover:underline" onClick={toggleMenu}>Shop</span>
        <span className="cursor-pointer hover:text-yellow-300 text-[20px] hover:scale-110 hover:underline" onClick={toggleMenu}>Contacts</span>
        <FaShoppingCart className="text-xl cursor-pointer hover:text-yellow-300 text-[20px] hover:scale-110 hover:underline" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
