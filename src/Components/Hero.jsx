import React, { useEffect, useRef, useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import fruitPlate from '../Images/oranges_plate.png';
import leaf1 from '../Images/leaf.png';

const Hero = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
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
    className="w-screen min-h-screen bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 relative overflow-hidden font-sans mt-20 lg:mt-0"
  >
      <style>{`
        @keyframes slide-in-left {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateX(-80px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes rotate-and-slide-in-left-180 {
          0% {
            transform: translateX(100%) rotate(0deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(-180deg);
            opacity: 1;
          }
        }

        @keyframes leaf-fall {
          0% {
            transform: translateY(-300px) rotate(0deg);
            opacity: 0;
          }
          30% {
            transform: translateY(-150px) rotate(90deg);
            opacity: 0.5;
          }
          60% {
            transform: translateY(-50px) rotate(180deg);
            opacity: 0.8;
          }
          100% {
            transform: translate(-150px, -30px) rotate(360deg);
            opacity: 1;
          }
        }

        @keyframes leaf-float {
          0% { transform: translate(-150px, -30px); }
          50% { transform: translate(-100px, 20px); }
          100% { transform: translate(-150px, -30px); }
        }

        .animate-h1 {
          animation: slide-in-left 1s ease-out forwards;
        }

        .animate-p1 {
          animation: fade-in-up 1s ease-out 1s forwards;
        }

        .animate-p2 {
          animation: fade-in-up 1s ease-out 1.8s forwards;
        }

        .animate-button {
          animation: fade-in-up 1s ease-out 2.6s forwards;
        }

        .animate-rotate-and-slide-in-left-180 {
          animation: rotate-and-slide-in-left-180 2s ease-out forwards;
        }

        .animate-leaf-fall {
          animation: leaf-fall 2s ease-in-out 2s forwards, leaf-float 5s ease-in-out 3s infinite;
        }
      `}</style>

      {/* Left Content */}
      <div className="max-w-xl z-10 ml-4">
        <h1
          className={`text-5xl md:text-6xl font-bold text-black leading-tight ${
            visible ? 'animate-h1' : 'opacity-0'
          }`}
        >
          Healthy
          <br />
          Fresh <span className="text-orange-400">Fruits!</span>
        </h1>
        <p className={`text-lg text-black mt-6 ${visible ? 'animate-p1' : 'opacity-0'}`}>
          Order Now For Fresh Healthy Life
        </p>
        <p
          className={`text-sm text-gray-500 mt-3 leading-relaxed ${
            visible ? 'animate-p2' : 'opacity-0'
          }`}
        >
          Healthy and yummy food for fresh morning breakfast.
          <br />
          Eat Daily for good health and mind. Order now and get
          <br />
          20% off on your first order
        </p>
        <button
          className={`mt-6 px-6 py-3 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:scale-105 cursor-pointer text-white rounded-xl shadow-lg flex items-center gap-2 text-lg font-semibold ${
            visible ? 'animate-button' : 'opacity-0'
          }`}
        >
          <FaShoppingBag />
          Order Now
        </button>
      </div>

      {/* Right Image Content */}
      <div
        className={`relative z-0 mt-10 lg:mt-0 flex justify-center w-full lg:w-auto ${
          visible ? '' : 'opacity-0'
        }`}
      >
        <img
          src={fruitPlate}
          alt="Fruit Plate"
          className={`drop-shadow-2xl relative z-10 mr-0 lg:mr-20
            w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px]
            ${visible ? 'animate-rotate-and-slide-in-left-180' : ''}`}
        />
        <img
          src={leaf1}
          alt="leaf"
          className={`absolute top-0 left-0 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[230px] ${
            visible ? 'animate-leaf-fall' : ''
          }`}
          style={{ right: '-90px', top: '-20px' }}
        />
      </div>
    </section>
  );
};

export default Hero;
