import { FC, useState } from 'react';
import { AtSign, Building2, LockKeyhole, User } from 'lucide-react';


interface RegistrationProps {
    onToggle: () => void;
}

const Registration: FC<RegistrationProps> = ({ onToggle }) => {
    const [userRole, setUserRole] = useState<'job-seeker' | 'employer'>('job-seeker');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="w-full h-full flex font-['Poppins'] select-none">
            {/* Left side - Image area */}
            <div className="w-1/2 h-full bg-[#F9FAFB] flex flex-col p-8">
                {/* Back Button */}
                {/* <div className="flex items-center mb-4">
                    <Link to="/" className="flex items-center text-[#2563EB] hover:text-[#2563EB]">
                        <ArrowLeft size={20} className="mr-2" />
                        <span>Home</span>
                    </Link>
                </div> */}
                <div className="flex-1 flex justify-center items-center">
                    <img 
                        src="/src/assets/registration_page_image.png" 
                        alt="Registration illustration" 
                        className="max-w-4/5 max-h-4/5 object-contain"
                    />
                </div>
            </div>
            
            {/* Right side - Form area */}
            <div className="w-1/2 h-full bg-white flex flex-col p-8">
                
                <div className="flex-1 flex flex-col max-w-md mx-auto w-full origin-top justify-center">
                    {/* Registration Title */}
                    <h1 className="text-2xl font-bold text-[#2563EB] mb-5">Register</h1>
                    
                    <form className="space-y-4">
                        {/* Role Selection */}
                        <div className="space-y-1">
                            <label className="block text-gray-700 text-xs font-medium mb-1">
                                I am a <span className="text-red-500">*</span>
                            </label>
                            <div className="flex space-x-6">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="userRole" 
                                        value="job-seeker"
                                        checked={userRole === 'job-seeker'}
                                        onChange={() => setUserRole('job-seeker')}
                                        className="h-3.5 w-3.5 text-[#2563EB] border-gray-300 focus:ring-[#2563EB]"
                                    />
                                    <span className="text-gray-700 text-sm">Job Seeker</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="userRole" 
                                        value="employer"
                                        checked={userRole === 'employer'}
                                        onChange={() => setUserRole('employer')}
                                        className="h-3.5 w-3.5 text-[#2563EB] border-gray-300 focus:ring-[#2563EB]"
                                    />
                                    <span className="text-gray-700 text-sm">Employer</span>
                                </label>
                            </div>
                        </div>
                        
                        {/* Name Input */}
                        <div className="space-y-1">
                            <label className="block text-gray-700 text-xs font-medium">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User size={14} className="text-gray-400" />
                                </div>
                                <input 
                                    type="text" 
                                    className="w-full py-2 pl-9 pr-3 rounded-[10px] border border-[#2563EB] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Email Input */}
                        <div className="space-y-1">
                            <label className="block text-gray-700 text-xs font-medium">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <AtSign size={14} className="text-gray-400" />
                                </div>
                                <input 
                                    type="email" 
                                    className="w-full py-2 pl-9 pr-3 rounded-[10px] border border-[#2563EB] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Container for form fields that move up */}
                        <div className="relative transition-all duration-300 ease-in-out">
                            {/* Company Name Input - Only for Employers */}
                            <div className={`space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${userRole === 'employer' ? 'max-h-24 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                <label className="block text-gray-700 text-xs font-medium">
                                    Company Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Building2 size={14} className="text-gray-400" />
                                    </div>
                                    <input 
                                        type="text" 
                                        className="w-full py-2 pl-9 pr-3 rounded-[10px] border border-[#2563EB] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm"
                                        placeholder="Enter your company name"
                                        required={userRole === 'employer'}
                                        disabled={userRole !== 'employer'}
                                    />
                                </div>
                            </div>
                            
                            {/* Password Input */}
                            <div className="space-y-1">
                                <label className="block text-gray-700 text-xs font-medium">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <LockKeyhole size={14} className="text-gray-400" />
                                    </div>
                                    <input 
                                        type="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full py-2 pl-9 pr-3 rounded-[10px] border border-[#2563EB] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB] appearance-none text-sm"
                                        placeholder="Create a password"
                                        required
                                        autoComplete="new-password"
                                        spellCheck="false"
                                        data-ms-editor="false"
                                        aria-autocomplete="none"
                                    />
                                </div>
                            </div>
                            
                            {/* Confirm Password Input */}
                            <div className="space-y-1 mt-4">
                                <label className="block text-gray-700 text-xs font-medium">
                                    Confirm Password <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <LockKeyhole size={14} className="text-gray-400" />
                                    </div>
                                    <input 
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full py-2 pl-9 pr-3 rounded-[10px] border border-[#2563EB] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB] appearance-none text-sm"
                                        placeholder="Confirm your password"
                                        required
                                        autoComplete="new-password"
                                        spellCheck="false"
                                        data-ms-editor="false"
                                        aria-autocomplete="none"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Create Account Button */}
                        <button 
                            type="submit" 
                            className="w-full bg-[#2563EB] py-2.5 text-white rounded-[10px] hover:bg-blue-700 transition-all font-medium mt-3 text-sm"
                        >
                            Create Account
                        </button>
                    </form>
                    
                    {/* Login Link */}
                    <div className="mt-5 flex flex-col items-center">
                        <p className="text-gray-600 text-sm">
                            Already have an account? 
                            <a 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    onToggle();
                                }}
                                className="text-[#006AFF] ml-1 font-medium inline-block transition-transform duration-200 hover:scale-105"
                            >
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
