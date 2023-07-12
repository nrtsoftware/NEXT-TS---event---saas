import React, { useEffect, useState } from 'react';

interface Artist {
  artist_name: string;
  img: string;
  link: string;
  socialMedias: {
    youtube: string;
    soundcloud: string;
  };
}

interface SetData {
  artist: Artist;
  init_time: string;
  end_time: string;
  ended: boolean;
  started: boolean;
}

interface LineupProps {
  data: SetData[];
}

function Lineup({ data }: LineupProps) {
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [currentSet, setCurrentSet] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();

      for (let i = 0; i < data.length; i++) {
        const initTime = new Date(data[i].init_time).getTime();
        const endTime = new Date(data[i].end_time).getTime();
        console.log(currentTime, initTime, endTime, currentTime < initTime)
        if (currentTime < initTime) {
          setCurrentSet(null); // Antes do início do set atual
          setTimeRemaining(formatTimeDiff(initTime - currentTime));
          break;
        } else if (currentTime >= initTime && currentTime <= endTime) {
          setCurrentSet(i); // Set em andamento
          setTimeRemaining(formatTimeDiff(currentTime - initTime));
          break;
        } else if (i === data.length - 1) {
          console.log('set terminado')
          setCurrentSet(null); // Depois do término do último set
          setTimeRemaining("Tempo expirado!");
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeDiff = (timeDiff: number): string => {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);


    const daysFormatted = days === 0 ? '' : days + ` dia${days > 1 ? 's' : ''}, `;
    const hoursFormatted = hours === 0 ? '' : hours + ` hora${hours > 1 ? 's' : ''}, `;
    const minutesFormatted = minutes === 0 ? '' : minutes + ` minuto${minutes > 1 ? 's' : ''} e `;
    const secondsFormatted = seconds === 0 ? '' : seconds + ` segundo${seconds > 1 ? 's' : ''}`;


    return daysFormatted + hoursFormatted + minutesFormatted + secondsFormatted;
  };

  return (
    <div id="lineup">
      {currentSet === null && <div>Encerrou.</div>}
      {currentSet !== null && (
        <div>
          O set atual é de {data[currentSet].artist.artist_name}.
          {timeRemaining && `Em andamento. Já se passaram ${timeRemaining} de set.`}
          {' '}
          {(() => {
            const endTime = new Date(data[currentSet].end_time);
            const timeUntilEnd = endTime.getTime() - new Date().getTime();
            const timeUntilEndFormatted = formatTimeDiff(timeUntilEnd);

            return (
              <span>
                Terminará hoje daqui a {timeUntilEndFormatted}.
              </span>
            );
          })()}
        </div>
      )}
    </div>
  );
}

export default Lineup;
