import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMedium,
  FaAward,
  FaCode,
  FaLaptopCode,
  FaInstagram
} from 'react-icons/fa';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const stats = [
    { icon: FaCode, label: 'Projects Completed', value: '30+' },
    { icon: FaAward, label: 'Awards Won', value: '8+' },
    { icon: FaLaptopCode, label: 'Technologies', value: '25+' }
  ];

  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href =
      'https://drive.google.com/drive/folders/1-YkQniMStHkihsoTPnb3WStBFscTNgGm';
    link.download = 'Thaheshan_Suresh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse delay-1000"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section */}
          <motion.div className="order-2 md:order-1 text-left" variants={containerVariants}>
            <motion.div
              className="inline-block mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10"
              variants={itemVariants}
            >
              <span className="text-sm">👋 Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
              variants={itemVariants}
            >
              Thaheshan Suresh
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-400 mb-6"
              variants={itemVariants}
            >
              Computer Science Undergraduate | Machine Learning Enthusiast | Full-Stack Developer
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              variants={itemVariants}
            >
              Transforming complex problems into elegant solutions through code.
              Specializing in AI/ML, full-stack development, and creating seamless user experiences.
            </motion.p>

            {/* Stats */}
            <motion.div className="grid grid-cols-3 gap-4 mb-8" variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="text-2xl mb-2 mx-auto" />
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex gap-4 mb-8 flex-wrap" variants={itemVariants}>
              {[
                { icon: FaGithub, link: 'https://github.com/thaheshan', label: 'GitHub', color: 'hover:text-purple-400' },
                { icon: FaLinkedin, link: 'https://www.linkedin.com/in/thaheshan-suresh0911/', label: 'LinkedIn', color: 'hover:text-blue-400' },
                { icon: FaInstagram, link: 'https://instagram.com/thaheshan', label: 'Instagram', color: 'hover:text-pink-400' },
                { icon: FaMedium, link: 'https://medium.com/@mthalapathy549', label: 'Medium', color: 'hover:text-green-400' },
                { icon: FaEnvelope, link: 'mailto:thaheshan09@gmail.com', label: 'Email', color: 'hover:text-red-400' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 text-2xl ${social.color} bg-white/5 rounded-full border border-white/10 transition-all`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <button
                onClick={handleCVDownload}
                className="group px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative">My CV</span>
              </button>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-white/20 text-white rounded-full font-medium hover:bg-white hover:text-black transition-all group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></span>
                <span className="relative z-10">Contact Me</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section - Profile Image */}
          <motion.div className="order-1 md:order-2 relative" variants={itemVariants}>
            <motion.div
              className="relative w-full aspect-square max-w-md mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse delay-150"></div>

              <img
                src="/images/thaheshan.jpeg"
                alt="Thaheshan Suresh"
                className="relative rounded-full w-full h-full object-cover border-4 border-white/10 shadow-2xl"
              />

              <motion.div
                className="absolute -inset-4 border-2 border-purple-500/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-8 border-2 border-blue-500/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            {/* Floating Tags */}
            <motion.div className="absolute -right-4 top-1/4 transform rotate-12" whileHover={{ scale: 1.1 }}>
              <div className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
                Machine Learning
              </div>
            </motion.div>
            <motion.div className="absolute -left-4 top-2/3 transform -rotate-12" whileHover={{ scale: 1.1 }}>
              <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
                Full Stack Dev
              </div>
            </motion.div>
            <motion.div className="absolute -left-1 top-2 transform -rotate-16" whileHover={{ scale: 1.1 }}>
              <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
                UI/UX Designer
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Optional Scroll Indicator Placeholder */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* You can add a down arrow icon here if desired */}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
