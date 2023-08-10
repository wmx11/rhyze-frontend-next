import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const timeLeftInitialState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [timeLeft, setTimeLeft] = useState(timeLeftInitialState);
  const [hasStarted, setHasStarted] = useState(false);

  const targetTime = new Date(
    Date.UTC(2023, 7, 13, 14, 0, 0, 0)
  ) as unknown as number;

  const checkTime = () => {
    const currentTime = new Date() as unknown as number;
    const remainingTime = targetTime - currentTime;

    if (remainingTime <= 0) {
      setHasStarted(true);
      return;
    }

    const timeLeftState = {
      days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
    };

    setTimeLeft(timeLeftState);

    setTimeout(checkTime, 1000);
  };

  const getFormattedTimeLeftString = () => {
    const padNumber = (number: number) => (number < 10 ? `0${number}` : number);
    return `${padNumber(timeLeft.days)}:${padNumber(
      timeLeft.hours
    )}:${padNumber(timeLeft.minutes)}:${padNumber(timeLeft.seconds)}`;
  };

  useEffect(() => {
    checkTime();
  }, []);

  return (
    <span className="p-4 bg-primary text-secondary font-black text-5xl md:text-7xl rounded-[23px]">
      {hasStarted ? <>Let us Rhyze!</> : getFormattedTimeLeftString()}
    </span>
  );
};

export default Countdown;
