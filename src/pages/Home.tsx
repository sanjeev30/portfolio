import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFileDownload, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/profile-gray-bg.png'
const getGreeting = (): string => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return 'Good morning';
    if (currentHour < 18) return 'Good afternoon';
    return 'Good evening';
};

const Home: React.FC = () => {
    const [text] = useTypewriter({
        words: ['a Creative Coder.', 'a Full Stack Developer.', 'a Cloud Enthusiast.', 'a DevOps Engineer.', 'an Innovator.'],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <>
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-center bg-gradient-to-br from-light-blue-400 via-violet-400 to-coral-400 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                {/* Background Artistic Shapes */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-300 to-yellow-300 rounded-full filter blur-2xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-blue-300 to-purple-400 rounded-full filter blur-2xl opacity-40 animate-blob animation-delay-3000"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-tr from-pink-300 to-red-400 rounded-full filter blur-2xl opacity-30 animate-blob animation-delay-5000"></div>

                {/* Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center lg:justify-center mt-2 lg:mt-0 mb-8 lg:mb-0"
                >
                    <img
                        src={profileImage}
                        alt="Hero"
                        className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white shadow-lg transition-transform hover:scale-105"
                    />
                </motion.div>

                {/* Text and Buttons */}
                <div className="order-2 lg:order-1 flex flex-col items-center lg:items-center justify-center w-full lg:w-1/2 px-4 lg:px-10 h-full text-center lg:text-center">
                    {/* Header Text */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl sm:text-7xl font-extrabold text-gray-800 dark:text-white"
                    >
                        {getGreeting()}, I'm Sanjeevkumar!
                    </motion.h1>

                    {/* Typing Text */}
                    <p className="mt-6 text-xl sm:text-3xl text-gray-700 dark:text-gray-300 font-light animate-fade-in">
                        I'm {text}
                        <Cursor cursorColor="#000" />
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 grid grid-cols-2 gap-6 w-full max-w-lg">
                        {/* Resume Button */}
                        <motion.a
                            whileHover={{ scale: 1.1, boxShadow: '0px 0px 3px rgba(255, 255, 255, 0.5)' }}
                            whileTap={{ scale: 0.9 }}
                            href="/Sanjeevkumar_Sharma_Resume.pdf"
                            download
                            className="flex items-center justify-center space-x-2 px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md font-semibold hover:bg-teal-600 transition-all duration-300 ease-in-out"
                        >
                            <FaFileDownload />
                            <span>Resume</span>
                        </motion.a>

                        {/* Contact Me Button */}
                        <motion.a
                            whileHover={{ scale: 1.1, boxShadow: '0px 0px 3px rgba(255, 255, 255, 0.5)' }}
                            whileTap={{ scale: 0.9 }}
                            href="mailto:sanjeevkumarsh30@gmail.com"
                            className="flex items-center justify-center space-x-2 px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md font-semibold hover:bg-teal-600 transition-all duration-300 ease-in-out"
                        >
                            <FaEnvelope />
                            <span>Contact Me!</span>
                        </motion.a>

                        {/* LinkedIn Button */}
                        <motion.a
                            whileHover={{ scale: 1.1, boxShadow: '0px 0px 3px rgba(255, 255, 255, 0.5)' }}
                            whileTap={{ scale: 0.9 }}
                            href="https://www.linkedin.com/in/sanjeev30"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out"
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </motion.a>

                        {/* GitHub Button */}
                        <motion.a
                            whileHover={{ scale: 1.1, boxShadow: '0px 0px 3px rgba(255, 255, 255, 0.5)' }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/sanjeev30"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md font-semibold hover:bg-gray-900 transition-all duration-300 ease-in-out"
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Contact Call-to-Action Section */}
            <section className="w-full px-8 py-16 bg-gradient-to-br from-light-blue-400 via-violet-400 to-coral-400 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-300">
                <h2 className="text-3xl font-bold mb-6 text-center">Let's Connect</h2>
                <p className="text-lg text-center mb-6">Have a project in mind? Let's build something great together.</p>
                <div className="flex justify-center">
                    <Link to="/contact" className="px-8 py-3 bg-teal-500 text-white rounded-lg shadow-md font-semibold hover:bg-teal-600 transition-all duration-300 ease-in-out">
                        Get in Touch
                    </Link>
                </div>
            </section>

        </>
    );
};

export default Home;
