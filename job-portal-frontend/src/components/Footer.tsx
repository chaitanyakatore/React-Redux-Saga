import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const textColor = 'text-[#9CA3AF]';
  const headingSize = 'text-lg font-semibold'; // Using text-lg for all headings
  const textColorSize = 'text-sm';

  return (
    <footer className="bg-[#1a1a2e] text-white py-12 px-8">
      <div className="container mx-auto flex md:flex-row justify-between items-start gap-25">
        <div className="w-1/4 pl-6"> {/* Added pr-6 for margin on the first section */}
          <h3 className={`${headingSize} mb-4`}>JobPortal.io</h3>
          <p className={`mb-4 ${textColor} ${textColorSize}`}>Connecting talent with opportunity</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">
              <Twitter size={20} className={`${textColor} ${textColorSize}`} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Facebook size={20} className={`${textColor} ${textColorSize}`} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Instagram size={20} className={`${textColor} ${textColorSize}`} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin size={20} className={`${textColor} ${textColorSize}`} />
            </a>
          </div>
        </div>

        <div className="w-1/4">
          <h4 className={`${headingSize} mb-4`}>For Job Seekers</h4>
          <ul className="space-y-2 m-0">
            <li><a href="#" className={`hover:text-blue-400 ${textColor} ${textColorSize}`}>Browse Jobs</a></li>
            <li><a href="#" className={`hover:text-blue-400 ${textColor} ${textColorSize}`}>Job Alerts</a></li>
          </ul>
        </div>

        <div className="w-1/4">
          <h4 className={`${headingSize} mb-4`}>For Employers</h4>
          <ul className="space-y-2 m-0">
            <li><a href="#" className={`hover:text-blue-400 ${textColor} ${textColorSize}`}>Post a Job</a></li>
            <li><a href="#" className={`hover:text-blue-400 ${textColor} ${textColorSize}`}>Browse Candidates</a></li>
          </ul>
        </div>

        <div className="w-1/4">
          <h4 className={`${headingSize} mb-4`}>Contact Us</h4>
          <ul className="space-y-2 m-0">
            <li className="flex items-center space-x-3">
              <Mail size={20} className={`${textColor} ${textColorSize}`} />
              <a href="mailto:support@jobportal.com" className={`hover:text-blue-400 ${textColor} ${textColorSize}`}>support@jobportal.com</a>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className={`${textColor} ${textColorSize}`} />
              <a href="tel:+16153234567" className={`hover:text-blue-400 ${textColor} ${textColorSize}`}>+1 (615) 323-4567</a>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={20} className={`${textColor} ${textColorSize}`} />
              <span className={`${textColor} ${textColorSize}`}>San Francisco, CA</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 pt-6 border-t border-gray-700">
        <p className={`text-sm ${textColor}`}>© 2025 JobPortal.io. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;