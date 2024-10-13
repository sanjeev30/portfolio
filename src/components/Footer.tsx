// src/components/Footer.tsx

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="flex justify-center space-x-6">
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-gray-400 transition-colors duration-300"
                >
                    <FaGithub size={30} />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:text-gray-400 transition-colors duration-300"
                >
                    <FaLinkedin size={30} />
                </a>
                <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover:text-gray-400 transition-colors duration-300"
                >
                    <FaTwitter size={30} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
