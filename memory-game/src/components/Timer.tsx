import React, { useState, useEffect } from "react";

interface TimerProps {
  isActive: boolean;
}

const Timer: React.FC<TimerProps> = ({ isActive }) => {
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let interval: number | null = null; // Cambiado NodeJS.Timeout a number

    if (isActive) {
      interval = window.setInterval(() => { // Explicitamos window.setInterval
        setMilliseconds((prev) => prev + 4);
      }, 4);
    } else if (!isActive && milliseconds !== 0) {
      if (interval) clearInterval(interval); // Aseguramos de limpiar el intervalo
    }

    return () => {
      if (interval) clearInterval(interval); // Limpiamos el intervalo al desmontarse el componente
    };
  }, [isActive, milliseconds]); // Agregado `milliseconds` como dependencia para asegurar la correcta ejecución

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const remainingMs = ms % 1000;

    const format = (num: number, digits: number) =>
      num.toString().padStart(digits, "0");

    return `${format(minutes, 2)}:${format(seconds, 2)}:${format(
      remainingMs,
      3
    )}`;
  };

  return <div className="timer">Time: {formatTime(milliseconds)}</div>;
};

export default Timer;

