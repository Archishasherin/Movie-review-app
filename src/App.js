import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import moviesData from './data/mockMovies.json';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  // 🔍 Get all unique genres (for dropdown)
  const genres = Array.from(new Set(movies.flatMap((movie) => movie.genre)));

  // ✅ Filter movies based on search + genre
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === '' || movie.genre.includes(selectedGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Movie Review App</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterBar
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genres={genres}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
