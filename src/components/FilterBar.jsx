import React from 'react';

export default function FilterBar({ selectedGenre, setSelectedGenre, genres }) {
  return (
    <div className="mb-4">
      <label className="mr-2 font-medium">Filter by Genre:</label>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        <option value="">All</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
}
