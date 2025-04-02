import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, MessageCircle, UserCircle } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = ({ userType = 'applicant' }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Tabs for applicant
  const applicantTabs = [
    { label: 'Find Jobs', href: '/jobs' },
    { label: 'Saved Jobs', href: '/saved-jobs' },
    { label: 'Applied Jobs', href: '/applied-jobs' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Companies', href: '/companies' }
  ];

  // Tabs for recruiter
  const recruiterTabs = [
    { label: 'Find Talents', href: '/talents' },
    { label: 'Post Jobs', href: '/post-jobs' },
    { label: 'Posted Jobs', href: '/posted-jobs' }
  ];

  // Home tabs for landing page
  const homeTabs = [
    { label: 'Find Jobs', href: '#find-jobs' },
    { label: 'Post Jobs', href: '#post-jobs' },
    { label: 'About', href: '#about' }
  ];

  // Determine which tabs to use based on user type
  const tabs = userType === 'applicant' ? applicantTabs : 
               userType === 'home' ? homeTabs : 
               recruiterTabs;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Left side - JobPortal Heading */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center"
        >
          <h1 className="text-2xl font-bold text-[#2563EB] tracking-wide">JobPortal</h1>
        </motion.div>

        {/* Tabs in the middle */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {tabs.map((tab, index) => (
            <motion.li
              key={tab.label}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <Link
                href={tab.href}
                className={`
                  text-[#4B5563] transition-colors duration-300 font-medium text-sm lg:text-base 
                  ${activeTab === index 
                    ? 'text-blue-600 font-semibold' 
                    : 'hover:text-blue-600'}
                `}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right side - Icons and Buttons */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center space-x-4"
        >
          {/* Notification Icon */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer"
            title="Notifications"
          >
            <Bell 
              size={24} 
              className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
            />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              3
            </span>
          </motion.div>

          {/* Messages Icon */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer"
            title="Messages"
          >
            <MessageCircle 
              size={24} 
              className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
            />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              2
            </span>
          </motion.div>

          {/* Profile Icon */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="group cursor-pointer"
            title="Profile"
          >
            <UserCircle 
              size={28} 
              className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;