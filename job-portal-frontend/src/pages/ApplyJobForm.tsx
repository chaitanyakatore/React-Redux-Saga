import React, { useState, useRef } from 'react';
import { ArrowLeft, Building2, Upload, X, FileText } from 'lucide-react';

const ApplyJobForm: React.FC = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    coverLetter: ''
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    resumeFile: '',
    coverLetter: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'fullName':
        return value.trim().length < 2 ? 'Full name must be at least 2 characters long' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return !phoneRegex.test(value) ? 'Please enter a valid phone number' : '';
      case 'website':
        const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        return value && !urlRegex.test(value) ? 'Please enter a valid URL' : '';
      case 'coverLetter':
        if (value.trim().length < 50) {
          return 'Cover letter must be at least 50 characters long';
        }
        if (value.trim().length > 2000) {
          return 'Cover letter must not exceed 2000 characters';
        }
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          resumeFile: 'File size exceeds 5MB limit'
        }));
        return;
      }

      // Validate file type
      const allowedTypes = ['application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          resumeFile: 'Only PDF files are allowed'
        }));
        return;
      }

      setResumeFile(file);
      setErrors(prev => ({
        ...prev,
        resumeFile: ''
      }));
    }
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear the file input
    }
    setErrors(prev => ({
      ...prev,
      resumeFile: ''
    }));
  };

  const handleOpenPDF = () => {
    if (resumeFile) {
      const fileURL = URL.createObjectURL(resumeFile);
      window.open(fileURL, '_blank');
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          resumeFile: 'File size exceeds 5MB limit'
        }));
        return;
      }

      // Validate file type
      const allowedTypes = ['application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          resumeFile: 'Only PDF files are allowed'
        }));
        return;
      }

      setResumeFile(file);
      setErrors(prev => ({
        ...prev,
        resumeFile: ''
      }));
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      website: validateField('website', formData.website),
      coverLetter: validateField('coverLetter', formData.coverLetter),
      resumeFile: !resumeFile ? 'Please upload a resume' : ''
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    
    if (!hasErrors) {
      // Here you would typically send the form data to a server
      console.log('Form submitted', { ...formData, resumeFile });
      
      // Reset form or show success message
      alert('Application submitted successfully!');
    }
  };

  return (
    <div className="pt-25 min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Navigation */}
        <a
          href="#"
          className="inline-flex items-center text-gray-600 mb-6 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Jobs
        </a>

        {/* Job Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-100 rounded-lg">
              <Building2 className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Senior UX Designer
              </h1>
              <div className="flex items-center gap-4 text-gray-600 text-sm mt-1">
                <span>Google Inc.</span>
                <span>•</span>
                <span>Posted 2 days ago</span>
                <span>•</span>
                <span>45 applicants</span>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">
            Submit your Application
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.fullName
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.phone ? "focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Personal Website */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Personal Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="https://johndoe.com"
                  value={formData.website}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${
                    errors.website ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 ${
                    errors.website
                      ? "focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {errors.website && (
                  <p className="text-red-500 text-xs mt-1">{errors.website}</p>
                )}
              </div>
            </div>

            {/* Resume/CV Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Resume/CV
              </label>
              <div
                className={`border-2 border-dashed ${
                  errors.resumeFile ? "border-red-500" : "border-gray-300"
                } rounded-lg p-6 text-center`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {!resumeFile ? (
                  <>
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-1">
                      Drag and drop your resume here, or
                    </p>
                    <div>
                      <label className="text-blue-600 hover:text-blue-700 cursor-pointer">
                        browse files
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          accept=".pdf"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Maximum file size: 5MB (PDF)
                    </p>
                  </>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button 
                        type="button" 
                        onClick={handleOpenPDF}
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        <span className="text-m cursor-pointer">{resumeFile.name}</span>
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
                {errors.resumeFile && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.resumeFile}
                  </p>
                )}
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={6}
                placeholder="Write your cover letter here..."
                value={formData.coverLetter}
                onChange={handleInputChange}
                maxLength={2000}
                className={`w-full px-3 py-2 border ${
                  errors.coverLetter ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 ${
                  errors.coverLetter
                    ? "focus:ring-red-500"
                    : "focus:ring-blue-500"
                }`}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                {errors.coverLetter && (
                  <p className="text-red-500">{errors.coverLetter}</p>
                )}
                <p>{formData.coverLetter.length}/2000 characters</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobForm;