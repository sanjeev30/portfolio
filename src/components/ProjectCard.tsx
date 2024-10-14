// src/components/ProjectCard.tsx

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectProps {
    project: {
        id: number;
        title: string;
        description: string;
        image: string;
        repoLink: string;
        liveDemo: string;
    };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            {/* Project Image */}
            <motion.img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'spring' }}
            />

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-grow">
                <motion.h2
                    className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                >
                    {project.title}
                </motion.h2>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">{project.description}</p>

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-4">
                    <motion.a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                        aria-label="GitHub Repository"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FaGithub size={24} />
                    </motion.a>
                    <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-700 transition-colors duration-300"
                        aria-label="Live Demo"
                        whileHover={{ scale: 1.2 }}
                    >
                        <FaExternalLinkAlt size={24} />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
