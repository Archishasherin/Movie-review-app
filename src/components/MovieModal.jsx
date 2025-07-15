import React from 'react';

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg font-bold"
        >
          ✕
        </button>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="text-sm text-gray-600 mb-1">{movie.year} • {movie.genre.join(', ')}</p>
        <p className="text-gray-700 text-sm">{movie.description}</p>
      </div>
    </div>
  );
}
