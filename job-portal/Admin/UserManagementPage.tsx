import React, { useState } from 'react';
import { MapPin, Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import UserCard, { UserData } from '../../components/admin/UserCard';

const UserManagementPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Sample user data
  const users: UserData[] = [
    {
        id: 1,
        name: 'John Smith',
        title: 'Software Engineer',
        location: 'New York, USA',
        experience: '5 Years Experience',
        imageUrl: 'https://i.pravatar.cc/150?img=1',
        type: 'candidate'
      },
      {
        id: 2,
        name: 'Sarah Johnson',
        title: 'HR Manager',
        location: 'London, UK',
        experience: 'Tech Solutions Inc.',
        imageUrl: 'https://i.pravatar.cc/150?img=2',
        company: 'Tech Solutions Inc.',
        type: 'recruiter'
      },
      {
        id: 3,
        name: 'Michael Chen',
        title: 'Product Designer',
        location: 'Singapore',
        experience: '3 Years Experience',
        imageUrl: 'https://i.pravatar.cc/150?img=3',
        type: 'candidate'
      },
      {
        id: 4,
        name: 'John Smith',
        title: 'Software Engineer',
        location: 'New York, USA',
        experience: '5 Years Experience',
        imageUrl: 'https://i.pravatar.cc/150?img=4',
        type: 'candidate'
      },
      {
        id: 5,
        name: 'Sarah Johnson',
        title: 'HR Manager',
        location: 'London, UK',
        experience: 'Tech Solutions Inc.',
        imageUrl: 'https://i.pravatar.cc/150?img=5',
        company: 'Tech Solutions Inc.',
        type: 'recruiter'
      },
      {
        id: 6,
        name: 'Michael Chen',
        title: 'Product Designer',
        location: 'Singapore',
        experience: '3 Years Experience',
        imageUrl: 'https://i.pravatar.cc/150?img=6',
        type: 'candidate'
      },
      {
        id: 7,
        name: 'John Smith',
        title: 'Software Engineer',
        location: 'New York, USA',
        experience: '5 Years Experience',
        imageUrl: 'https://i.pravatar.cc/150?img=7',
        type: 'candidate'
      },
      {
        id: 8,
        name: 'Sarah Johnson',
        title: 'HR Manager',
        location: 'London, UK',
        experience: 'Tech Solutions Inc.',
        imageUrl: 'https://i.pravatar.cc/150?img=8',
        company: 'Tech Solutions Inc.',
        type: 'recruiter'
      },
      {
        id: 9,
        name: 'Michael Chen',
        title: 'Product Designer',
        location: 'Singapore',
        experience: '3 Years Experience',
        imageUrl: 'https://i.pravatar.cc/150?img=9',
        type: 'candidate'
      },
      {
        id: 10,
        name: 'John Smith',
        title: 'Software Engineer',
        location: 'New York, USA',
        experience: '5 Years Experience',
        imageUrl: 'https://i.pravatar.cc/150?img=10',
        type: 'candidate'
      },
      {
        id: 11,
        name: 'Sarah Johnson',
        title: 'HR Manager',
        location: 'London, UK',
        experience: 'Tech Solutions Inc.',
        imageUrl: 'https://i.pravatar.cc/150?img=11',
        company: 'Tech Solutions Inc.',
        type: 'recruiter'
      },
      {
        id: 12,
        name: 'Michael Chen',
        title: 'Product Designer',
        location: 'Singapore',
        experience: '3 Years Experience',
        imageUrl: 'https://i.pravatar.cc/150?img=12',
        type: 'candidate'
      },
    ];

  // Calculate pagination
  const itemsPerPage = 12;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-3">
          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3">
            <div className="relative w-full md:w-auto">
              <button
                type="button"
                className="inline-flex justify-between w-48 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                Filter by Role
                <ChevronDown size={16} className="ml-2" />
              </button>
            </div>
            
            <div className="relative w-full md:w-auto">
              <button
                type="button"
                className="inline-flex justify-between w-48 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                Filter by Location
                <ChevronDown size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* User Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="inline-flex items-center px-2 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`inline-flex items-center px-4 py-2 border ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
              } rounded-md text-sm font-medium`}
            >
              {i + 1}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="inline-flex items-center px-2 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;