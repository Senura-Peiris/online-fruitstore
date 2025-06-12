import React, { useEffect, useRef, useState } from 'react';
import FruitPlate from '../Images/fruitplate.png'; 

const SplitContent = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white px-6 py-12 flex items-center justify-center"
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

        @keyframes slide-rotate-in {
          0% {
            opacity: 0;
            transform: translateX(100%) rotate(180deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }

        @keyframes slide-in-up {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-slide-up-1 {
          animation: fade-slide-up 1s ease forwards;
          animation-delay: 0s;
          opacity: 0;
        }
        .fade-slide-up-2 {
          animation: fade-slide-up 1s ease forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        .fade-slide-up-3 {
          animation: fade-slide-up 1s ease forwards;
          animation-delay: 1s;
          opacity: 0;
        }

        .slide-rotate-in {
          animation: slide-rotate-in 3s ease forwards;
          opacity: 0;
        }

        .slide-in-up-button {
          animation: slide-in-up 1s ease forwards;
          animation-delay: 2.1s; /* after second paragraph fades in */
          opacity: 0;
        }
      `}</style>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className={`text-4xl md:text-6xl font-bold text-black mb-4 w-100 ${
              visible ? 'fade-slide-up-1' : ''
            }`}
          >
            ONLINE FRUIT STORE
          </h2>
          <p
            className={`text-black text-base md:text-lg mb-6 w-100 text-left ${
              visible ? 'fade-slide-up-2' : ''
            }`}
          >
            Welcome to Fruit Store – Sri Lanka’s trusted online fruit store. We deliver the freshest fruits straight from farms to your doorstep, making healthy living more convenient than ever. From juicy red apples and creamy avocados to sweet oranges and exotic cherries, our wide selection is carefully sourced for quality and taste.
          </p>
          <p
            className={`text-black text-base md:text-lg mb-6 w-100 text-left ${
              visible ? 'fade-slide-up-3' : ''
            }`}
          >
            With easy online ordering, fast delivery, and a commitment to freshness, FreshBite is here to bring nature’s goodness right to your home anytime, anywhere in Sri Lanka.
          </p>
          <button
            className={`bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 text-white font-bold py-3 px-7 rounded-full transition duration-300 hover:scale-105 ${
              visible ? 'slide-in-up-button' : ''
            }`}
          >
            Download the App
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src={FruitPlate}
            alt="Fresh fruits"
            className={visible ? ' w-[600px] slide-rotate-in' : ''}
          />
        </div>
      </div>
    </div>
  );
};

export default SplitContent;
