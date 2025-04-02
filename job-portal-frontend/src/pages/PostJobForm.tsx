import React, { useState, useRef, useEffect } from 'react';
import { Plus, X, Search } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
}

const PostJobForm: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([
    { id: '1', name: 'JavaScript' },
    { id: '2', name: 'React' },
    { id: '3', name: 'Node.js' },
  ]);

  const [newSkill, setNewSkill] = useState('');
  const [isAddingSkill, setIsAddingSkill] = useState(false);

  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: 'Google',
    jobType: 'Full-time',
    experienceLevel: 'Entry Level',
    salary: '',
    location: '',
    jobDescription: '',
    responsibilities: '',
    qualifications: ''
  });

  const [errors, setErrors] = useState({
    jobTitle: '',
    jobType: '',
    experienceLevel: '',
    salary: '',
    location: '',
    jobDescription: '',
    responsibilities: '',
    qualifications: ''
  });

  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  const locationInputRef = useRef<HTMLInputElement>(null);

  // Function to fetch location suggestions from an external API
  const fetchLocationSuggestions = async (query: string) => {
    if (query.length < 2) {
      setLocationSuggestions([]);
      return;
    }

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${encodeURIComponent(query)}`);
      const data = await response.json();
      
      // Create a list of location suggestions with city, country, and optional state/region
      const suggestions = data.map((location: any) => {
        const parts = [];
        if (location.type === 'city' || location.type === 'town') {
          parts.push(location.display_name.split(',')[0]);
        } else if (location.type === 'state' || location.type === 'country') {
          parts.push(location.display_name);
        }
        return parts.join(', ');
      }).filter((loc: string) => loc.trim() !== '');

      // Always include 'Remote' as the first option
      const suggestionsWithRemote = ['Remote', ...new Set(suggestions)];
      
      setLocationSuggestions(suggestionsWithRemote);
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
      // Fallback suggestions if API fails
      setLocationSuggestions(['Remote']);
    }
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'jobTitle':
        return value.trim().length < 3 ? 'Job title must be at least 3 characters long' : '';
      case 'salary':
        return value && !/^\d+$/.test(value) ? 'Salary must be a number' : '';
      case 'location':
        return value.trim().length === 0 ? 'Location is required' : '';
      case 'jobDescription':
        return value.trim().length < 50 ? 'Job description must be at least 50 characters long' : '';
      case 'responsibilities':
        return value.trim().length < 30 ? 'Responsibilities must be at least 30 characters long' : '';
      case 'qualifications':
        return value.trim().length < 30 ? 'Qualifications must be at least 30 characters long' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate field
    const errorMessage = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));

    // Location suggestions
    if (name === 'location') {
      fetchLocationSuggestions(value);
    }
  };

  const handleLocationSelect = (location: string) => {
    setFormData(prev => ({
      ...prev,
      location
    }));
    setLocationSuggestions([]);
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, { id: Date.now().toString(), name: newSkill.trim() }]);
      setNewSkill('');
      setIsAddingSkill(false);
    }
  };

  const removeSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {
      jobTitle: validateField('jobTitle', formData.jobTitle),
      jobType: validateField('jobType', formData.jobType),
      experienceLevel: validateField('experienceLevel', formData.experienceLevel),
      salary: validateField('salary', formData.salary),
      location: validateField('location', formData.location),
      jobDescription: validateField('jobDescription', formData.jobDescription),
      responsibilities: validateField('responsibilities', formData.responsibilities),
      qualifications: validateField('qualifications', formData.qualifications)
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (!hasErrors) {
      // Submit form
      console.log('Form submitted', formData);
      alert('Job posting created successfully!');
    }
  };

  return (
    <div className="pt-25 min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-6">Job Details</h2>
          <p className="text-gray-500 text-sm mb-8">Fill in the details to create your job posting</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Title */}
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="e.g. Senior Software Engineer"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${
                    errors.jobTitle ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.jobTitle ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                  }`}
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value="Google"
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                />
              </div>

              {/* Job Type */}
              <div>
                <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Intern</option>
                </select>
              </div>

              {/* Experience Level */}
              <div>
                <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">
                  Experience Level
                </label>
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option>Entry Level (0-2 years)</option>
                  <option>Mid Level (3-6 years)</option>
                  <option>Senior Level (7+ years)</option>
                </select>
              </div>

              {/* Salary */}
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                  Salary
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  placeholder="e.g. 90000"
                  value={formData.salary}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${
                    errors.salary ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.salary ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                  }`}
                />
                {errors.salary && (
                  <p className="text-red-500 text-xs mt-1">{errors.salary}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Search for location"
                    value={formData.location}
                    onChange={handleInputChange}
                    ref={locationInputRef}
                    className={`w-full px-3 py-2 border ${
                      errors.location ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:outline-none focus:ring-2 ${
                      errors.location ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                    }`}
                  />
                  {locationSuggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {locationSuggestions.map((loc, index) => (
                        <div
                          key={index}
                          onClick={() => handleLocationSelect(loc)}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {loc}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {errors.location && (
                  <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                )}
              </div>
            </div>

            {/* Required Skills */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Required Skills
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {skill.name}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill.id)}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
                {isAddingSkill ? (
                  <div className="flex items-center bg-blue-50 rounded-full px-2 py-1">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      className="bg-transparent outline-none text-sm text-blue-600 w-full"
                      placeholder="Enter skill"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsAddingSkill(true)}
                    className="flex items-center gap-1 px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-full"
                  >
                    <Plus className="w-4 h-4" />
                    Add Skill
                  </button>
                )}
              </div>
            </div>

            {/* Job Description */}
            <div>
              <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                rows={4}
                placeholder="Describe the role..."
                value={formData.jobDescription}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border ${
                  errors.jobDescription ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 ${
                  errors.jobDescription ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
              />
              {errors.jobDescription && (
                <p className="text-red-500 text-xs mt-1">{errors.jobDescription}</p>
              )}
            </div>

            {/* Responsibilities */}
            <div>
              <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700 mb-1">
                Responsibilities
              </label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                rows={4}
                placeholder="Describe the responsibilities..."
                value={formData.responsibilities}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border ${
                  errors.responsibilities ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 ${
                  errors.responsibilities ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
              />
              {errors.responsibilities && (
                <p className="text-red-500 text-xs mt-1">{errors.responsibilities}</p>
              )}
            </div>

            {/* Qualifications */}
            <div>
              <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700 mb-1">
                Qualifications
              </label>
              <textarea
                id="qualifications"
                name="qualifications"
                rows={4}
                placeholder="Describe the requirements..."
                value={formData.qualifications}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border ${
                  errors.qualifications ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 ${
                  errors.qualifications ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
              />
              {errors.qualifications && (
                <p className="text-red-500 text-xs mt-1">{errors.qualifications}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobForm;