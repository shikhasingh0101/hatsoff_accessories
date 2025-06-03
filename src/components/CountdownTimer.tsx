
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  title?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, title = "Special Offer Ends In" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">
          <div className="bg-white text-black rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
          </div>
          <div className="text-sm mt-1">Days</div>
        </div>
        <div className="text-center">
          <div className="bg-white text-black rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
          </div>
          <div className="text-sm mt-1">Hours</div>
        </div>
        <div className="text-center">
          <div className="bg-white text-black rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
          </div>
          <div className="text-sm mt-1">Minutes</div>
        </div>
        <div className="text-center">
          <div className="bg-white text-black rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
          </div>
          <div className="text-sm mt-1">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
