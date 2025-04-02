import React from 'react';
import { User, Briefcase, MapPin } from 'lucide-react';

export type ApplicantCardType = 'applicant_tab' | 'invited_tab' | 'offered_tab';

export type ApplicantStatus = 'accepted' | 'rejected' | 'pending';

interface ApplicantProfileCardProps {
  profileImage?: string;
  name: string;
  designation: string;
  description: string;
  experience: string;
  location: string;
  cardType: ApplicantCardType;
  status?: ApplicantStatus;
  onProfileClick?: () => void;
  onUpdateClick?: () => void;
  onViewClick?: () => void;
  onAcceptClick?: () => void;
  onRejectClick?: () => void;
  onMessageClick?: () => void;
}

const ApplicantProfileCard: React.FC<ApplicantProfileCardProps> = ({
  profileImage,
  name,
  designation,
  description,
  experience,
  location,
  cardType = 'applicant_tab',
  status,
  onProfileClick,
  onUpdateClick,
  onViewClick,
  onAcceptClick,
  onRejectClick,
  onMessageClick,
}) => {
  // Function to render status tag
  const renderStatusTag = (status: ApplicantStatus) => {
    let bgColor = '';
    let textColor = '';
    
    switch (status) {
      case 'accepted':
        bgColor = 'bg-green-100';
        textColor = 'text-green-700';
        break;
      case 'rejected':
        bgColor = 'bg-red-100';
        textColor = 'text-red-700';
        break;
      case 'pending':
        bgColor = 'bg-yellow-100';
        textColor = 'text-yellow-700';
        break;
      default:
        bgColor = 'bg-gray-100';
        textColor = 'text-gray-700';
    }
    
    return (
      <span className={`text-xs px-2 py-1 rounded-full font-medium ${bgColor} ${textColor}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  // Function to render buttons based on card type
  const renderButtons = () => {
    switch (cardType) {
      case 'invited_tab':
        return (
          <div className="flex gap-2">
            <button 
              onClick={onAcceptClick}
              className="text-xs px-3 py-1.5 bg-blue-600 text-white rounded-lg transition-all duration-300 hover:bg-blue-700 flex-1"
            >
              Accept
            </button>
            <button 
              onClick={onRejectClick}
              className="text-xs px-3 py-1.5 bg-white border border-blue-600 text-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-50 flex-1"
            >
              Reject
            </button>
            <button 
              onClick={onViewClick}
              className="text-xs px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-50 flex-1"
            >
              View
            </button>
          </div>
        );
      case 'offered_tab':
        return (
          <div className="flex gap-2">
            <button 
              onClick={onProfileClick}
              className="text-xs px-3 py-1.5 bg-blue-600 text-white rounded-lg transition-all duration-300 hover:bg-blue-700 flex-1"
            >
              Profile
            </button>
            <button 
              onClick={onMessageClick}
              className="text-xs px-3 py-1.5 bg-white border border-blue-600 text-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-50 flex-1"
            >
              Message
            </button>
          </div>
        );
      case 'applicant_tab':
      default:
        return (
          <div className="flex gap-2">
            <button 
              onClick={onProfileClick}
              className="text-xs px-3 py-1.5 bg-blue-600 text-white rounded-lg transition-all duration-300 hover:bg-blue-700 flex-1"
            >
              Profile
            </button>
            <button 
              onClick={onUpdateClick}
              className="text-xs px-3 py-1.5 bg-white border border-blue-600 text-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-50 flex-1"
            >
              Update
            </button>
            <button 
              onClick={onViewClick}
              className="text-xs px-3 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-50 flex-1"
            >
              View
            </button>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-100 hover:translate-y-[-4px] hover:scale-[1.02] group">
      {/* First main row: Profile pic + Name/Designation */}
      <div className="flex gap-4 mb-4">
        {/* Profile pic column */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
            {profileImage ? (
              <img src={profileImage} alt={name} className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <User className="w-6 h-6 text-blue-600" />
            )}
          </div>
        </div>

        {/* Name & Designation column */}
        <div className="flex-grow">
          {/* First sub-row: Name */}
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{name}</h3>
            {cardType === 'offered_tab' && status && renderStatusTag(status)}
          </div>
          
          {/* Second sub-row: Designation */}
          <div className="text-sm text-gray-500 mt-1">
            {designation}
          </div>
        </div>
      </div>

      {/* Second main row: Description */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 line-clamp-2 group-hover:text-gray-800 transition-colors duration-300">{description}</p>
      </div>

      {/* Third main row: Experience */}
      <div className="flex items-center text-sm text-gray-600 mb-2 group-hover:text-gray-800 transition-colors duration-300">
        <Briefcase className="w-4 h-4 mr-2 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
        <span>{experience}</span>
      </div>

      {/* Fourth main row: location */}
      <div className="flex items-center text-sm text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
        <MapPin className="w-4 h-4 mr-2 text-gray-500 group-hover:text-blue-600 transition-colors duration-300" />
        <span>{location}</span>
      </div>

      {/* Fifth main row: Buttons */}
      {renderButtons()}
    </div>
  );
};

export default ApplicantProfileCard;
