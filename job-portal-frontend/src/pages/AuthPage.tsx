import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Registration from '../components/Auth/Registration';

const AuthPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    const toggleAuth = () => {
        setShowLogin(!showLogin);
    };

    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
            {/* Back Button */}
            <div className="absolute top-8 left-8 z-10">
                <Link to="/" className="flex items-center text-[#2563EB] hover:text-[#2563EB]">
                    <ArrowLeft size={20} className="mr-2" />
                    <span>Home</span>
                </Link>
            </div>
            
            <div className="w-[100vw] h-[100vh] flex overflow-hidden relative">
                {/* Container for both auth components */}
                <div className="w-full h-full flex">
                    {/* Login section */}
                    <div className={`w-full h-full transition-transform duration-500 ease-in-out ${showLogin ? 'translate-x-0' : '-translate-x-full'} absolute`}>
                        <Login onToggle={toggleAuth} />
                    </div>
                    
                    {/* Registration section */}
                    <div className={`w-full h-full transition-transform duration-500 ease-in-out ${showLogin ? 'translate-x-full' : 'translate-x-0'} absolute`}>
                        <Registration onToggle={toggleAuth} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
