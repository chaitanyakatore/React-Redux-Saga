import React, { useState } from 'react';
import Select from 'react-select';
import { Briefcase, MapPin, Rocket, Search } from 'lucide-react';

const locationOptions = [
  { value: 'san-francisco', label: 'San Francisco' },
  { value: 'new-york', label: 'New York' },
  { value: 'seattle', label: 'Seattle' },
  { value: 'london', label: 'London' },
  { value: 'chennai', label: 'Chennai' },
];

const skillOptions = [
  { value: 'react', label: 'React' },
  { value: 'python', label: 'Python' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'java', label: 'Java' },
  { value: 'design', label: 'UI/UX Design' },
  { value: 'aws', label: 'Amazon Web Services (AWS)' },
  { value: 'node', label: 'Node.js' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'docker', label: 'Docker' },
  { value: 'kubernetes', label: 'Kubernetes' },
];

const experienceOptions = [
  { value: 'entry', label: 'Entry Level (0-2 years)' },
  { value: 'mid', label: 'Mid Level (3-6 years)' },
  { value: 'senior', label: 'Senior Level (7+ years)' },
];

export const TalentFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    location: null,
    skills: [],
    experience: null,
    jobTitle: '',
  });

  const handleLocationChange = (selectedOption) => {
    const newFilters = { ...filters, location: selectedOption };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleSkillsChange = (selectedOptions) => {
    const newFilters = { ...filters, skills: selectedOptions || [] };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleExperienceChange = (selectedOption) => {
    const newFilters = { ...filters, experience: selectedOption };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleJobTitleChange = (e) => {
    const newFilters = { ...filters, jobTitle: e.target.value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      minHeight: '40px',
      boxShadow: 'none',
      display: 'flex',
      alignItems: 'center',
      padding: '0 0.75rem',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0',
      height: '38px',
      overflow: 'hidden',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#e0f2fe',
      color: '#1e40af',
      borderRadius: '0.375rem',
      display: 'flex',
      alignItems: 'center',
      minWidth: 'max-content',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      padding: '0.25rem 0.5rem',
      fontSize: '0.75rem',
      whiteSpace: 'nowrap',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: '#bae6fd',
        color: '#1e40af',
      },
    }),
    input: (provided) => ({
      ...provided,
      margin: '0',
      padding: '0',
    }),
    placeholder: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      color: '#6b7280',
      fontSize: '0.875rem',
    }),
    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      color: '#374151',
      fontSize: '0.875rem',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#eff6ff' : state.isFocused ? '#f9fafb' : undefined,
      color: '#374151',
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.875rem',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#6b7280',
      padding: '0',
      ':hover': {
        color: '#374151',
      },
    }),
  };

  const skillStyles = {
    ...selectStyles,
    control: (provided) => ({
      ...selectStyles.control(provided),
      minHeight: '40px',
      overflow: 'hidden',
    }),
    valueContainer: (provided) => ({
      ...provided,
      flexWrap: 'nowrap',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      paddingRight: '8px',
    }),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <div>
        <Select
          styles={selectStyles}
          className="w-full"
          placeholder={
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-gray-400" />
              <span>Search Location</span>
            </div>
          }
          value={filters.location}
          onChange={handleLocationChange}
          options={locationOptions}
          isSearchable
          isClearable
        />
      </div>

      <div>
        <Select
          styles={skillStyles}
          className="w-full"
          placeholder={
            <div className="flex items-center">
              <Rocket className="mr-2 h-4 w-4 text-gray-400" />
              <span>Select Skills</span>
            </div>
          }
          value={filters.skills}
          onChange={handleSkillsChange}
          options={skillOptions}
          isMulti
          isSearchable
        />
      </div>

      <div>
        <Select
          styles={selectStyles}
          className="w-full"
          placeholder={
            <div className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4 text-gray-400" />
              <span>Select Experience</span>
            </div>
          }
          value={filters.experience}
          onChange={handleExperienceChange}
          options={experienceOptions}
          isClearable
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 h-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search job titles..."
          value={filters.jobTitle}
          onChange={handleJobTitleChange}
        />
      </div>
    </div>
  );
};