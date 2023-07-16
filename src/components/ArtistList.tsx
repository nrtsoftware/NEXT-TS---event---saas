import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FaFacebook, FaInstagram, FaSoundcloud } from 'react-icons/fa';
import artists from './artistlist.data';

const ArtistList = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState<string[]>([]);
  const [filter, setFilter] = useState('');
  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    const uniqueGenres = [...new Set(artists.map((artist) => artist.genre))];
    setGenres(uniqueGenres);
  }, []);

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
    setFilter('');
  };

  const handleFilterClick = (filter: string) => {
    setSelectedGenre('');
    setFilter(filter);
  };

  const filteredArtists = selectedGenre
    ? artists.filter((artist) => artist.genre === selectedGenre)
    : filter === 'playing'
    ? artists.filter((artist) => artist.playing)
    : filter === 'ended'
    ? artists.filter((artist) => artist.ended)
    : filter === 'notStarted'
    ? artists.filter((artist) => !artist.started)
    : artists;

    function borderColor (item:string|null) {
      switch (item){
        case "playing":
          return 'border-green-600'
        case "ended":
          return 'border-red-600'
      };
      return "border-indigo-900";
    }

  return (
    <div>
      <div className="flex flex-col-reverse items-center justify-center flex-wrap-custom">
        <div className="flex justify-center flex-wrap ">
          <button
            className={`px-4 mb-2 mr-2 py-2 rounded-md ${
              selectedGenre === '' && filter === '' ? 'bg-blue-500 text-white' : 'bg-neutral-900 border-indgo-950 text-white shadow'
            }`}
            onClick={() => handleGenreClick('')}
          >
            Todos
          </button>
          {genres.map((genre) => (
            <button
              key={genre}
              className={`px-4 mr-2 mb-2 py-2 rounded-md ${
                selectedGenre === genre ? 'bg-blue-500 text-white' : 'bg-neutral-900 border-indgo-950 text-white shadow'
              }`}
              onClick={() => handleGenreClick(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className={`px-4 mb-2 mr-2 py-2 rounded-md ${
              filter === 'playing' ? 'bg-green-500 text-white' : 'bg-neutral-800 border-indgo-950  text-white shadow'
            }`}
            onClick={() => handleFilterClick('playing')}
          >
          Sets Ocorrendo
          </button>
          <button
            className={`px-4 mb-2 mr-2 py-2 rounded-md ${
              filter === 'ended' ? 'bg-red-500 text-white' : 'bg-neutral-800 border-indgo-950  text-white shadow'
            }`}
            onClick={() => handleFilterClick('ended')}
          >
            Sets Encerrados
          </button>
          <button
            className={`px-4 mb-2 mr-2 py-2 rounded-md ${
              filter === 'notStarted' ? 'bg-blue-500 text-white' : 'bg-neutral-800 border-indgo-950  text-white shadow'
            }`}
            onClick={() => handleFilterClick('notStarted')}
          >
            Sets Não Iniciados
          </button>

        </div>

      </div>
      <ul ref={animationParent} className="mt-4">
        {filteredArtists.map((artist) => (
          <li key={artist.name} className=
            {borderColor(artist.playing ? "playing" : (artist.ended ? "ended" : null)) 
              +` bg-neutral-900 border p-4 mb-2 rounded-md 
              flex-col-reverse sm:flex-row flex justify-between items-center`}>
              
            <div>

            {' '}
          {(() => {
            const initTime: any = new Date(artist.realTime.init_time);
            const currentTime: any = new Date().getTime();
            //const timeUntilEnd = initTime.getTime() - new Date().getTime();
            if(initTime <= currentTime)  {
              return '';
            };
            return '';
          })()}

          
              <div className="flex sm:flex-col flex-row sm:w-auto w-100">
                <div className="sm:flex-col flex my-2 sm:m-0 m-auto">
                  <h3 className="text-xl pr-5 sm:pr-0 font-semibold text-white-900">{artist.name}</h3>
                  <p className=" sm:ml-0 text-white-500 my-auto">{artist.genre}</p>
                </div>
              </div>

              <div className="flex sm:my-2 ">
                <p className=
                  {borderColor(artist.playing ? "playing" : (artist.ended ? "ended" : null)) 
                  +` m-auto border bg-transparent py-1 
                  px-4 rounded-md inline-block text-white uppercase tracking-wider text-s 
                  md:mr-2 font-semibold`}>
                  {artist.timeDisplay}
                </p>
                {artist.playing && artist.started && (
                  <p className="border border-green-400 bg-green-600 py-1 px-4 rounded-md 
                  inline-block text-white uppercase tracking-wider text-s">
                    Tocando agora
                  </p>
                )}
                {artist.ended && artist.started && (
                  <p className="border border-red-400 bg-red-600 py-1 px-4 rounded-md inline-block 
                  text-white uppercase tracking-wider text-s">
                    Set encerrado
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-col-reverse w-100">
            <div className="flex justify-evenly sm:mt-3 sm:mb-0 mb-3">
                {artist.socialMedias.facebook && (
                  <a href={artist.socialMedias.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-white-500 hover:text-blue-400" />
                  </a>
                )}
                {artist.socialMedias.instagram && (
                  <a href={artist.socialMedias.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white-500 hover:text-pink-400" />
                  </a>
                )}
                {artist.socialMedias.soundcloud && (
                  <a href={artist.socialMedias.soundcloud} target="_blank" rel="noopener noreferrer">
                    <FaSoundcloud className="text-white-500 hover:text-orange-400" />
                  </a>
                )}
            </div>
              <Image
                src={'/images/examples/' + artist.photo}
                alt={artist.name}
                className='rounded-full  border border-white/30 shadow-xl shadow-black'
                width={100}
                height={24}
                priority
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
