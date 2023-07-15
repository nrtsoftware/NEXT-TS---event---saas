import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { FaFacebook, FaInstagram, FaSoundcloud } from 'react-icons/fa';

const artists = [
  { name: 'Artista 1', time: '18h30', genre: 'Pop', playing: true, ended: false, started: true, socialMedias: {
    facebook: 'sefoda',  time: '18h30',  instagram: 'style', soundcloud: 'fuacaquente'
  }, photo: 'artist1.png' },
  { name: 'Artista 2',  time: '18h30',  genre: 'Rock', playing: false, ended: false, started: false,socialMedias: {
    facebook: 'kopdspo', instagram: 'saddsa', soundcloud: 'asddsa'
  }, photo: 'artist2.png' },
  { name: 'Artista 3',  time: '18h30',  genre: 'Jazz', playing: false, ended: false, started: false, socialMedias: {
    facebook: 'saddsa', instagram: '', soundcloud: ''
  }, photo: 'artist3.png' },
  { name: 'Artista 4',  time: '18h30',  genre: 'Hip Hop', playing: false, ended: false, started: false, socialMedias: {
    facebook: '', instagram: 'dsadas', soundcloud: ''
  }, photo: 'artist5.png' },
  { name: 'Artista 5',  time: '18h30',  genre: 'Reggae', playing: false, ended: false, started: false, socialMedias: {
    facebook: '', instagram: '', soundcloud: 'dasdsa'
  }, photo: 'artist6.png' },
  { name: 'Artista 6',  time: '18h30',  genre: 'Jazz', playing: false, ended: false, started: false, socialMedias: {
    facebook: 'dsadsa', instagram: '', soundcloud: ''
  }, photo: 'artist7.png' },
  { name: 'Artista 7',  time: '18h30',  genre: 'Jazz', playing: false, ended: false, started: false, socialMedias: {
    facebook: '', instagram: '', soundcloud: ''
  }, photo: 'artist8.png' },
  { name: 'Artista 8',  time: '18h30', genre: 'Jazz', playing: false, ended: false, started: false, socialMedias: {
    facebook: '', instagram: '', soundcloud: ''
  }, photo: '' },
  { name: 'Artista 9',  time: '18h30',  genre: 'Hip Hop', playing: false, ended: false, started: false, socialMedias: {
    facebook: '', instagram: '', soundcloud: ''
  }, photo: 'artist9.png' },
  { name: 'Artista 10',  time: '18h30',  genre: 'Hip Hop', playing: false, ended: false, started: false, socialMedias: {
    facebook: '', instagram: '', soundcloud: ''
  }, photo: 'artist10.png' },
  { name: 'Artista 11',  time: '18h30', genre: 'Jazz', playing: false, ended: false, started: false, socialMedias: {
    facebook: '', instagram: '', soundcloud: ''
  }, photo: 'artist11.png' },
  { name: 'Artista 12',  time: '18h30',  genre: 'Psytrance', playing: false, ended: false, started: false, socialMedias: {
    facebook: '', instagram: '', soundcloud: ''
  }, photo: '' },
  { name: 'Artista 13',  time: '18h30',  genre: 'Jazz', playing: false, ended: false, started: false, socialMedias: {
    facebook: '', instagram: '', soundcloud: ''
  }, photo: '' },
  { name: 'Artista 14',  time: '18h30',  genre: 'Jazz', playing: false, ended: false, started: false, socialMedias: {
    facebook: '', instagram: '', soundcloud: ''
  }, photo: '' },
  { name: 'Artista 15',  time: '18h30', genre: 'Hip Hop', playing: false, ended: true, started: true,socialMedias: {
    facebook: '', instagram: '', soundcloud: ''
  }, photo: '' },
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
      <div className="flex flex-col-reverse items-center justify-center flex-wrap-custom">
        <div>
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
        <div>

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
