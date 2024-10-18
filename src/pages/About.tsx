import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile_wharf.jpg';

const About: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-light-blue-400 via-violet-400 to-coral-400 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Blurred Artistic Polygon Shapes */}
            <div className="absolute -top-16 -left-16 w-96 h-96 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-3000"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-tr from-yellow-300 to-red-400 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-5000"></div>

            {/* Profile Picture */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full lg:w-[20%] flex justify-center lg:justify-end mb-8 lg:mb-0 lg:pr-12 z-10"
            >
                <motion.img
                    src={profileImage}
                    alt="Profile"
                    className="w-48 h-48 object-cover rounded-full lg:rounded-lg border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                />
            </motion.div>

            {/* About Me Content (Occupies 80% width) */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col items-center lg:items-start justify-center lg:justify-center text-center lg:text-left w-full lg:w-[80%] px-4 lg:px-12 z-10 lg:max-w-3xl"
            >
                {/* New Title */}
                <div className="max-w-2xl mb-8 text-justify">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white text-center pb-8"
                    >
                        About Me
                    </motion.h1>

                    {/* About Me Story */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4"
                    >
                        Hi, I’m <strong>Sanjeevkumar</strong>, a passionate <strong>software engineer</strong> with over <strong>3+ years of experience</strong> building scalable and efficient web applications. I specialize in <strong>multi-tier web development</strong>, <strong>cloud technologies</strong>, and <strong>DevOps practices</strong>, ensuring seamless user experiences and robust back-end systems.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4"
                    >
                        My expertise spans across <strong>programming</strong>, <strong>software security</strong>, and <strong>cloud computing</strong>. I have a deep understanding of building applications that not only perform well but are secure, scalable, and future-ready.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4"
                    >
                        With a strong foundation in <strong>problem-solving</strong> and an ability to adapt to new project requirements, I thrive in fast-paced environments. I’m always open to learning and implementing the latest technologies to stay ahead in this ever-evolving field.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4"
                    >
                        Whether working independently or collaborating with cross-functional teams, I strive to deliver impactful solutions that drive innovation. I believe in continuous improvement and staying agile in an ever-changing tech landscape.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
