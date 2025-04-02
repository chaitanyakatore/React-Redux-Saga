import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface RecruiterLayoutProps {
  children: React.ReactNode;
}

const RecruiterLayout: React.FC<RecruiterLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar with recruiter user type */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar userType="recruiter" />
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

export default RecruiterLayout;
