import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Button } from "antd";
import { motion } from "framer-motion";
function Landing() {
  const weddingDate = new Date("2025-10-29T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
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
    <div className="relative min-h-screen flex flex-col items-center bg-black text-white font-serif">
      {/* Mobile View Background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/wedding-setting_1127-2968.jpg?semt=ais_hybrid&w=740')",
          opacity: 0.3,
        }}
      ></div>

      {/* Desktop View Background */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6229b4f7f06f145bbd8a273d/66ff9b7de476b4dcc33f9c57_zoom-floral-fairytale-wedding-background.jpg')",
          opacity: 0.3,
        }}
      ></div>

      {/* Main Content */}

      {/* RSVP Card */}
      <motion.div
        className="relative z-10 mt-6 rounded-2xl shadow-lg w-full max-w-md mx-4 bg-white/30 backdrop-blur-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card bordered={false} className="bg-transparent opacity-1 shadow-none p-4">
          <div className="p-4">
            <h1 className="text-7xl sm:text-4xl font-extrabold text-center">
            Sasindu
            </h1>
            <h1 className="text-7xl sm:text-4xl font-extrabold text-center">
              &
            </h1>
            <h1 className="text-7xl sm:text-4xl font-extrabold text-center">
            Sanduni
            </h1>
            <p className="text-xl font-bold mt-8 text-center">
              Wednesday, October 29, 2025
            </p>
            <p className="text-xl font-bold mt-2 text-center">
              {`${timeLeft.days} Days ${timeLeft.hours} Hrs ${timeLeft.mins} Mins ${timeLeft.secs} Secs`}
            </p>
            <Button
              type="primary"
              className="w-full mt-3 bg-green-600 border-none"
            >
              RSVP
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

export default Landing;
