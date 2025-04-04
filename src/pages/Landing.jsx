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
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6229b4f7f06f145bbd8a273d/66ff9b7de476b4dcc33f9c57_zoom-floral-fairytale-wedding-background.jpg')",
          opacity: 0.3,
        }}
      ></div>

      {/* Main Content */}

      {/* RSVP Card */}
      <motion.div
        className="relative z-10 mt-6 p-4 bg-white text-black rounded-2xl shadow-lg w-2/4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <div className="p-4">
           
              <h1 className="text-4xl sm:text-4xl font-extrabold">
                Sasindu & Sanduni
              </h1>
              <p className="text-lg mt-2">Wednesday, October 29, 2025</p>
              <p className="text-md mt-1">{`${timeLeft.days} Days ${timeLeft.hours} Hrs ${timeLeft.mins} Mins ${timeLeft.secs} Secs`}</p>
              <Button className="mt-4 border border-white px-4 py-2">
                Don't forget to RSVP
              </Button>
            
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
