import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { Tag } from '../Tag';

interface ApplicationCardProps {
  companyName: string;
  jobTitle: string;
  companyLogo: string;
  location: string;
  salaryRange: string;
  postedTime: string;
  jobType: string;
  experienceLevel: string;
  status: 'Applied' | 'Accepted' | 'In Progress' | 'Rejected'; // Status prop
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({
  companyName,
  jobTitle,
  companyLogo,
  location,
  salaryRange,
  postedTime,
  jobType,
  experienceLevel,
  status, // Status prop
}) => {
  let statusColor = '';
  switch (status) {
    case 'Applied':
      statusColor = 'bg-blue-100 text-blue-600';
      break;
    case 'Accepted':
      statusColor = 'bg-green-100 text-green-600';
      break;
    case 'In Progress':
      statusColor = 'bg-yellow-100 text-yellow-600';
      break;
    case 'Rejected':
      statusColor = 'bg-red-100 text-red-600';
      break;
    default:
      statusColor = 'bg-gray-100 text-gray-600'; // Default color
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 border border-gray-100 p-4">
      <div className="flex items-start mb-3 relative">
        <div className="mr-3">
          {companyLogo && (
            <img
              src={companyLogo}
              alt={companyName}
              className="w-10 h-10 object-cover rounded-full"
            />
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-base font-bold text-gray-800 leading-tight">{jobTitle}</h2>
          <p className="text-black-600 text-xs mt-0.5">{companyName}</p>
          {postedTime && (
            <p className="text-gray-500 text-xs mt-1">Posted {postedTime} ago</p>
          )}
        </div>
        <div className={`absolute top-0 right-0 text-xs font-medium px-2 py-1 rounded-full ${statusColor}`}>
          {status}
        </div>
      </div>

      <div className="flex space-x-2 mb-3">
        <Tag label={jobType} variant="primary" icon={Clock} size="sm" />
        <Tag label={experienceLevel} variant="success" size="sm" />
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center text-gray-700">
          <span className="text-xs font-medium">{salaryRange}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <MapPin className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
          <span className="text-xs">{location}</span>
        </div>
      </div>

      <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors rounded">
        Track Application
      </button>
    </div>
  );
};

export default ApplicationCard;