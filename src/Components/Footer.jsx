import React, { useEffect, useRef, useState } from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa6';

function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Stop observing after visible to avoid retrigger
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className="bg-pink-100 py-25 px-8 h-[30vh] w-screen"
    >
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fade-in-up 1.5s ease forwards;
          opacity: 0;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Logo/Brand */}
        <h2
          className={`text-[20px] md:text-[30px] font-bold flex items-center space-x-1 cursor-pointer hover:scale-105 ${
            visible ? 'fade-in-up' : ''
          }`}
        >
          <span className="text-rose-600">FRUIT</span>
          <span className="text-orange-500">STORE</span>
          <span className="text-green-500 text-xl">🍃</span>
        </h2>

        {/* Right side - Social Icons */}
        <ul
          className={`flex items-center space-x-6 text-gray-700 text-[25px] md:text-[30px] ${
            visible ? 'fade-in-up' : ''
          }`}
        >
          <li><FaInstagram className="cursor-pointer hover:scale-105" /></li>
          <li><FaFacebook className="cursor-pointer hover:scale-105" /></li>
          <li><FaYoutube className="cursor-pointer hover:scale-105" /></li>
          <li><FaTwitter className="cursor-pointer hover:scale-105" /></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
