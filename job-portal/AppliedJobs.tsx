import React, { useState } from 'react';
import ApplicationCard from '../components/JobSeeker/ApplicationCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AppliedJobs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const appliedJobs: {
    companyName: string;
    jobTitle: string;
    companyLogo: string;
    location: string;
    salaryRange: string;
    postedTime: string;
    jobType: string;
    experienceLevel: string;
    status: 'Applied' | 'In Progress' | 'Accepted' | 'Rejected';
  }[] = [
    {
      companyName: 'Google Inc.',
      jobTitle: 'Senior UX Designer',
      companyLogo: 'https://via.placeholder.com/100',
      location: 'San Francisco, CA',
      salaryRange: '$120k - $150k',
      postedTime: '5 hours',
      jobType: 'Full-time',
      experienceLevel: 'Beginner',
      status: 'Applied',
    },
    {
      companyName: 'Microsoft',
      jobTitle: 'Software Engineer',
      companyLogo: 'https://via.placeholder.com/100',
      location: 'Redmond, WA',
      salaryRange: '$110k - $140k',
      postedTime: '1 day',
      jobType: 'Full-time',
      experienceLevel: 'Mid-level',
      status: 'In Progress',
    },
    {
      companyName: 'Amazon',
      jobTitle: 'Data Scientist',
      companyLogo: 'https://via.placeholder.com/100',
      location: 'Seattle, WA',
      salaryRange: '$130k - $160k',
      postedTime: '3 days',
      jobType: 'Full-time',
      experienceLevel: 'Senior',
      status: 'Accepted',
    },
    {
      companyName: 'Netflix',
      jobTitle: 'Frontend Developer',
      companyLogo: 'https://via.placeholder.com/100',
      location: 'Los Gatos, CA',
      salaryRange: '$100k - $130k',
      postedTime: '1 week',
      jobType: 'Contract',
      experienceLevel: 'Entry-level',
      status: 'Rejected',
    },
    {
      companyName: 'Apple',
      jobTitle: 'iOS Developer',
      companyLogo: 'https://via.placeholder.com/100',
      location: 'Cupertino, CA',
      salaryRange: '$140k - $170k',
      postedTime: '2 days',
      jobType: 'Full-time',
      experienceLevel: 'Experienced',
      status: 'Applied',
    },
    {
      companyName: 'Meta',
      jobTitle: 'AI Engineer',
      companyLogo: 'https://via.placeholder.com/100',
      location: 'Menlo Park, CA',
      salaryRange: '$150k - $180k',
      postedTime: '4 days',
      jobType: 'Full-time',
      experienceLevel: 'Expert',
      status: 'In Progress',
    },
    {
      companyName: 'SpaceX',
      jobTitle: 'Rocket Engineer',
      companyLogo: 'https://via.placeholder.com/100',
      location: 'Hawthorne, CA',
      salaryRange: '$160k - $190k',
      postedTime: '6 days',
      jobType: 'Full-time',
      experienceLevel: 'Advanced',
      status: 'Accepted',
    },
    {
      companyName: 'Tesla',
      jobTitle: 'Autonomous Driving Engineer',
      companyLogo: 'https://via.placeholder.com/100',
      location: 'Palo Alto, CA',
      salaryRange: '$170k - $200k',
      postedTime: '10 days',
      jobType: 'Full-time',
      experienceLevel: 'Expert',
      status: 'Rejected',
    },
    {
      companyName: 'Adobe',
      jobTitle: 'UI Designer',
      companyLogo: 'https://via.placeholder.com/100',
      location: 'San Jose, CA',
      salaryRange: '$125k - $155k',
      postedTime: '1 day',
      jobType: 'Full-time',
      experienceLevel: 'Mid-level',
      status: 'Applied',
    },
    {
        companyName: 'Intel',
        jobTitle: 'Hardware Engineer',
        companyLogo: 'https://via.placeholder.com/100',
        location: 'Santa Clara, CA',
        salaryRange: '$135k - $165k',
        postedTime: '3 days',
        jobType: 'Full-time',
        experienceLevel: 'Senior',
        status: 'In Progress'
    },
    {
        companyName: 'Oracle',
        jobTitle: 'Database Administrator',
        companyLogo: 'https://via.placeholder.com/100',
        location: 'Redwood Shores, CA',
        salaryRange: '$115k - $145k',
        postedTime: '5 days',
        jobType: 'Full-time',
        experienceLevel: 'Experienced',
        status: 'Accepted'
    },
    {
        companyName: 'IBM',
        jobTitle: 'Cloud Architect',
        companyLogo: 'https://via.placeholder.com/100',
        location: 'Armonk, NY',
        salaryRange: '$145k - $175k',
        postedTime: '7 days',
        jobType: 'Full-time',
        experienceLevel: 'Expert',
        status: 'Rejected'
    },
  ];

  const totalPages = Math.ceil(appliedJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = appliedJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {currentJobs.map((job, index) => (
          <ApplicationCard key={index} {...job} />
        ))}
      </div>

      {/* Pagination */}
      {appliedJobs.length > jobsPerPage && (
        <div className="mt-8 flex justify-center px-4">
          <nav className="inline-flex rounded-md shadow-sm">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-l-md border flex items-center text-sm ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 border-gray-300'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => paginate(pageNum)}
                  className={`px-3 py-2 border-t border-b text-sm ${
                    currentPage === pageNum
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-r-md border flex items-center text-sm ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 border-gray-300'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;