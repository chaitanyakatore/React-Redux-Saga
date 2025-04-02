import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 border rounded-md disabled:opacity-50"
      >
        <ChevronLeft size={20} />
      </button>
      
      <div className="flex space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`
              px-4 py-2 rounded 
              ${currentPage === index + 1 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700'}
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
      <button 
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 border rounded-md disabled:opacity-50"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};