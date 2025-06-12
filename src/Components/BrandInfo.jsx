import React, { useEffect, useRef, useState } from 'react';
import brandImage from '../Images/brand_info.png';

const BrandInfo = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#fff4ec] py-16 px-6 lg:px-24 font-sans"
    >
      <style>{`
        @keyframes fade-slide-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-out {
          0% {
            opacity: 0;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .fade-up-1 {
          animation: fade-slide-up 1s ease forwards;
          animation-delay: 0s;
          opacity: 0;
        }
        .fade-up-2 {
          animation: fade-slide-up 1s ease forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }
        .fade-up-3 {
          animation: fade-slide-up 1s ease forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }
        .fade-up-4 {
          animation: fade-slide-up 1s ease forwards;
          animation-delay: 1.2s;
          opacity: 0;
        }

        .scale-out {
          animation: scale-out 1.2s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
        <img
  src={brandImage}
  alt="Brand Visual"
  className={`w-[70%] sm:w-[50%] md:w-[70%] h-auto object-contain cursor-pointer hover:scale-105 ${visible ? 'scale-out' : ''}`}
/>
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className={`text-5xl font-bold text-black mb-6 cursor-pointer ${visible ? 'fade-up-1' : ''}`}>
            BRAND INFO
          </h1>

          <p className={`text-black text-base leading-relaxed mb-4 cursor-pointer ${visible ? 'fade-up-2' : ''}`}>
           Welcome to Fruit Store — your go-to destination for farm-fresh goodness. We bring you the finest selection of fruits, hand-picked for quality and delivered straight to your doorstep anywhere in Sri Lanka.
          </p>
          <p className={`text-black text-base leading-relaxed mb-8 cursor-pointer ${visible ? 'fade-up-3' : ''}`}>
            Whether it's crisp red apples, creamy avocados, juicy oranges, or sweet cherries, we believe in offering only the best nature has to offer
          </p>

          <button
            className={`px-8 py-3 text-white font-semibold bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:scale-105 cursor-pointer rounded-xl shadow-[0_8px_16px_rgba(221,44,82,0.3)] hover:bg-[#c72448] transition duration-200 cursor-pointer hover:scale-105 ${
              visible ? 'fade-up-4' : ''
            }`}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandInfo;
