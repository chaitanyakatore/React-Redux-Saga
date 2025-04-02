import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import JobCard from '../components/JobSeeker/JobCard';
import googleLogo from '../assets/google1.png';

export const FindJob = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [sortBy, setSortBy] = useState('Relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 12;

  const jobData = [
    {
      companyName: 'Google Inc.',
      jobTitle: 'Senior UX Designer',
      companyLogo: googleLogo,
      location: 'San Francisco, CA',
      salaryRange: '$120k - $150k',
      postedTime: '5 hours',
      jobType: 'Full-time',
      experienceLevel: 'Beginner',
      applicantsCount: 0,
    },
    {
      companyName: 'Microsoft',
      jobTitle: 'Full Stack Developer',
      companyLogo: googleLogo,
      location: 'Remote',
      salaryRange: '$100k - $130k',
      postedTime: '5 hours',
      jobType: 'Remote',
      experienceLevel: 'Beginner',
      applicantsCount: 0,
    },
    {
      companyName: 'Apple Inc.',
      jobTitle: 'Product Manager',
      companyLogo: googleLogo,
      location: 'Cupertino, CA',
      salaryRange: '$140k - $180k',
      postedTime: '5 hours',
      jobType: 'Contract',
      experienceLevel: 'Expert',
      applicantsCount: 0,
    },
    {
      companyName: 'Amazon',
      jobTitle: 'Data Scientist',
      companyLogo: googleLogo,
      location: 'Seattle, WA',
      salaryRange: '$130k - $160k',
      postedTime: '1 day',
      jobType: 'Full-time',
      experienceLevel: 'Intermediate',
      applicantsCount: 0,
    },
    {
      companyName: 'Facebook',
      jobTitle: 'Frontend Developer',
      companyLogo: googleLogo,
      location: 'Menlo Park, CA',
      salaryRange: '$110k - $140k',
      postedTime: '2 days',
      jobType: 'Full-time',
      experienceLevel: 'Beginner',
      applicantsCount: 0,
    },
    {
      companyName: 'Netflix',
      jobTitle: 'Backend Engineer',
      companyLogo: googleLogo,
      location: 'Los Gatos, CA',
      salaryRange: '$150k - $190k',
      postedTime: '3 days',
      jobType: 'Full-time',
      experienceLevel: 'Expert',
      applicantsCount: 0,
    },
    // Add more jobs to test pagination (duplicate some to reach >12 items)
    ...Array(10).fill({
      companyName: 'Startup Inc.',
      jobTitle: 'Software Engineer',
      companyLogo: googleLogo,
      location: 'Remote',
      salaryRange: '$90k - $120k',
      postedTime: '1 week',
      jobType: 'Full-time',
      experienceLevel: 'Intermediate',
      applicantsCount: 0,
    })
  ];

  const filteredJobs = jobData.filter(job => {
    const matchesSearch = 
      job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = locationTerm 
      ? job.location.toLowerCase().includes(locationTerm.toLowerCase())
      : true;
    
    return matchesSearch && matchesLocation;
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-[#EFF6FF] to-white pt-12 pb-8">
        <div className="container mx-auto px-10 lg:px-8"> {/* Increased side padding */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job Today</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with top companies and opportunities that match your skills and aspirations.
            </p>
          </div>

           {/* Search and Filter Section */}
                    <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm border border-gray-100 mx-2"> {/* Reduced padding and added mx-2 */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3"> {/* Reduced gap */}
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Job title or keyword"
                            className="w-full pl-3 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => {
                              setSearchTerm(e.target.value);
                              setCurrentPage(1);
                            }}
                          />
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Location"
                            className="w-full pl-3 pr-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={locationTerm}
                            onChange={(e) => {
                              setLocationTerm(e.target.value);
                              setCurrentPage(1);
                            }}
                          />
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-4 rounded-md transition-colors">
                          Search Jobs
                        </button>
                      </div>
          
                      <div className="flex justify-between items-center text-sm">
                        <button className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600">
                          <Filter size={14} />
                          <span>More Filters</span>
                        </button>
                        
                        <div className="flex items-center gap-1.5">
                          <span className="text-gray-600">Sort By:</span>
                          <select 
                            className="border-none bg-transparent font-medium focus:ring-0 text-sm py-1"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                          >
                            <option>Relevance</option>
                            <option>Newest</option>
                            <option>Salary: High to Low</option>
                            <option>Salary: Low to High</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          

      {/* Job Listings */}
      <div className="flex-grow container mx-auto px-6 lg:px-8 py-6"> {/* Increased side padding */}
        {/* Results Count */}
        <div className="mb-4 px-2">
          <p className="text-sm text-gray-600">
            Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length} jobs
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2"> {/* Reduced gap */}
          {currentJobs.map((job, index) => (
            <JobCard
              key={index}
              companyName={job.companyName}
              jobTitle={job.jobTitle}
              companyLogo={job.companyLogo}
              location={job.location}
              salaryRange={job.salaryRange}
              postedTime={job.postedTime}
              jobType={job.jobType}
              experienceLevel={job.experienceLevel}
              applicantsCount={job.applicantsCount}
            />
          ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > jobsPerPage && (
          <div className="mt-8 flex justify-center px-2">
            <nav className="inline-flex rounded-md shadow-sm">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-l-md border flex items-center text-sm ${currentPage === 1 ? 'bg-gray-100 text-gray-400 border-gray-300' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
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
                    className={`px-3 py-2 border-t border-b text-sm ${currentPage === pageNum ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-r-md border flex items-center text-sm ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 border-gray-300' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindJob;