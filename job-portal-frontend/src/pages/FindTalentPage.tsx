import React, { useState, useEffect } from 'react';
import { JobSeekerCard } from '../components/find-talents/JobSeekerCard';
import { TalentFilter } from '../components/find-talents/TalentFilters';
import { SortDropdown } from '../components/find-talents/SortDropdown';
import { Pagination } from '../components/find-talents/Pagination';

const FindTalentPage = ({ jobSeekers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    location: null,
    skills: [],
    experience: null,
    jobTitle: '', // Now a string for free-text search
  });
  const [sortOption, setSortOption] = useState('relevance');
  const [filteredJobSeekers, setFilteredJobSeekers] = useState(jobSeekers);
  const itemsPerPage = 6;

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    let filtered = jobSeekers.filter(seeker => {
      const locationMatch = !filters.location ||
        seeker.location?.toLowerCase().includes(filters.location?.label?.toLowerCase() || '');
      const skillMatch = filters.skills.length === 0 ||
        filters.skills.some(skill => seeker.skills.map(s => s.toLowerCase()).includes(skill.label.toLowerCase()));
      const jobTitleMatch = seeker.title?.toLowerCase().includes(filters.jobTitle.toLowerCase()); // Direct string matching

      // Experience level filtering
      let experienceMatch = true;
      if (filters.experience) {
        switch (filters.experience.value) {
          case 'entry':
            experienceMatch = seeker.experience >= 0 && seeker.experience <= 2;
            break;
          case 'mid':
            experienceMatch = seeker.experience >= 3 && seeker.experience <= 6;
            break;
          case 'senior':
            experienceMatch = seeker.experience >= 7;
            break;
          default:
            experienceMatch = true;
        }
      }

      return locationMatch && skillMatch && jobTitleMatch && experienceMatch;
    });

    switch (sortOption) {
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'experience-asc':
        filtered.sort((a, b) => a.experience - b.experience);
        break;
      case 'experience-desc':
        filtered.sort((a, b) => b.experience - a.experience);
        break;
      default:
        break;
    }

    setFilteredJobSeekers(filtered);
    setCurrentPage(1);
  }, [filters, sortOption, jobSeekers]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobSeekers = filteredJobSeekers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredJobSeekers.length / itemsPerPage);

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="bg-gradient-to-r from-[#EFF6FF] to-white py-10 mb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-[#111827]">Find Your Ideal Candidate Today</h2>
            <p className="mt-2 text-lg text-[#4B5563]">
              Connect with skilled professionals to build a high-performing team and grow your business
            </p>
          </div>

          <div className="mb-8 bg-white shadow rounded-lg">
            <div className="p-6">
              <TalentFilter onFilter={handleFilterChange} />
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div className="text-sm text-gray-600">
              Showing {filteredJobSeekers.length} results
            </div>
            <SortDropdown onSort={setSortOption} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-4 lg:px-6 max-w-6xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {currentJobSeekers.map((seeker) => (
            <JobSeekerCard key={seeker.id} {...seeker} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 mb-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>

    </div>
  );
};

// Updated dummy data with all required fields
const dummyJobSeekers = [
  {
    id: 1,
    name: 'David Chen',
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    experience: 5,
    skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
    description: 'Full-stack developer with 5+ years of experience building scalable web applications. Specialized in cloud infrastructure and microservices architecture.',
    timePosted: '2d ago',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    title: 'Data Scientist',
    company: 'Data Insights Corp',
    location: 'New York, NY',
    experience: 3,
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    description: 'Data science professional with expertise in predictive modeling and big data analytics. Strong background in statistical analysis and data visualization.',
    timePosted: '1d ago',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Kenji Tanaka',
    title: 'UI/UX Designer',
    company: 'Creative Solutions Ltd.',
    location: 'Los Angeles, CA',
    experience: 4,
    skills: ['Figma', 'Sketch', 'User Research', 'Prototyping'],
    description: 'Creative designer focused on creating intuitive user experiences. Strong background in user research and interaction design.',
    timePosted: '3d ago',
    profileImage: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 4,
    name: 'Samantha Jones',
    title: 'Project Manager',
    company: 'Global Projects Group',
    location: 'Chicago, IL',
    experience: 6,
    skills: ['Agile', 'Scrum', 'Project Planning', 'JIRA'],
    description: 'Certified PMP with extensive experience leading cross-functional teams and delivering complex projects on time and under budget.',
    timePosted: '5d ago',
    profileImage: 'https://randomuser.me/api/portraits/women/63.jpg'
  },
  {
    id: 5,
    name: 'Ricardo Gomez',
    title: 'Frontend Developer',
    company: 'Web Development Studio',
    location: 'Austin, TX',
    experience: 2,
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
    description: 'Frontend specialist passionate about creating responsive, accessible web applications with modern JavaScript frameworks.',
    timePosted: '1d ago',
    profileImage: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: 6,
    name: 'Aisha Khan',
    title: 'Backend Developer',
    company: 'Software Solutions Inc.',
    location: 'Seattle, WA',
    experience: 7,
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
    description: 'Backend engineer with expertise in building high-performance distributed systems and scalable APIs.',
    timePosted: '4d ago',
    profileImage: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: 7,
    name: 'Michael Johnson',
    title: 'DevOps Engineer',
    company: 'Cloud Systems Co.',
    location: 'Boston, MA',
    experience: 4,
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS'],
    description: 'DevOps specialist focused on automating deployments and optimizing cloud infrastructure.',
    timePosted: '2d ago',
    profileImage: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    id: 8,
    name: 'Emily Wilson',
    title: 'Product Manager',
    company: 'Digital Products LLC',
    location: 'Portland, OR',
    experience: 5,
    skills: ['Product Strategy', 'Roadmapping', 'User Stories', 'A/B Testing'],
    description: 'Product leader with experience bringing digital products from concept to market success.',
    timePosted: '1d ago',
    profileImage: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    id: 9,
    name: 'James Kim',
    title: 'Mobile Developer',
    company: 'AppWorks Studio',
    location: 'Denver, CO',
    experience: 3,
    skills: ['React Native', 'Swift', 'Android', 'Firebase'],
    description: 'Cross-platform mobile developer with experience building performant apps for both iOS and Android.',
    timePosted: '3d ago',
    profileImage: 'https://randomuser.me/api/portraits/men/81.jpg'
  },
  {
    id: 10,
    name: 'Olivia Martinez',
    title: 'Data Engineer',
    company: 'Big Data Technologies',
    location: 'Atlanta, GA',
    experience: 4,
    skills: ['Spark', 'Hadoop', 'ETL', 'Data Pipelines'],
    description: 'Data infrastructure specialist focused on building reliable data pipelines and warehouses.',
    timePosted: '6d ago',
    profileImage: 'https://randomuser.me/api/portraits/women/25.jpg'
  },
  {
    id: 11,
    name: 'Daniel Brown',
    title: 'Security Engineer',
    company: 'CyberDefense Inc.',
    location: 'Washington, DC',
    experience: 6,
    skills: ['Penetration Testing', 'Security Audits', 'Cryptography', 'SIEM'],
    description: 'Security expert with experience protecting enterprise systems and conducting vulnerability assessments.',
    timePosted: '2d ago',
    profileImage: 'https://randomuser.me/api/portraits/men/91.jpg'
  },
  {
    id: 12,
    name: 'Sophia Lee',
    title: 'UX Researcher',
    company: 'UserFirst Design',
    location: 'Miami, FL',
    experience: 3,
    skills: ['User Interviews', 'Usability Testing', 'Personas', 'Journey Mapping'],
    description: 'Research specialist focused on understanding user needs and translating insights into design improvements.',
    timePosted: '4d ago',
    profileImage: 'https://randomuser.me/api/portraits/women/41.jpg'
  }
];
const FindTalentPageWithData = () => <FindTalentPage jobSeekers={dummyJobSeekers} />;

export default FindTalentPageWithData;