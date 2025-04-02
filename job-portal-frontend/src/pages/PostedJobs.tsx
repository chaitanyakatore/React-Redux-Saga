import React from 'react';
import RecruiterLayout from '../layouts/RecruiterLayout';
import PostedJobCard from '../components/PostedJobCard';

const PostedJobs: React.FC = () => {
  // Sample job listings data for a recruiter
  const postedJobs = [
    {
      id: '1',
      title: 'Senior UI Designer',
      company: 'Tech Trends',
      isActive: true,
      jobType: 'Full Time' as const,
      locationType: 'Remote' as const,
      description: 'We are looking for an experienced UI Designer to join our growing design team. You will be responsible for creating user interfaces that are both visually appealing and functional.',
      salaryMin: 90,
      salaryMax: 110,
      applicantsCount: 45,
      postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    },
    {
      id: '2',
      title: 'Frontend Developer',
      company: 'Tech Trends',
      isActive: true,
      jobType: 'Full Time' as const,
      locationType: 'Hybrid' as const,
      location: 'New York',
      description: 'Join our team of talented developers building modern web applications with React and TypeScript. We are looking for someone with strong frontend skills and attention to detail.',
      salaryMin: 85,
      salaryMax: 125,
      applicantsCount: 37,
      postedDate: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    },
    {
      id: '3',
      title: 'UX Researcher',
      company: 'Tech Trends',
      isActive: true,
      jobType: 'Part Time' as const,
      locationType: 'On-site' as const,
      location: 'San Francisco',
      description: 'Looking for a UX Researcher to conduct user interviews, analyze feedback, and work closely with our design team to create intuitive user experiences.',
      salaryMin: 70,
      salaryMax: 90,
      applicantsCount: 18,
      postedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    },
    {
      id: '4',
      title: 'Backend Developer',
      company: 'Tech Trends',
      isActive: false,
      jobType: 'Contract' as const,
      locationType: 'Remote' as const,
      description: 'Seeking an experienced backend developer with strong knowledge of Node.js, Express, and MongoDB. Experience with AWS is a plus.',
      salaryMin: 100,
      salaryMax: 140,
      applicantsCount: 64,
      postedDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    }
  ];

  return (
    <RecruiterLayout>
      <div className="container mx-auto py-8 px-4">
        {/* <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Posted Jobs</h1>
          <p className="text-gray-600">Manage your job listings and track applicants</p>
        </div> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postedJobs.map(job => (
            <PostedJobCard
              key={job.id}
              {...job}
            />
          ))}
        </div>
      </div>
    </RecruiterLayout>
  );
};

export default PostedJobs;
