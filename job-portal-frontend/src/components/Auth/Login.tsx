import { FC, useState } from 'react';
import { AtSign, LockKeyhole } from 'lucide-react';


interface LoginProps {
    onToggle: () => void;
}

const Login: FC<LoginProps> = ({ onToggle }) => {
    const [password, setPassword] = useState('');

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
                        src="/src/assets/login_page_image.webp" 
                        alt="Login illustration" 
                        className="max-w-4/5 max-h-4/5 object-contain"
                    />
                </div>
            </div>
            
            {/* Right side - Form area */}
            <div className="w-1/2 h-full bg-white flex flex-col p-8">
                
                <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full origin-top pt-16">
                    {/* Login Title */}
                    <h1 className="text-3xl font-bold text-[#2563EB] mb-8">Login</h1>
                    
                    <form className="space-y-5">
                        {/* Email Input */}
                        <div className="space-y-1.5">
                            <label className="block text-gray-700 text-sm font-medium">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <AtSign size={16} className="text-gray-400" />
                                </div>
                                <input 
                                    type="email" 
                                    className="w-full py-2.5 pl-10 pr-3 rounded-[10px] border border-[#2563EB] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        
                        {/* Password Input */}
                        <div className="space-y-1.5">
                            <label className="block text-gray-700 text-sm font-medium">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <LockKeyhole size={16} className="text-gray-400" />
                                </div>
                                <input 
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full py-2.5 pl-10 pr-3 rounded-[10px] border border-[#2563EB] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2563EB] appearance-none"
                                    placeholder="Enter your password"
                                    autoComplete="new-password"
                                />
                            </div>
                        </div>
                        
                        {/* Login Button */}
                        <button 
                            type="submit" 
                            className="w-full bg-[#2563EB] py-2.5 text-white rounded-[10px] hover:bg-blue-700 transition-all font-medium"
                        >
                            Login
                        </button>
                    </form>
                    
                    {/* Sign up and Forgot Password */}
                    <div className="mt-6 flex flex-col items-center space-y-2">
                        <p className="text-gray-600 text-sm">
                            Don't have an Account?{' '}
                            <a 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    onToggle();
                                }}
                                className="text-[#006AFF] ml-1 font-medium inline-block transition-transform duration-200 hover:scale-105"
                            >
                                Sign Up
                            </a>
                        </p>
                        <a href="#" className="text-[#006AFF] text-sm font-medium inline-block transition-transform duration-200 hover:scale-105">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
