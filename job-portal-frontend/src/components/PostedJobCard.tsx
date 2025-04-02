import React from 'react';
import { Briefcase, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PostedJobCardProps {
  id: string;
  title: string;
  company?: string;
  isActive: boolean;
  jobType: 'Full Time' | 'Part Time' | 'Contract' | 'Freelance';
  locationType: 'Remote' | 'On-site' | 'Hybrid';
  location?: string;
  description: string;
  salaryMin: number;
  salaryMax: number;
  applicantsCount: number;
  postedDate: Date;
  logo?: string;
}

const PostedJobCard: React.FC<PostedJobCardProps> = ({
  id,
  title,
  company,
  isActive,
  jobType,
  locationType,
  description,
  salaryMin,
  salaryMax,
  applicantsCount,
  postedDate,
  logo,
}) => {
  // Format salary with k notation for thousands
  const formatSalary = (salary: number) => {
    return `$${salary >= 1000 ? `${salary / 1000}k` : salary}`;
  };

  // Calculate time ago
  const getTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    }
  };

  const timeAgo = getTimeAgo(postedDate);

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-100 hover:translate-y-[-4px] hover:scale-[1.02] group">
      {/* First main row: Logo + Title/Tags */}
      <div className="flex gap-4 mb-3">
        {/* Logo column */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
            {logo ? (
              <img src={logo} alt={company || title} className="w-8 h-8 object-contain" />
            ) : (
              <Briefcase className="w-6 h-6 text-blue-600" />
            )}
          </div>
        </div>

        {/* Title & Tags column */}
        <div className="flex-grow">
          {/* First sub-row: Job title + Active tag */}
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
            <span className={`text-xs px-2 py-1 rounded-full font-medium transition-colors duration-300 ${
              isActive 
                ? 'bg-green-100 text-green-700 group-hover:bg-green-200' 
                : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
            }`}>
              {isActive ? 'Active' : 'Closed'}
            </span>
          </div>

          {/* Second sub-row: Job type + Location */}
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>{jobType}</span>
            <span className="mx-2">•</span>
            <span>{locationType}</span>
          </div>
        </div>
      </div>

      {/* Second main row: Description */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
      </div>

      {/* Third main row: Salary range + Applicants count */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full transition-colors duration-300 group-hover:bg-blue-100">
          {formatSalary(salaryMin)} - {formatSalary(salaryMax)}
        </span>
        <span className="text-xs px-3 py-1 bg-purple-50 text-purple-700 rounded-full flex items-center transition-colors duration-300 group-hover:bg-purple-100">
          <Users className="w-3 h-3 mr-1" />
          {applicantsCount} Applicant{applicantsCount !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Fourth main row: Posted time + View details button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-xs text-gray-500">
          <Clock className="w-3 h-3 mr-1" />
          <span>Posted {timeAgo}</span>
        </div>
        <Link 
          to={`/job/${id}`} 
          className="text-xs px-3 py-1.5 bg-white border border-blue-600 text-blue-600 rounded-lg transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PostedJobCard;
