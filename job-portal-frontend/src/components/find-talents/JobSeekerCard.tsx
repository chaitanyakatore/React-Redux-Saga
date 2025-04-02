import { MapPin, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export const JobSeekerCard = ({
  name,
  title,
  company,
  location,
  skills,
  experience,
  profileImage,
  description
}) => {
  const skillsContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (skillsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = skillsContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollSkills = (direction) => {
    if (skillsContainerRef.current) {
      const scrollAmount = direction === 'left' ? -100 : 100;
      skillsContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = skillsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow text-sm">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={profileImage || '/default-avatar.png'}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-base">{name}</h3>
          <p className="text-blue-600 text-sm mb-1">{title}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>

      {description && (
        <p className="text-xs text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
      )}

      <div className="relative mb-4 flex items-center">
        <button
          onClick={() => scrollSkills('left')}
          className={`p-1 rounded-full shadow-md ${
            showLeftArrow 
              ? 'text-gray-500 hover:text-blue-600 bg-white' 
              : 'text-gray-300 bg-gray-50 cursor-not-allowed'
          }`}
          disabled={!showLeftArrow}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div
          ref={skillsContainerRef}
          className="flex-1 flex gap-2 overflow-x-auto scrollbar-hide px-4 py-1"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0px, black 10px, black calc(100% - 5px), transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 10px, black calc(100% - 5px), transparent 100%)'
          }}
        >
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>

        <button
          onClick={() => scrollSkills('right')}
          className={`p-1 rounded-full shadow-md ${
            showRightArrow 
              ? 'text-gray-500 hover:text-blue-600 bg-white' 
              : 'text-gray-300 bg-gray-50 cursor-not-allowed'
          }`}
          disabled={!showRightArrow}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
        <span className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </span>
        <span className="flex items-center">
          <Briefcase className="w-4 h-4 mr-1" />
          {experience}yrs exp
        </span>
      </div>

      <div className="flex gap-3 mt-auto">
        <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md text-sm font-medium">
          View Profile
        </button>
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium">
          Message
        </button>
      </div>
    </div>
  );
};