import React, { useState } from 'react';
import RecruiterLayout from '../layouts/RecruiterLayout';
import JobOverviewCard from '../components/PostedJob/JobOverviewCard';
import PostedJobTabSectionLayout, { ApplicantData } from '../layouts/PostedJobTabSectionLayout';
import { ApplicantCardType, ApplicantStatus } from '../components/PostedJob/ApplicantProfileCard';
import { Edit2, CheckCircle } from 'lucide-react';

type TabType = 'overview' | 'applicants' | 'invited' | 'offered';

const PostedJobPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isActive, setIsActive] = useState(true);

  // Sample job data
  const jobData = {
    title: 'Senior Product Designer',
    company: 'Tech Design Co.',
    location: 'San Francisco, CA',
    experience: '2+ years',
    salary: '$100k - $130k',
    jobType: 'Full-time',
    postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    applicantsCount: 12,
    requiredSkills: ['Figma', 'UI/UX Design', 'Wireframing', 'Graphic Design'],
    description: 'We are looking for a talented Product Designer to join our growing design team. In this role, you will work closely with our product and engineering teams to create intuitive, user-friendly designs that help our customers achieve their goals. The ideal candidate will combine creativity with technical skills.',
    responsibilities: [
      'Create user-centered designs by understanding business requirements and user feedback',
      'Design flows, prototypes, and multiple iterations of user interfaces',
      'Develop wireframes and mockups optimized for a wide range of devices and interfaces',
      'Collaborate with product managers and developers',
      'Conduct user testing and gather feedback'
    ],
    qualifications: [
      'Bachelor\'s degree in Design, HCI, or a related field',
      '2+ years of experience in product design',
      'Strong portfolio demonstrating UI/UX design',
      'Experience with modern design tools',
      'Effective communication skills and collaboration skills'
    ]
  };

  // Sample applicants data
  const applicantsData: ApplicantData[] = [
    {
      id: '1',
      name: 'John Anderson',
      designation: 'Senior Sales Professional',
      description: 'Experienced full-stack developer with expertise in cloud architecture and distributed systems.',
      experience: '5 years experience',
      location: 'San Francisco, CA',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: '2',
      name: 'Sarah Wilson',
      designation: 'Sales Development Rep',
      description: 'Creative designer focused on creating intuitive and beautiful user experiences.',
      experience: '3 years experience',
      location: 'Los Angeles, CA',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: '3',
      name: 'Michael Chen',
      designation: 'Account Executive',
      description: 'Strategic product leader with a track record of launching successful B2B products.',
      experience: '8 years experience',
      location: 'Seattle, WA',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      id: '4',
      name: 'John Anderson',
      designation: 'Senior Sales Professional',
      description: 'Experienced full-stack developer with expertise in cloud architecture and distributed systems.',
      experience: '5 years experience',
      location: 'San Francisco, CA',
      profileImage: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
      id: '5',
      name: 'Sarah Wilson',
      designation: 'Sales Development Rep',
      description: 'Creative designer focused on creating intuitive and beautiful user experiences.',
      experience: '3 years experience',
      location: 'Los Angeles, CA',
      profileImage: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
      id: '6',
      name: 'Michael Chen',
      designation: 'Account Executive',
      description: 'Strategic product leader with a track record of launching successful B2B products.',
      experience: '8 years experience',
      location: 'Seattle, WA',
      profileImage: 'https://randomuser.me/api/portraits/men/6.jpg'
    }
  ];

  // Sample invited applicants data
  const invitedApplicantsData: ApplicantData[] = [
    {
      id: '7',
      name: 'Emily Johnson',
      designation: 'UI/UX Designer',
      description: 'Creative and detail-oriented designer with a focus on user-centered design principles.',
      experience: '4 years experience',
      location: 'Chicago, IL',
      profileImage: 'https://randomuser.me/api/portraits/women/7.jpg'
    },
    {
      id: '8',
      name: 'David Lee',
      designation: 'Frontend Developer',
      description: 'Skilled developer with expertise in React, Vue, and modern JavaScript frameworks.',
      experience: '6 years experience',
      location: 'Austin, TX',
      profileImage: 'https://randomuser.me/api/portraits/men/8.jpg'
    }
  ];

  // Sample offered applicants data with status
  const offeredApplicantsData: ApplicantData[] = [
    {
      id: '9',
      name: 'John Anderson',
      designation: 'Senior Sales Professional',
      description: 'Experienced full-stack developer with expertise in cloud architecture and distributed systems.',
      experience: '5 years experience',
      location: 'San Francisco, CA',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      status: 'accepted'
    },
    {
      id: '10',
      name: 'Sarah Wilson',
      designation: 'Sales Development Rep',
      description: 'Creative designer focused on creating intuitive and beautiful user experiences.',
      experience: '3 years experience',
      location: 'Los Angeles, CA',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
      status: 'rejected'
    },
    {
      id: '11',
      name: 'Michael Chen',
      designation: 'Account Executive',
      description: 'Strategic product leader with a track record of launching successful B2B products.',
      experience: '8 years experience',
      location: 'Seattle, WA',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      status: 'pending'
    }
  ];

  const toggleJobStatus = () => {
    setIsActive(!isActive);
  };

  // Handle applicant card button clicks
  const handleProfileClick = (applicantId: string) => {
    console.log(`Profile button clicked for applicant ${applicantId}`);
    // Implement navigation or modal to show applicant profile
  };

  const handleUpdateClick = (applicantId: string) => {
    console.log(`Update button clicked for applicant ${applicantId}`);
    // Implement functionality to update applicant status
  };

  const handleViewClick = (applicantId: string) => {
    console.log(`View button clicked for applicant ${applicantId}`);
    // Implement functionality to view applicant details
  };

  const handleAcceptClick = (applicantId: string) => {
    console.log(`Accept button clicked for applicant ${applicantId}`);
    // Implement functionality to accept an invitation
  };

  const handleRejectClick = (applicantId: string) => {
    console.log(`Reject button clicked for applicant ${applicantId}`);
    // Implement functionality to reject an invitation
  };

  const handleMessageClick = (applicantId: string) => {
    console.log(`Message button clicked for applicant ${applicantId}`);
    // Implement functionality to send a message
  };

  // Get the card type based on active tab
  const getCardType = (): ApplicantCardType => {
    switch (activeTab) {
      case 'invited':
        return 'invited_tab';
      case 'offered':
        return 'offered_tab';
      case 'applicants':
      default:
        return 'applicant_tab';
    }
  };

  // Get applicants data based on active tab
  const getApplicantsData = (): ApplicantData[] => {
    switch (activeTab) {
      case 'invited':
        return invitedApplicantsData;
      case 'offered':
        return offeredApplicantsData;
      case 'applicants':
      default:
        return applicantsData;
    }
  };

  return (
    <RecruiterLayout>
      <div className="container mx-auto py-8 px-4">
        {/* First Main Row - Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          {/* Left Column - Title and Location */}
          <div>
            {/* First Sub-row - Title and Status */}
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-800">{jobData.title}</h1>
              <span className={`text-xs px-2 py-1 mt-1.5 rounded-full font-medium ${
                isActive 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {isActive ? 'Active' : 'Closed'}
              </span>
            </div>
            
            {/* Second Sub-row - Location */}
            <p className="text-gray-600">{jobData.location}</p>
          </div>
          
          {/* Right Column - Action Buttons */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
              <Edit2 size={16} />
              <span>Edit</span>
            </button>
            <button 
              onClick={toggleJobStatus}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                isActive 
                  ? 'bg-red-50 text-red-700 border border-red-200' 
                  : 'bg-green-50 text-green-700 border border-green-200'
              }`}
            >
              <CheckCircle size={16} />
              <span>{isActive ? 'Close Job' : 'Reopen Job'}</span>
            </button>
          </div>
        </div>
        
        {/* Second Main Row - Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px">
            {(['overview', 'applicants', 'invited', 'offered'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-transform duration-200 ease-in-out hover:scale-110 ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab === 'applicants' && (
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800">
                    {jobData.applicantsCount}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
        
        {/* Third Main Row - Tab Content */}
        <div>
          {activeTab === 'overview' ? (
            <JobOverviewCard 
              title={jobData.title}
              company={jobData.company}
              location={jobData.location}
              experience={jobData.experience}
              salary={jobData.salary}
              jobType={jobData.jobType}
              postedDate={jobData.postedDate}
              applicantsCount={jobData.applicantsCount}
              role="recruiter"
              requiredSkills={jobData.requiredSkills}
              description={jobData.description}
              responsibilities={jobData.responsibilities}
              qualifications={jobData.qualifications}
            />
          ) : (
            <PostedJobTabSectionLayout 
              applicants={getApplicantsData()}
              cardType={getCardType()}
              onProfileClick={handleProfileClick}
              onUpdateClick={handleUpdateClick}
              onViewClick={handleViewClick}
              onAcceptClick={handleAcceptClick}
              onRejectClick={handleRejectClick}
              onMessageClick={handleMessageClick}
            />
          )}
        </div>
      </div>
    </RecruiterLayout>
  );
};

export default PostedJobPage;
