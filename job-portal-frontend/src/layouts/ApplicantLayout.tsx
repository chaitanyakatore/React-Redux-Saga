import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ApplicantLayoutProps {
  children: React.ReactNode;
}

const ApplicantLayout: React.FC<ApplicantLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar with applicant user type */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar userType="applicant" />
      </div>
      
      {/* Spacer to push content below fixed navbar */}
      <div className="h-16"></div>
      
      {/* Main content area */}
      <main className="flex-grow pt-4">
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ApplicantLayout;
