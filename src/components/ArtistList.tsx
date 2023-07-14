import React, { useState, useEffect, useRef } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const artists = [
  { name: 'Artista 1', genre: 'Pop', playing: true, ended: false, started: true },
  { name: 'Artista 2', genre: 'Rock', playing: false, ended: false, started: false },
  { name: 'Artista 3', genre: 'Jazz', playing: false, ended: false, started: false },
  { name: 'Artista 4', genre: 'Hip Hop', playing: false, ended: false, started: false },
  { name: 'Artista 5', genre: 'Reggae', playing: false, ended: false, started: false },
  { name: 'Artista 6', genre: 'Jazz', playing: false, ended: false, started: false },
  { name: 'Artista 7', genre: 'Jazz', playing: false, ended: false, started: false },
  { name: 'Artista 8', genre: 'Jazz', playing: false, ended: false, started: false },
  { name: 'Artista 9', genre: 'Hip Hop', playing: false, ended: false, started: false },
  { name: 'Artista 10', genre: 'Hip Hop', playing: false, ended: false, started: false },
  { name: 'Artista 11', genre: 'Jazz', playing: false, ended: false, started: false },
  { name: 'Artista 12', genre: 'Psytrance', playing: false, ended: false, started: false },
  { name: 'Artista 13', genre: 'Jazz', playing: false, ended: false, started: false },
  { name: 'Artista 14', genre: 'Jazz', playing: false, ended: false, started: false },
  { name: 'Artista 15', genre: 'Hip Hop', playing: false, ended: true, started: true },
];

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
      <div className="flex space-x-2">
        <button
          className={`px-4 py-2 rounded-md ${
            selectedGenre === '' && filter === '' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
          }`}
          onClick={() => handleGenreClick('')}
        >
          Todos
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            className={`px-4 py-2 rounded-md ${
              selectedGenre === genre ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black shadow'
            }`}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </button>
        ))}
        <button
          className={`px-4 py-2 rounded-md ${
            filter === 'playing' ? 'bg-green-500 text-white' : 'bg-green-200 text-black shadow'
          }`}
          onClick={() => handleFilterClick('playing')}
        >
          Sets Ocorrendo
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            filter === 'ended' ? 'bg-red-500 text-white' : 'bg-red-200 text-black shadow'
          }`}
          onClick={() => handleFilterClick('ended')}
        >
          Sets Encerrados
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            filter === 'notStarted' ? 'bg-blue-500 text-white' : 'bg-blue-200 text-black shadow'
          }`}
          onClick={() => handleFilterClick('notStarted')}
        >
          Sets Não Iniciados
        </button>
      </div>
      <ul ref={animationParent} className="mt-4">
        {filteredArtists.map((artist) => (
          <li key={artist.name} className="bg-white p-4 mb-2 rounded-md">
            <h3 className="font-semibold text-gray-900">{artist.name}</h3>
            <p className="text-gray-500">{artist.genre}</p>
            <div>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
