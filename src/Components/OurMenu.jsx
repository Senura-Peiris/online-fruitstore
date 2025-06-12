import React, { useEffect, useRef, useState } from 'react';

// Menu item images
import apple from '../Images/apple.png';
import orange from '../Images/orange.png';
import avocado from '../Images/avacado.png';
import cherry from '../Images/cherry.png';

const Hero = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans bg-white overflow-x-hidden">
      <style>{`
        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        .slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
          opacity: 0;
        }

        .slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
          opacity: 0;
        }

        .delay-0 { animation-delay: 0s; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
      `}</style>

      {/* Menu Section */}
      <section ref={containerRef} className="px-6 lg:px-24 mt-12 mb-24">
      <h2
  className={`text-[30px] font-bold text-black mb-6 text-center md:text-left mx-auto md:mx-0 ${visible ? 'slide-in-left' : ''}`}
>
  OUR MENU
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Apple Card */}
          <div
            className={`bg-white rounded-3xl shadow-md flex items-center p-4 gap-4 ${
              visible ? 'slide-in-right delay-0' : ''
            }`}
          >
            <img src={apple} alt="Apple" className="w-20 h-20 object-contain -mt-12" />
            <div>
              <p className="font-semibold text-black">Fresh Red Apples</p>
              <p className="text-orange-500 font-medium mt-1">Rs. 1000</p>
            </div>
          </div>

          {/* Orange Card */}
          <div
            className={`bg-white rounded-3xl shadow-md flex items-center p-4 gap-4 ${
              visible ? 'slide-in-right delay-1' : ''
            }`}
          >
            <img src={orange} alt="Orange" className="w-20 h-20 object-contain -mt-12" />
            <div>
              <p className="font-semibold text-black">Fresh Oranges</p>
              <p className="text-orange-500 font-medium mt-1">Rs. 650</p>
            </div>
          </div>

          {/* Avocado Card */}
          <div
            className={`bg-white rounded-3xl shadow-md flex items-center p-4 gap-4 ${
              visible ? 'slide-in-right delay-2' : ''
            }`}
          >
            <img src={avocado} alt="Avocado" className="w-20 h-20 object-contain -mt-12" />
            <div>
              <p className="font-semibold text-black">Fresh Avocado</p>
              <p className="text-orange-500 font-medium mt-1">Rs. 800</p>
            </div>
          </div>

          {/* Cherry Card */}
          <div
            className={`bg-white rounded-3xl shadow-md flex items-center p-4 gap-4 ${
              visible ? 'slide-in-right delay-3' : ''
            }`}
          >
            <img src={cherry} alt="Cherries" className="w-20 h-20 object-contain -mt-12" />
            <div>
              <p className="font-semibold text-black">Fresh Cherries</p>
              <p className="text-orange-500 font-medium mt-1">Rs. 3000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
