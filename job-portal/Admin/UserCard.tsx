import { MapPin, Briefcase, Building } from 'lucide-react';
import React from 'react';

export interface UserData {
  id: number;
  name: string;
  title: string;
  location: string;
  experience: string;
  imageUrl: string;
  company?: string;
  type: 'candidate' | 'recruiter';
}

interface UserCardProps {
  user: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <img
            src={user.imageUrl}
            alt={`${user.name}'s profile`}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <div className="flex items-center">
              <h3 className="text-base font-medium text-gray-900">{user.name}</h3>
              <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
                user.type === 'candidate' 
                  ? 'text-blue-600 bg-blue-100' 
                  : 'text-purple-600 bg-purple-100'
              }`}>
                {user.type === 'candidate' ? 'Candidate' : 'Recruiter'}
              </span>
            </div>
            <p className="text-sm text-gray-500">{user.title}</p>
          </div>
        </div>
      </div>

      <div className="space-y-1 mb-3">
        <div className="flex items-center text-xs text-gray-500">
          <MapPin size={12} className="mr-1" />
          <span>{user.location}</span>
        </div>
        <div className="flex items-center text-xs text-gray-500">
          {user.company ? (
            <>
              <Building size={12} className="mr-1" />
              <span>{user.company}</span>
            </>
          ) : (
            <>
              <Briefcase size={12} className="mr-1" />
              <span>{user.experience}</span>
            </>
          )}
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="px-3 py-1 text-xs bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500">
          Profile
        </button>
        <button className="px-3 py-1 text-xs bg-gray-100 text-blue-600 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500">
          Disable
        </button>
        <button className="px-3 py-1 text-xs bg-white text-gray-500 font-medium rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;