import { FC, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CompanyCard from '../../components/JobSeeker/CompanyCard';

interface Company {
  id: string;
  name: string;
  logo?: string;
  location: string;
  employees: number;
  about: string;
  industry: string; // Add industry field
}

const CompaniesPageAdmin: FC = () => {
  // Sample company data
  const allCompanies: Company[] = [
    {
      id: '1',
      name: 'TechCorp Inc.',
      logo: 'https://images.app.goo.gl/p6LeoeV8T2RaDF3r6',
      location: 'San Francisco, CA',
      employees: 1250,
      about: 'Leading provider of cloud computing services and enterprise solutions.',
      industry: 'Technology',
    },
    {
      id: '2',
      name: 'DesignHub',
      logo: '/logos/designhub.png',
      location: 'New York, NY',
      employees: 320,
      about: 'Creative design agency specializing in UI/UX and branding.',
      industry: 'Design',
    },
    {
      id: '3',
      name: 'GreenEnergy',
      logo: '/logos/greenenergy.png',
      location: 'Austin, TX',
      employees: 540,
      about: 'Renewable energy solutions for sustainable future.',
      industry: 'Energy',
    },
    // Add more companies as needed (minimum 12 for pagination demo)
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `${i + 4}`,
      name: `Company ${i + 4}`,
      location: ['Chicago', 'Seattle', 'Boston', 'Denver'][i % 4],
      employees: Math.floor(Math.random() * 5000) + 100,
      about: `Innovative solutions provider in ${['tech', 'finance', 'healthcare', 'education'][i % 4]} sector.`,
      industry: ['Technology', 'Finance', 'Healthcare', 'Education'][i % 4],
    })),
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 9;

  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  const [industrySearchTerm, setIndustrySearchTerm] = useState('');

  // Filter companies based on search
  const filteredCompanies = allCompanies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      company.industry.toLowerCase().includes(industrySearchTerm.toLowerCase())
  );

  // Get current companies
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);
  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);

  // Change page
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

  const handleViewCompany = (companyId: string) => {
    console.log('Viewing company:', companyId);
    // Navigate to company detail page or show modal
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="bg-white py-8 rounded-lg mb-6">
          <div className="container mx-auto px-4">
            {/* Search Bars */}
            <div className="flex flex-wrap items-center mb-4">
              <div className="flex space-x-2 w-full">
                <div className="relative w-full sm:w-[700px]"> {/* Increased width */}
                  <input
                    type="text"
                    placeholder="Search companies..."
                    className="w-full pl-4 pr-10 py-2 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-black-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search industry..."
                    className="w-full pl-4 pr-10 py-2 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={industrySearchTerm}
                    onChange={(e) => {
                      setIndustrySearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-black-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-4"> {/* Button on the right */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-2 px-4 rounded">
            Register Company
          </button>
        </div>

        {/* Results Count */}
        <div className="mb-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Showing {indexOfFirstCompany + 1}-{Math.min(indexOfLastCompany, filteredCompanies.length)} of{' '}
            {filteredCompanies.length} companies
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              name={company.name}
              logo={company.logo}
              location={company.location}
              employees={company.employees}
              about={company.about}
              onView={() => handleViewCompany(company.id)}
            />
          ))}
        </div>

        {/* Pagination */}
        {filteredCompanies.length > companiesPerPage && (
          <div className="flex justify-center mt-8">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 rounded-l-md border ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed'
                    : 'bg-white text-gray-500 hover:bg-gray-50 border-gray-300'
                }`}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
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
                    className={`relative inline-flex items-center px-4 py-2 border ${
                      currentPage === pageNum
                        ? 'z-10 bg-blue-500 border-blue-500 text-white'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 py-2 rounded-r-md border ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed'
                    : 'bg-white text-gray-500 hover:bg-gray-50 border-gray-300'
                }`}
              >
                <span className="sr-only">Next</span>
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompaniesPageAdmin;