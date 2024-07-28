'use client';

import { useState } from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-12">
      <ul className="inline-flex items-center">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-300 text-gray-50' : 'bg-gray-200 text-black'}`}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-3 py-1 rounded-md mx-1 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-300 text-gray-50' : 'bg-gray-200 text-black'}`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
