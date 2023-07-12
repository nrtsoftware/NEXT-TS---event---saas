import React, { useState, useEffect } from 'react';

const artists = [
  { name: 'Artista 1', genre: 'Pop' },
  { name: 'Artista 2', genre: 'Rock' },
  { name: 'Artista 3', genre: 'Jazz' },
  { name: 'Artista 4', genre: 'Hip Hop' },
  { name: 'Artista 5', genre: 'Reggae' },
  { name: 'Artista 6', genre: 'Jazz' },
  { name: 'Artista 7', genre: 'Jazz' },
  { name: 'Artista 8', genre: 'Jazz' },
  { name: 'Artista 9', genre: 'Hip Hop' },
  { name: 'Artista 10', genre: 'Hip Hop' },
  { name: 'Artista 11', genre: 'Jazz' },
  { name: 'Artista 12', genre: 'Jazz' },
  { name: 'Artista 13', genre: 'Jazz' },
  { name: 'Artista 14', genre: 'Jazz' },
  { name: 'Artista 15', genre: 'Hip Hop' },
];

const ArtistList = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    const uniqueGenres = [...new Set(artists.map((artist) => artist.genre))];
    setGenres(uniqueGenres);
  }, []);

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
  };

  const filteredArtists = selectedGenre
    ? artists.filter((artist) => artist.genre === selectedGenre)
    : artists;

  return (
    <div>
      <div className="flex space-x-2">
        <button
          className={`px-4 py-2 rounded-md ${
            selectedGenre === '' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleGenreClick('')}
        >
          Todos
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            className={`px-4 py-2 rounded-md ${
              selectedGenre === genre ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {filteredArtists.map((artist) => (
          <div key={artist.name} className="bg-white p-4 mb-2 rounded-md">
            <h3 className="font-semibold text-gray-900">{artist.name}</h3>
            <p className="text-gray-500">{artist.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;
