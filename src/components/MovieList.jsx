import React, { useState } from 'react';
import MovieModal from './MovieModal';

export default function MovieList({ movies }) {
  const [ratings, setRatings] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleRating = (movieId, rating) => {
    setRatings({ ...ratings, [movieId]: rating });
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="border p-4 rounded shadow bg-white cursor-pointer hover:shadow-md transition"
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
            <p className="text-sm text-gray-600 mb-2">
              {movie.year} • {movie.genre.join(', ')}
            </p>
            <p className="text-sm">{movie.description.substring(0, 60)}...</p>

            <div className="mt-3">
              <p className="font-medium text-sm">Your Rating:</p>
              <div className="flex space-x-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent modal open
                      handleRating(movie.id, star);
                    }}
                    className={`text-2xl cursor-pointer ${
                      ratings[movie.id] >= star ? 'text-yellow-400' : 'text-gray-400'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              {ratings[movie.id] && (
                <p className="text-sm text-gray-500 mt-1">
                  You rated: {ratings[movie.id]} / 5
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </>
  );
}
