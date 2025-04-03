import React from 'react';
import { MapPin, Bookmark, Clock, Briefcase } from 'lucide-react';
import { Tag } from '../Tag';

interface JobCardProps {
  companyName: string;
  jobTitle: string;
  companyLogo: string;
  location: string;
  salaryRange: string;
  postedTime: string;
  jobType: string;
  experienceLevel: string;
  applicantsCount: number;
}

const JobCard: React.FC<JobCardProps> = ({
  companyName,
  jobTitle,
  companyLogo,
  location,
  salaryRange,
  postedTime,
  jobType,
  experienceLevel,
  applicantsCount,
}) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 border border-gray-100 flex flex-col">
      <div className="p-4 flex-1 relative">
        {/* Bookmark Icon */}
        <div className="absolute top-3 right-3">
          <Bookmark className="w-4 h-4 text-gray-400 hover:text-blue-600 transition-colors" />
        </div>

        {/* Company Logo and Job Details */}
        <div className="flex items-start mb-3">
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
            <p className="text-black-600 text-xs mt-0.5">
              {companyName} · {applicantsCount} applicants
            </p>
            {postedTime && (
              <p className="text-gray-500 text-xs mt-1">Posted {postedTime} ago</p>
            )}
          </div>
        </div>

        {/* Job Metadata */}
        <div className="space-y-1.5 mb-3">
          {/* Location */}
          <div className="flex items-center text-gray-700">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
            <span className="text-xs">{location}</span>
          </div>

          {/* Salary */}
          <div className="flex items-center text-gray-700">
            <Briefcase className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
            <span className="text-xs font-medium">{salaryRange}</span>
          </div>
        </div>

        {/* Job Tags */}
        <div className="flex space-x-2 mb-3">
          <Tag label={jobType} variant="primary" icon={Clock} size="sm" />
          <Tag label={experienceLevel} variant="success" size="sm" />
        </div>
        <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 transition-colors rounded">
          View Job
        </button>
      </div>
    </div>
  );
};

export default JobCard;