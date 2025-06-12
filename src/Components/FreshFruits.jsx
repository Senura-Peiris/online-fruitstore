import React, { useEffect, useRef, useState } from 'react';
import FreshFruitbg from '../Images/freshbg.jpg';

const FreshFruits = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-screen min-h-screen px-6 py-12 flex items-center justify-center bg-white">
      <style>{`
        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-in-right-1 {
          animation: slide-in-right 1s ease forwards;
          animation-delay: 0s;
          opacity: 0;
        }

        .slide-in-right-2 {
          animation: slide-in-right 1s ease forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }

        .slide-in-right-3 {
          animation: slide-in-right 1s ease forwards;
          animation-delay: 1s;
          opacity: 0;
        }
      `}</style>

      <div
        ref={containerRef}
        className="relative w-full max-w-7xl rounded-3xl border border-gray-300 shadow-lg overflow-hidden flex flex-col md:flex-row-reverse"
        style={{
          height: '58vh',
          backgroundImage: `url(${FreshFruitbg})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Right Side Content with animation */}
        <div className="relative z-10 w-screen md:w-1/2 px-10 md:px-20 py-12 flex flex-col justify-center text-left ml-30">
          <h1
            className={`text-3xl md:text-5xl font-extrabold text-black leading-tight md:text-left text-center ${
              visible ? 'slide-in-right-1' : ''
            }`}
          >
            GET FRESH <br /> FRUITS TODAY
          </h1>
          <p
            className={`text-black mt-4 max-w-md ml-auto md:text-left mr-6 text-center ${
              visible ? 'slide-in-right-2' : ''
            }`}
          >
            Get fresh fruits today and enjoy the taste of nature! From crisp apples to juicy oranges, our fruits are hand-picked for quality and delivered straight to your door. Shop now and bring home the freshness your family deserves.
          </p>
          <button
            className={`mt-6 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:scale-105 hover:from-rose-500 hover:to-rose-700 text-white font-medium py-3 px-6 rounded-full shadow-lg flex items-center justify-center gap-2 transition-all duration-300 mx-auto md:ml-0 mr-auto ${
              visible ? 'slide-in-right-3' : ''
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 10-8 0v4M5 11h14l-1.34 9.38A2 2 0 0115.7 22H8.3a2 2 0 01-1.96-1.62L5 11z"
              />
            </svg>
            Order Now
          </button>
        </div>

        {/* Left Empty Side */}
        <div className="w-full md:w-1/2"></div>
      </div>
    </div>
  );
};

export default FreshFruits;
