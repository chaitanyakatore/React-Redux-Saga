import React from 'react';
import { Briefcase, Clock, Users, MapPin, Calendar, DollarSign } from 'lucide-react';

interface JobOverviewCardProps {
  title: string;
  company: string;
  location: string;
  experience: string;
  salary: string;
  jobType: string;
  postedDate: Date;
  applicantsCount: number;
  role?: 'applicant' | 'recruiter';
  requiredSkills: string[];
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

const JobOverviewCard: React.FC<JobOverviewCardProps> = ({
  title,
  company,
  location,
  experience,
  salary,
  jobType,
  postedDate,
  applicantsCount,
  role = 'applicant', // Default to applicant role if not specified
  requiredSkills,
  description,
  responsibilities,
  qualifications,
}) => {
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

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      {/* First main row: Logo + Title/Company/Details */}
      <div className="flex gap-5 mb-6">
        {/* Logo column */}
        <div className="flex-shrink-0 mt-2">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Title & Company column */}
        <div className="flex-grow">
          {/* First sub-row: Job title */}
          <h2 className="text-xl font-bold text-gray-800 mb-1">{title}</h2>
          
          {/* Second sub-row: Company name */}
          <p className="text-gray-600 mb-2">{company}</p>
          
          {/* Third sub-row: Posted + Applicants */}
          <div className="flex items-center text-sm text-gray-500 gap-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>Posted {getTimeAgo(postedDate)}</span>
            </div>
            {role === 'recruiter' && (
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{applicantsCount} Applicant{applicantsCount !== 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Second main row: Job Details Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {/* Location */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center mb-1">
            <MapPin className="w-4 h-4 text-gray-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Location</span>
          </div>
          <p className="text-gray-800 text-sm">{location}</p>
        </div>
        
        {/* Experience */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center mb-1">
            <Calendar className="w-4 h-4 text-gray-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Experience</span>
          </div>
          <p className="text-gray-800 text-sm">{experience}</p>
        </div>
        
        {/* Salary */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center mb-1">
            <DollarSign className="w-4 h-4 text-gray-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Salary</span>
          </div>
          <p className="text-gray-800 text-sm">{salary}</p>
        </div>
        
        {/* Job Type */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center mb-1">
            <Briefcase className="w-4 h-4 text-gray-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Job Type</span>
          </div>
          <p className="text-gray-800 text-sm">{jobType}</p>
        </div>
      </div>

      {/* Third main row: Required Skills */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-gray-800 mb-3">Required Skills</h3>
        <div className="flex flex-wrap gap-2">
          {requiredSkills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Fourth main row: Job Description */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-gray-800 mb-2">Job Description</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Fifth main row: Responsibilities */}
      <div className="mb-6">
        <h3 className="text-md font-semibold text-gray-800 mb-2">Responsibilities</h3>
        <ul className="list-disc pl-5 text-gray-600 text-sm">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="mb-1">{responsibility}</li>
          ))}
        </ul>
      </div>

      {/* Sixth main row: Qualifications */}
      <div>
        <h3 className="text-md font-semibold text-gray-800 mb-2">Qualifications</h3>
        <ul className="list-disc pl-5 text-gray-600 text-sm">
          {qualifications.map((qualification, index) => (
            <li key={index} className="mb-1">{qualification}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobOverviewCard;
