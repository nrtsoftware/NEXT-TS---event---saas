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
          <li key={artist.name} className="bg-neutral-900 border border-indigo-950 p-4 mb-2 rounded-md flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-white-900">{artist.name}</h3>
              <p className="text-white-500">{artist.genre}</p>

              <div className="flex">
                <p className="border border-indigo-900 bg-transparent py-1 px-4 rounded-md inline-block text-white uppercase tracking-wider text-xs mr-2">{artist.time}</p>
                {artist.playing && artist.started && (
                  <p className="border border-green-400 bg-green-600 py-1 px-4 rounded-md inline-block text-white uppercase tracking-wider text-xs">
                    Tocando agora
                  </p>
                )}
                {artist.ended && artist.started && (
                  <p className="border border-red-400 bg-red-600 py-1 px-4 rounded-md inline-block text-white uppercase tracking-wider text-xs">
                    Set encerrado
                  </p>
                )}
              </div>
            </div>

            <div>
            <div className="flex mx-auto justify-evenly mb-3 w-100">
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
                className='rounded-full border-4 border-blue-400 border-opacity-44 shadow-md'
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
