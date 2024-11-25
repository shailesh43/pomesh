'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import timerIcon from '../assets/timer.svg'
import breakIcon from '../assets/break.svg'
import playIcon from '../assets/play.svg'
import pauseIcon from '../assets/pause.svg'
import resetIcon from '../assets/reset.svg' // Assume you have a reset icon

const TimerComponent = () => {
  const [time, setTime] = useState(45 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreakMode, setIsBreakMode] = useState(false);
  const [initialTime, setInitialTime] = useState(45 * 60);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      alert(isBreakMode ? "Break time's up!" : "Timer completed!");
      setIsRunning(false);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, time, isBreakMode]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setTime(initialTime);
    setIsRunning(false);
  };

  const handleTimerClick = () => {
    if (isBreakMode && isRunning) {
      const confirmTransition = window.confirm("Do you want to cancel your break?");
      if (!confirmTransition) return;
    }
    setTime(45 * 60);
    setInitialTime(45 * 60);
    setIsBreakMode(false);
    setIsRunning(false);
  };

  const handleBreakClick = () => {
    if (!isBreakMode && isRunning) {
      const confirmTransition = window.confirm("Do you want to cancel your timer?");
      if (!confirmTransition) return;
    }
    setTime(5 * 60);
    setInitialTime(5 * 60);
    setIsBreakMode(true);
    setIsRunning(false);
  };

  return (
    <div className="text-center mt-12">
      <div className="flex justify-center gap-4 mb-4 font-semibold text-xl">
        <button
          onClick={handleTimerClick}
          className={`timer py-1 px-3 rounded-md flex items-center gap-2 ${!isBreakMode ? 'bg-black text-white' : 'none'}`}
        >
          <Image className="images" src={timerIcon} width={25} height={25} quality={100} alt="Timer icon" />
          <div>Timer</div>
        </button>
        <button
          onClick={handleBreakClick}
          className={`break py-1 px-3 rounded-md flex items-center gap-2 ${isBreakMode ? 'bg-black text-white' : 'none'}`}
        >
          <Image src={breakIcon} width={25} height={25} quality={100} alt="Break icon" />
          <div>Break</div>
        </button>
      </div>
      <div>
        <h1 className="text-8xl font-bold">{formatTime()}</h1>
      </div>
      <div className="mt-4 flex justify-center items-center gap-4 ">
        <button
          onClick={toggleTimer}
          disabled={time === 0}
          className={`${time === 0 ? 'playAndpause py-1 px-8 rounded-lg cursor-not-allowed opacity-50' : 'playAndpause py-1 px-8 rounded-lg cursor-pointer'}`}
        >
          <Image
            src={isRunning ? pauseIcon : playIcon}
            alt={isRunning ? "Pause Timer" : "Play Timer"}
            width={50}
            height={50}
            className={time === 0 ? 'opacity-50' : ''}
          />
        </button>
        {isRunning && (
          <button onClick={resetTimer} className="cursor-pointer reset">
            <Image
              src={resetIcon}
              alt="Reset Timer"
              width={40}
              height={40}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default TimerComponent;