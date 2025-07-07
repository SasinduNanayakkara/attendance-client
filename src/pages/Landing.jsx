import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


function Landing() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });
  const navigate = useNavigate();

  const handleRSVP = () => {
    navigate("/home");
  }

  useEffect(() => {
    const weddingDate = new Date("2025-10-29T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / (1000 * 60)) % 60),
          secs: Math.floor((diff / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white font-serif">
      {/* Mobile View Background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/wedding-setting_1127-2968.jpg?semt=ais_hybrid&w=740')",
          opacity: 0.7,
        }}
      ></div>

      {/* Desktop View Background */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6229b4f7f06f145bbd8a273d/66ff9b7de476b4dcc33f9c57_zoom-floral-fairytale-wedding-background.jpg')",
          opacity: 0.7,
        }}
      ></div>

      {/* Main Content */}

      {/* RSVP Card */}
      <motion.div
        className="relative z-10 bg-white/50 backdrop-blur-md rounded-3xl p-10 w-[90%] max-w-2xl text-center shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl sm:text-5xl font-wedding bg-gradient-to-r from-[#4C291E] via-[#FFB22C] to-[#4C291E] inline-block text-transparent bg-clip-text font-extrabold mb-4 ">
          Welcome to Our Wedding
        </h1>

        <p className="text-md sm:text-lg italic text-[#976000] mb-6">
          Surrounded by love, laughter, and all the people who mean the world to us, we can't wait to say "I do." <br />
          Please join us as we begin this beautiful journey together.
        </p>

        <p className="italic text-xl mb-6 text-gray-600">Wednesday, 29<sup>th</sup> October</p>

        <div className="flex justify-center gap-6 text-3xl sm:text-4xl font-bold text-yellow-800 mb-6">
          <div className="text-center">
            <div>{String(timeLeft.days).padStart(2, "0")}</div>
            <div className="text-sm mt-1">D</div>
          </div>
          <div>:</div>
          <div className="text-center">
            <div>{String(timeLeft.hours).padStart(2, "0")}</div>
            <div className="text-sm mt-1">H</div>
          </div>
          <div>:</div>
          <div className="text-center">
            <div>{String(timeLeft.mins).padStart(2, "0")}</div>
            <div className="text-sm mt-1">M</div>
          </div>
        </div>

        <button
          onClick={handleRSVP}
          className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-full text-lg hover:scale-105 transition"
        >
          Get Invitation
        </button>
      </motion.div>

      <div className="absolute bottom-5 text-sm text-gray-700 font-medium">
        Sasindu <span className="text-red-500">♥</span> Sanduni
      </div>
    </div>
  );
}

export default Landing;
