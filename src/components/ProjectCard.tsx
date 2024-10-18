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
        liveDemo?: string; // Optional live link
        skills: string[];  // List of skills for the project
    };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col lg:flex-row transition-transform transform hover:scale-105 hover:shadow-xl w-4/5 mx-auto" // Subtle hover effect with shadow
            whileHover={{ scale: 1.02 }} // Small scale for a lift effect
            whileTap={{ scale: 0.98 }} // Slight tap effect
        >
            {/* Project Image (Left side on large screens) */}
            <motion.img
                src={project.image}
                alt={project.title}
                className="w-full lg:w-1/3 h-64 object-cover transition-opacity duration-300"
                loading="lazy"
                whileHover={{ opacity: 0.95 }} // Subtle opacity change on hover
            />

            {/* Project Details (Right side on large screens) */}
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 flex-grow mb-4">
                    {project.description}
                </p>

                {/* Skills Tags with Hover Effect */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, idx) => (
                        <motion.span
                            key={idx}
                            className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs transition-transform duration-300"
                            whileHover={{ scale: 1.1 }} // Increase size slightly on hover
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex space-x-4">
                    <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                        aria-label="GitHub Repository"
                    >
                        <FaGithub size={24} />
                    </a>
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-700 transition-colors duration-300"
                            aria-label="Live Demo"
                        >
                            <FaExternalLinkAlt size={24} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
