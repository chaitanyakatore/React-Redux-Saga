import React from 'react';
import ApplicantProfileCard, { ApplicantCardType, ApplicantStatus } from '../components/PostedJob/ApplicantProfileCard';

// Sample data type for an applicant
export interface ApplicantData {
  id: string;
  name: string;
  profileImage?: string;
  designation: string;
  description: string;
  experience: string;
  location: string;
  status?: ApplicantStatus;
}

interface PostedJobTabSectionLayoutProps {
  applicants: ApplicantData[];
  cardType: ApplicantCardType;
  onProfileClick?: (applicantId: string) => void;
  onUpdateClick?: (applicantId: string) => void;
  onViewClick?: (applicantId: string) => void;
  onAcceptClick?: (applicantId: string) => void;
  onRejectClick?: (applicantId: string) => void;
  onMessageClick?: (applicantId: string) => void;
}

const PostedJobTabSectionLayout: React.FC<PostedJobTabSectionLayoutProps> = ({
  applicants,
  cardType = 'applicant_tab',
  onProfileClick,
  onUpdateClick,
  onViewClick,
  onAcceptClick,
  onRejectClick,
  onMessageClick,
}) => {
  if (applicants.length === 0) {
    return (
      <div className="bg-white rounded-xl p-16 shadow-sm border border-gray-100 flex flex-col items-center justify-center">
        <p className="text-gray-400 text-lg">No applicants yet</p>
        <p className="text-gray-400">Your job posting has not received any applications</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {applicants.map((applicant) => (
        <ApplicantProfileCard
          key={applicant.id}
          profileImage={applicant.profileImage}
          name={applicant.name}
          designation={applicant.designation}
          description={applicant.description}
          experience={applicant.experience}
          location={applicant.location}
          status={applicant.status}
          cardType={cardType}
          onProfileClick={() => onProfileClick?.(applicant.id)}
          onUpdateClick={() => onUpdateClick?.(applicant.id)}
          onViewClick={() => onViewClick?.(applicant.id)}
          onAcceptClick={() => onAcceptClick?.(applicant.id)}
          onRejectClick={() => onRejectClick?.(applicant.id)}
          onMessageClick={() => onMessageClick?.(applicant.id)}
        />
      ))}
    </div>
  );
};

export default PostedJobTabSectionLayout;
