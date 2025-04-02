// src/components/JobPortalLandingPage.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useAnimation } from "framer-motion";
import { Users, Shield, Rocket, Search, TrendingUp, Quote } from "lucide-react";

// Assets
import zomatoLogo from "../assets/zomato.png";
import amazonLogo from "../assets/amazon1.png";
import googleLogo from "../assets/google1.png";
import microsoftLogo from "../assets/microsoft1.png";
import netflixLogo from "../assets/netflix1.png";
import image1 from "../assets/landing-sitting.png";
import image2 from "../assets/landing-holding.png";
import image3 from "../assets/landing-happy.png";
import anup from "../assets/anup.jpg";
import emma from "../assets/emma-image.jpg";
import jhon from "../assets/jhone-doe.jpg";
import abstractShape from "../assets/abstract-shape2.png";
import img1 from "../assets/hero-section-1.png";
import img2 from "../assets/hero-section-2.png";
import Navbar from "../components/Navbar";

// Constants
const images = [image1, image2, image3];
const TRANSITION_DURATION = 0.6;

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  textColor: string;
}

const LandingPage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Marquee effect
  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.innerHTML += marqueeRef.current.innerHTML;
    }
  }, []);

  // Customer reviews
  const customerReviews = [
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      review: "This product has transformed our workflow completely. The intuitive design and powerful features are exactly what our team needed.",
      rating: 5,
      profilePic: emma,
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      review: "Incredible solution that saved us months of development time. The customer support is top-notch and always responsive.",
      rating: 4,
      profilePic: anup,
    },
    {
      name: "Sarah Thompson",
      role: "Product Manager",
      review: "A game-changer for our product development process. The insights and analytics are incredibly detailed and actionable.",
      rating: 5,
      profilePic: jhon,
    },
  ];

  // Review carousel effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % customerReviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [customerReviews.length, isPaused]);

  const features: Feature[] = [
    {
      icon: <Rocket className="w-8 h-8 text-[#2563EB]" />,
      title: "Accelerated Matching",
      description: "AI-powered job recommendation engine that cuts through the noise to find your ideal role.",
      iconBgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      icon: <Search className="w-8 h-8 text-[#2563EB]" />,
      title: "Smart Filtering",
      description: "Advanced multi-dimensional job filtering that understands your unique career aspirations.",
      iconBgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#2563EB]" />,
      title: "Verified Opportunities",
      description: "Rigorous vetting process ensuring only genuine, high-quality job listings.",
      iconBgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      icon: <Users className="w-8 h-8 text-[#2563EB]" />,
      title: "Career Networking",
      description: "Personalized career path insights and strategic job matching beyond mere skill alignment.",
      iconBgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
  ];

  const employeerfeatures: Feature[] = [
    {
      icon: <Search className="w-8 h-8 text-[#2563EB]" />,
      title: "Talent Discovery",
      description: "Advanced candidate search with intelligent filtering and comprehensive profile insights.",
      iconBgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      icon: <Users className="w-8 h-8 text-[#2563EB]" />,
      title: "Candidate Matching",
      description: "AI-powered matching algorithm that connects you with the most suitable candidates.",
      iconBgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#2563EB]" />,
      title: "Verified Candidates",
      description: "Comprehensive background checks and skill verification for high-quality talent.",
      iconBgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#2563EB]" />,
      title: "Hiring Analytics",
      description: "Detailed insights and analytics to optimize your recruitment strategy and performance.",
      iconBgColor: "bg-blue-50",
      textColor: "text-blue-900",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const slideInFromLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInFromRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const bounce = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const rotateIn = {
    hidden: { rotate: -5, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const flipIn = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Scroll animation triggers
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      controls.start("visible");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden" ref={containerRef}>
      {/* Custom Scrollbar */}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb {
            background: #2563EB;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #1d4ed8;
          }
        `}
      </style>

      {/* Navbar */}
      <Navbar userType = "home" />
      {/* <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold text-[#2563EB] tracking-wide">
              JobPortal
            </h1>
          </motion.div>

          <ul className="hidden md:flex space-x-6 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {["Find Jobs", "Post Jobs", "About"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-[#4B5563] hover:text-blue-600 transition-colors duration-300 font-medium text-sm lg:text-base"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-[#2563EB] text-[#2563EB] font-medium text-sm py-2 px-4 lg:px-6 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#2563EB] text-white font-medium text-sm py-2 px-4 lg:px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-sm"
            >
              Register
            </motion.button>
          </motion.div>
        </div>
      </motion.nav> */}

      {/* Hero Section */}
      <header className="relative w-full min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 to-white overflow-hidden">
        {/* Floating bubbles background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden -z-20"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-1/4 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-sky-100 blur-xl opacity-40"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 15, 0],
              x: [0, -15, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/3 right-1/3 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-sky-200 blur-xl opacity-30"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 right-1/4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sky-100 blur-xl opacity-50"
          ></motion.div>
        </motion.div>

        {/* Content Container */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Left side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full lg:w-1/2 space-y-4 sm:space-y-6 px-4 sm:px-0 relative z-10"
          >
            <motion.div
              variants={bounce}
              className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-blue-100 text-[#2563EB] font-medium text-sm sm:text-base shadow-sm"
            >
              🚀 Trusted by 100+ Companies
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight sm:leading-tight md:leading-tight"
            >
              <span className="relative inline-block">
                <span className="relative z-10">Find the Perfect </span>
                <span className="absolute -bottom-1 left-0 w-full h-2 sm:h-3 bg-blue-200/60 z-0"></span>
              </span>
              <br />
              <span className="text-[#2563EB]">Job or Candidate</span> with Ease
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed"
            >
              Seamlessly connect with top companies and skilled professionals on our
              <span className="text-[#2563EB]"> Hiring Platform </span>
              designed for modern recruitment.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-gradient-to-r from-[#2563EB] to-sky-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="relative z-10 text-sm sm:text-base">Find Jobs</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-[#2563EB] bg-white/80 text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Post a Job</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4"
            >
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.img
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    src={`https://randomuser.me/api/portraits/${
                      i % 2 === 0 ? "men" : "women"
                    }/${i + 20}.jpg`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                    alt="User"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                <span className="font-medium text-[#2563EB]">500+</span> professionals hired this week
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex items-center justify-center relative z-10 mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-md xl:max-w-lg aspect-square">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Job Search Illustration"
                  className="w-full h-full object-contain"
                  loading="eager"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: TRANSITION_DURATION }}
                />
              </AnimatePresence>
              
              {/* Abstract Shape */}
              <motion.div
                initial={{ opacity: 0, rotate: -15 }}
                animate={{ opacity: 0.3, rotate: -15 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="absolute -bottom-12 -left-8 sm:-bottom-16 sm:-left-12 w-[140%] h-auto -z-10"
              >
                <img
                  src={abstractShape}
                  alt="Decorative Abstract Shape"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Trusted Companies */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-b from-white to-sky-50/50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Trusted by <span className="text-[#2563EB]">Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of companies who've transformed their hiring with
              our platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden py-8 h-32"
          >
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="h-full">
              <div
                ref={marqueeRef}
                className="flex items-center h-full space-x-24 whitespace-nowrap animate-marquee"
              >
                {[amazonLogo, netflixLogo, googleLogo, microsoftLogo, zomatoLogo].map((logo, index) => (
                  <motion.div
                    key={`first-${index}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center h-full px-4"
                  >
                    <img
                      src={logo}
                      alt="Company logo"
                      className="h-16 w-auto max-w-[180px] object-contain transition-transform duration-300"
                    />
                  </motion.div>
                ))}

                {[amazonLogo, netflixLogo, googleLogo, microsoftLogo, zomatoLogo].map((logo, index) => (
                  <motion.div
                    key={`second-${index}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center h-full px-4"
                  >
                    <img
                      src={logo}
                      alt="Company logo"
                      className="h-16 w-auto max-w-[180px] object-contain transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-white"
      >
        {/* Job Seeker Features */}
        <div className="container mx-auto px-4 mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left Side - Image */}
            <motion.div
              variants={flipIn}
              className="relative h-full min-h-[300px] rounded-xl overflow-hidden flex items-center justify-center"
            >
              <img
                src={img1}
                alt="Job Seeker Features"
                className="w-[400px] h-[400px] object-cover scale-x-[-1]"
              />
            </motion.div>

            {/* Right Side - Feature List */}
            <motion.div
              variants={containerVariants}
              className="space-y-2"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-bold text-gray-800 mb-6"
              >
                Powerful Tools for{" "}
                <span className="text-[#2563EB]">Your Career</span>
              </motion.h3>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={rotateIn}
                    whileHover={{ y: -3 }}
                    className="group"
                  >
                    <div
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 border-l-4 border-blue-400"
                    >
                      <div className={`p-2 rounded-lg ${feature.iconBgColor}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-[#2563EB]">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Employer Features - Reversed */}
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Right Side - Image */}
            <motion.div
              variants={flipIn}
              className="md:order-2 relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-md flex items-center justify-center"
            >
              <img
                src={img2}
                alt="Employer Features"
                className="w-[400px] h-[400px] object-cover"
              />
            </motion.div>

            {/* Left Side - Feature List */}
            <motion.div
              variants={containerVariants}
              className="md:order-1 space-y-2"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl font-bold text-gray-800 mb-6"
              >
                Smarter <span className="text-[#2563EB]">Hiring Solutions</span>
              </motion.h3>

              <div className="space-y-3">
                {employeerfeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={rotateIn}
                    whileHover={{ y: -3 }}
                    className="group"
                  >
                    <div
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 border-l-4 border-blue-400"
                    >
                      <div className={`p-2 rounded-lg ${feature.iconBgColor}`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Customer Reviews */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-4 md:px-16 overflow-hidden bg-gradient-to-br from-sky-50/50 to-white"
      >
        {/* Decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-sky-100 blur-[100px] opacity-30"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-sky-200 blur-[100px] opacity-20"
        />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Left Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
            className="w-full md:w-1/2 space-y-8"
          >
            <motion.div
              variants={bounce}
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-gray-200"
            >
              <Quote className="w-5 h-5 text-[#2563EB]" />
              <span className="text-sm font-medium text-[#2563EB]">
                TRUSTED REVIEWS
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Voices of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Success
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-md"
            >
              Hear how we've helped professionals and companies achieve their
              goals.
            </motion.p>

            {/* Navigation Dots */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 mt-8"
            >
              <div className="flex space-x-2">
                {customerReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`relative w-12 h-1.5 rounded-full transition-all duration-500 ${
                      currentReview === index ? "bg-blue-700" : "bg-gray-200"
                    }`}
                  >
                    {currentReview === index && (
                      <span className="absolute -top-1 -left-1 w-14 h-3.5 rounded-full bg-blue-100/50" />
                    )}
                  </button>
                ))}
              </div>
              <span className="text-sm text-gray-500 font-medium">
                {currentReview + 1}/{customerReviews.length}
              </span>
            </motion.div>
          </motion.div>

          {/* Right Section - Review Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative group transition-all duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl"
                >
                  {/* Profile */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img
                        src={customerReviews[currentReview].profilePic}
                        alt={customerReviews[currentReview].name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {customerReviews[currentReview].name}
                      </h3>
                      <p className="text-sm text-[#2563EB]">
                        {customerReviews[currentReview].role}
                      </p>
                    </div>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-sky-400 to-sky-600 before:rounded-full">
                    "{customerReviews[currentReview].review}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < customerReviews[currentReview].rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 rounded-full bg-blue-100/50 blur-xl" />
              <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 rounded-full bg-blue-200/30 blur-xl" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Email Signup */}
      <motion.section
        style={{ y: yPos }}
        className="relative py-16 px-6 md:px-12 bg-gradient-to-br from-sky-50 to-white overflow-hidden rounded-2xl shadow-lg border border-sky-100 mx-4 md:mx-8"
      >
        {/* Decorative elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-48 h-48 bg-sky-100/30 rounded-full -mr-12 -mt-12"
        ></motion.div>
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-32 h-32 bg-sky-200/20 rounded-full -ml-8 -mb-8"
        ></motion.div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-sky-800"
          >
            Transform Your Career Journey
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#2563EB] mb-8 max-w-2xl mx-auto"
          >
            Bridging exceptional talent with life-changing opportunities
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center gap-4 mb-10"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-white text-[#2563EB] font-medium rounded-lg shadow-sm border border-sky-200 hover:bg-sky-50 transition-colors"
            >
              Discover Your Dream Role
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-[#2563EB] text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
            >
              Hire Exceptional Talent
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="bg-gray-800 text-white py-12 px-4 md:px-16"
      >
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">JobPortal.io</h3>
            <p className="text-gray-400">
              Your gateway to professional opportunities
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2">
                {["Find Jobs", "Career Advice", "Resume Builder"].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="#" className="hover:text-blue-400">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2">
                {["Post a Job", "Candidate Search", "Recruiting Solutions"].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="#" className="hover:text-blue-400">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Contact", "Privacy Policy"].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="#" className="hover:text-blue-400">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400"
        >
          © 2025 JobPortal.io. All rights reserved.
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default LandingPage;