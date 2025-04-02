import { Building2, MapPin, Users, Eye } from 'lucide-react';
import { FC } from 'react';

interface CompanyCardProps {
  name: string;
  logo?: string;
  location: string;
  employees: number;
  about: string;
  onView: () => void;
}

const CompanyCard: FC<CompanyCardProps> = ({ 
  name, 
  logo, 
  location, 
  employees, 
  about,
  onView 
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-4">
        {/* Company Header */}
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
            {logo ? (
              <img 
                src={logo} 
                alt={`${name} logo`} 
                className="w-full h-full object-contain p-1" 
                loading="lazy"
              />
            ) : (
              <Building2 className="w-5 h-5 text-gray-400" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-black">{name}</h3>
            <div className="flex items-center text-xs text-black-500 mt-1">
              <MapPin className="w-3.5 h-3.5 mr-1 text-black-400 flex-shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          </div>
        </div>

        {/* Company Description */}
        <div className="mt-3">
          <p className="text-xs text-black-600 line-clamp-2">{about}</p>
        </div>

        {/* Footer with Employees and View */}
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center text-xs text-black-600">
            <Users className="w-3.5 h-3.5 mr-1 text-black-400 flex-shrink-0" />
            <span>{employees.toLocaleString()}+ employees</span>
          </div>
          <button 
            onClick={onView}
            className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 focus:outline-none transition-colors"
            aria-label={`View ${name} details`}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;