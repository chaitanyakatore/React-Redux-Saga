import React, { useState } from 'react';
import {
  Building2,
  MapPin,
  DollarSign,
  Clock,
  Bookmark,
  Globe,
  Users,
  Briefcase
} from 'lucide-react';

const ViewJob: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const skills = ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'UI Design', 'Design Systems'];
  const responsibilities = [
    'Lead the design process from concept to implementation',
    'Create wireframes, prototypes, and high-fidelity designs',
    'Conduct user research and usability testing',
    'Collaborate with product managers and developers',
    'Maintain and evolve our design system',
  ];
  const qualifications = [
    'Bachelor\'s degree in Design, HCI, or related field',
    '5+ years of experience in UI/UX design',
    'Strong portfolio demonstrating end-to-end design process',
    'Experience with modern design tools',
    'Excellent communication and collaboration skills',
  ];

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="pt-20 fixed inset-0 overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        {/* Job Header */}
        <div className="flex items-center justify-between mb-4 flex-shrink-0 px-4 sm:px-6 lg:px-8 pt-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <Building2 className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Senior UI/UX Designer</h1>
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                <span>Google Inc.</span>
                <span>•</span>
                <span>Posted 2 days ago</span>
                <span>•</span>
                <span>234 applicants</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleBookmark} 
              className={`p-2 hover:text-gray-900 ${
                isBookmarked 
                  ? 'text-black-500 hover:text-black-600' 
                  : 'text-gray-600'
              }`}
            >
              <Bookmark 
                className={`w-5 h-5 ${
                  isBookmarked 
                    ? 'fill-current' 
                    : ''
                }`} 
              />
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        </div>

        <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-hidden px-4 sm:px-6 lg:px-8 pb-4">
          {/* Main Content - Scrollable */}
          <div className="lg:col-span-2 overflow-y-auto scrollbar-hide">
            <div className="space-y-4 pr-4">
              {/* Job Overview */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-3">Job Overview</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-900">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="text-gray-900">5+ years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-500">Salary</p>
                      <p className="text-gray-900">$120k - $150k</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-500">Job Type</p>
                      <p className="text-gray-900">Full Time</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Skills */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-3">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* About the Job */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-3">About the Job</h2>
                <p className="text-gray-600">
                  We are looking for a Senior UI/UX Designer to join our growing design team. You will be responsible
                  for delivering the best possible user experience for our products...
                </p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-3">Responsibilities</h2>
                <ul className="space-y-2">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-3">Qualifications</h2>
                <ul className="space-y-2">
                  {qualifications.map((item, index) => (
                    <li key={index} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar - Fixed */}
          <div className="hidden lg:block">
            <div className="space-y-3">
              {/* Company Info */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-6 h-6 text-gray-600" />
                  <div>
                    <h3 className="font-semibold">Google Inc.</h3>
                    <p className="text-sm text-gray-600">Technology</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href="http://www.google.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <Globe className="w-4 h-4" />
                    www.google.com
                  </a>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    10,000+ employees
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    Mountain View, CA
                  </div>
                </div>
              </div>

              {/* Similar Jobs */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-semibold mb-3">Similar Jobs</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">UX Designer</h4>
                    <p className="text-sm text-gray-600">Facebook</p>
                    <p className="text-sm text-gray-500">New York, NY</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Product Designer</h4>
                    <p className="text-sm text-gray-600">Twitter</p>
                    <p className="text-sm text-gray-500">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind CSS Plugin for Scrollbar Hide */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default ViewJob;