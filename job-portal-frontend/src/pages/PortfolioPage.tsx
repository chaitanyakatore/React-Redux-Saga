import React, { useRef, useEffect, useState } from "react";
import { MapPin, Mail, Phone, Github, Linkedin, SquarePen, User, Briefcase, GraduationCap, Code, Plus } from "lucide-react";

const PortfolioPage: React.FC = () => {
  // References for each section
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  // Active tab state
  const [activeTab, setActiveTab] = useState("about");

  // Scroll to section with offset for navbar
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, tab: string) => {
    if (ref.current) {
      const navbarHeight = 120; // Adjust to match your navbar height
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Directly set the active tab
      setActiveTab(tab);
    }
  };

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = [
        { ref: aboutRef, name: "about" },
        { ref: skillsRef, name: "skills" },
        { ref: experienceRef, name: "experience" },
        { ref: educationRef, name: "education" },
      ];

      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop - 120; // Subtract navbar height
          const sectionBottom = sectionTop + section.ref.current.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveTab(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample data
  const skills = [
    "JavaScript", "React", "Node.js", "Python", 
    "AWS", "Docker", "SQL", "Git"
  ];

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
    },
    {
      title: "Software Engineer",
      company: "Digital Innovations Ltd.",
      period: "2018 - 2020",
    },
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2017 - 2019",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "MIT",
      period: "2013 - 2017",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl">
        {/* Profile Card */}
        <div className="mb-8 overflow-hidden rounded-lg bg-card text-card-foreground shadow-sm">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="John Anderson"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <h1 className="text-2xl font-bold text-gray-900">John Anderson</h1>
                  <SquarePen className="h-4 w-4 text-gray-400" />
                </div>
                
                <p className="text-gray-600 mb-4">Senior Software Engineer</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">8 Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">john.anderson@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">github.com/johndev</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">linkedin.com/in/john-dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="sticky top-0 flex justify-between mb-8 border-b border-gray-200 bg-gray-50 z-10 py-2">
          <button
            className={`relative px-4 py-2 rounded-none transition-colors ${
              activeTab === "about"
                ? "text-blue-600 font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => scrollToSection(aboutRef, "about")}
          >
            About
          </button>
          
          <button
            className={`relative px-4 py-2 rounded-none transition-colors ${
              activeTab === "skills"
                ? "text-blue-600 font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => scrollToSection(skillsRef, "skills")}
          >
            Skills
          </button>

          <button
            className={`relative px-4 py-2 rounded-none transition-colors ${
              activeTab === "experience"
                ? "text-blue-600 font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => scrollToSection(experienceRef, "experience")}
          >
            Experience
          </button>
          
          <button
            className={`relative px-4 py-2 rounded-none transition-colors ${
              activeTab === "education"
                ? "text-blue-600 font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => scrollToSection(educationRef, "education")}
          >
            Education
          </button>
        </div>

        {/* About Section */}
        <div ref={aboutRef} className="mb-10 bg-white rounded-lg p-6 shadow-sm scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center">
              <User className="h-3.5 w-3.5 text-red-500" />
            </div>
            <h2 className="text-xl font-semibold">About Me</h2>
            <div className="ml-auto">
              <SquarePen className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Experienced software engineer with a passion for developing innovative programs that expedite the
            efficiency and effectiveness of organizational success. Well-versed in technology and writing code to
            create systems that are reliable and user-friendly.
          </p>
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="mb-10 bg-white rounded-lg p-6 shadow-sm scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
              <Code className="h-3.5 w-3.5 text-purple-500" />
            </div>
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="ml-auto flex gap-2">
              <Plus className="h-4 w-4 text-gray-400" />
              <SquarePen className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-blue-50 text-blue-600 hover:bg-blue-100"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div ref={experienceRef} className="mb-10 bg-white rounded-lg p-6 shadow-sm scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center">
              <Briefcase className="h-3.5 w-3.5 text-orange-500" />
            </div>
            <h2 className="text-xl font-semibold">Experience</h2>
            <div className="ml-auto flex gap-2">
              <Plus className="h-4 w-4 text-gray-400" />
              <SquarePen className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4 pb-2">
                <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div ref={educationRef} className="mb-10 bg-white rounded-lg p-6 shadow-sm scroll-mt-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
              <GraduationCap className="h-3.5 w-3.5 text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold">Education</h2>
            <div className="ml-auto flex gap-2">
              <Plus className="h-4 w-4 text-gray-400" />
              <SquarePen className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4 pb-2">
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
