import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; // Importing LeetCode icon from Simple Icons
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-gradient-to-br from-light-blue-400 via-violet-400 to-coral-400 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-300 py-12 overflow-hidden">
            {/* Blurred Artistic Shapes */}
            <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-tr from-blue-300 to-yellow-300 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-pink-300 to-purple-400 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-3000"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-5000"></div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                // Stack links in column on small screens and row on large screens
                className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 z-10"
            >
                <motion.a
                    href="https://github.com/sanjeev30"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                >
                    <FaGithub size={36} />
                    <span className="text-base">GitHub</span>
                </motion.a>
                <motion.a
                    href="https://linkedin.com/in/sanjeev30"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                >
                    <FaLinkedin size={36} />
                    <span className="text-base">LinkedIn</span>
                </motion.a>
                <motion.a
                    href="https://leetcode.com/u/sanjeevsharma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode"
                    className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                >
                    <SiLeetcode size={36} />
                    <span className="text-base">LeetCode</span>
                </motion.a>
            </motion.div>

            {/* Footer Text Centered */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center text-sm text-gray-700 dark:text-gray-300 z-10"
            >
                <p>&copy; {new Date().getFullYear()} Sanjeevkumar Sharma. All Rights Reserved.</p>
            </motion.div>
        </footer>
    );
};

export default Footer;
