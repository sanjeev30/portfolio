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
            className="bg-gray-100 rounded-lg overflow-hidden shadow-lg flex flex-col"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            {/* Project Image */}
            <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
                loading="lazy"
            />

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 flex-grow">{project.description}</p>

                {/* Action Buttons */}
                <div className="mt-4 flex space-x-4">
                    <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                        aria-label="GitHub Repository"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-700 transition-colors duration-300"
                        aria-label="Live Demo"
                    >
                        <FaExternalLinkAlt size={24} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
