import React from 'react';
import { Globe, Linkedin, MapPin, Users, Building2, DollarSign, Calendar, User, Globe2 } from 'lucide-react';

const CompanyInfo: React.FC = () => {
  const domainCards = [
    {
      title: "Cloud Computing",
      description: "Enterprise-grade cloud solutions and services"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent automation and data analysis"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions and consulting"
    }
  ];

  return (
    <div className="pt-25 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Company Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="flex-1">
            <div className="flex items-start gap-6">
              {/* Company Logo */}
              <div className="bg-yellow-400 rounded-full p-6">
                <div className="w-12 h-12 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 text-black">✻</div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TechCorp Solutions</h1>
                <p className="text-gray-600 mt-1">Technology & Innovation Company</p>
                <div className="flex items-center gap-4 mt-3">
                  <a href="http://www.techcorp.com" className="flex items-center text-blue-600 hover:text-blue-700">
                    <Globe className="w-4 h-4 mr-1" />
                    www.techcorp.com
                  </a>
                  <a href="https://linkedin.com" className="flex items-center text-blue-600 hover:text-blue-700">
                    <Linkedin className="w-4 h-4 mr-1" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              TechCorp Solutions is a leading technology company specializing in innovative 
              software solutions, cloud computing, and digital transformation services. Equipped to 
              handle complex technological challenges, we help businesses of all sizes successfully 
              navigate the digital landscape.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="bg-white rounded-lg shadow-sm p-6 w-full md:w-72">
            <h2 className="font-semibold text-gray-900 mb-4">Quick Facts</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600">5000+ Employees</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600">20+ Global Offices</span>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600">$500M Annual Revenue</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Company Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Headquarters */}
            <div className="bg-white rounded-lg shadow-sm p-6 w-full md:w-72">
              <h3 className="font-medium text-gray-900 mb-2">Headquarters</h3>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                <p className="text-gray-600">
                  123 Tech Avenue, Silicon Valley, CA 94025,<br />
                  United States
                </p>
              </div>
            </div>

            {/* Founded */}
            <div className="bg-white rounded-lg shadow-sm p-6 w-full md:w-72">
              <h3 className="font-medium text-gray-900 mb-2">Founded</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">2015</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">Jane Smith, CEO & Founder</span>
                </div>
              </div>
            </div>

            {/* Industry */}
            <div className="bg-white rounded-lg shadow-sm p-6 w-full md:w-72">
              <h3 className="font-medium text-gray-900 mb-2">Industry</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">Information Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">Global Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Domain */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Domain</h2>
          <div className="relative w-full overflow-hidden">
            <div className="animate-infinite-scroll flex">
              {[...domainCards, ...domainCards, ...domainCards].map((card, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 bg-white rounded-lg shadow-sm p-6 w-72 mr-4 last:mr-0"
                >
                  <h3 className="font-medium text-gray-900">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles for Infinite Scroll */}
      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-infinite-scroll {
          display: flex;
          animation: infinite-scroll 20s linear infinite;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default CompanyInfo;