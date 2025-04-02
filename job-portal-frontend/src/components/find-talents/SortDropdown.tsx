import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Import the down arrow icon

export const SortDropdown = ({ onSort }) => {
  const [sortOption, setSortOption] = useState('relevance');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef(null);

  const handleOptionClick = (value) => {
    setSortOption(value);
    onSort(value);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block" ref={dropdownRef}> {/* Use inline-block */}
      <button
        onClick={toggleOpen}
        className="flex items-center border border-blue-600 rounded-md px-4 py-2 text-blue-600 bg-transparent focus:outline-none w-40 justify-between" // Fixed width and space between items
      >
        <span>{/* Wrap the text in a span */}
          {sortOption === 'relevance' && 'Relevance'}
          {sortOption === 'recent' && 'Most Recent'}
          {sortOption === 'skills' && 'Top Skills'}
        </span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 bg-white border border-blue-600 rounded-md shadow-md z-10">
          <button
            onClick={() => handleOptionClick('relevance')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${sortOption === 'relevance' ? 'bg-blue-100' : ''}`}
          >
            Relevance
          </button>
          <button
            onClick={() => handleOptionClick('recent')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${sortOption === 'recent' ? 'bg-blue-100' : ''}`}
          >
            Most Recent
          </button>
          <button
            onClick={() => handleOptionClick('skills')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 ${sortOption === 'skills' ? 'bg-blue-100' : ''}`}
          >
            Top Skills
          </button>
        </div>
      )}
    </div>
  );
};