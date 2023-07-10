import React, { useEffect, useState } from 'react';

function Timer(data: any) {
  const [timeRemaining, setTimeRemaining] = useState('');
  useEffect(() => {
    const endDate = new Date(data.data).getTime();
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDiff = endDate - currentTime;

      if (timeDiff < 0) {
        clearInterval(timer);
        setTimeRemaining("Tempo expirado!");
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeRemaining(
          (days !== 0 ? days + "d " : "") +
          (hours !== 0 ? hours + "h " : "") +
          minutes + "m " +
          seconds + "s"
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="timer">
      {timeRemaining && timeRemaining}
    </div>
  );
}

export default Timer;