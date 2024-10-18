import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion'; // For animations

import deepCompression from '../assets/projects/deep-compression.webp';

const projects = [
    {
        id: 1,
        title: 'Deep Compression',
        description: 'Demonstrated Neural Network Model Compression',
        image: deepCompression,
        repoLink: 'https://github.com/sanjeev30/deep-compression',
        skills: ['Python', 'Tensorflow', 'ResNet-50']
    },
    // {
    //     id: 2,
    //     title: 'Project Two',
    //     description: 'A brief description of Project Two.',
    //     image: 'https://picsum.photos/seed/picsum2/400/300',
    //     repoLink: 'https://github.com/yourusername/project-two',
    //     skills: ['Python', 'Flask', 'PostgreSQL'], // Example skills
    // },
    // Add more projects as needed
];

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-light-blue-400 via-violet-400 to-coral-400 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden py-12">
            {/* Blurred Background Effect */}
            <div className="absolute -top-16 -left-16 w-96 h-96 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-3000"></div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white z-10"
            >
                My Projects
            </motion.h1>

            {/* Projects List */}
            <motion.div
                className="w-full flex flex-col space-y-8 z-10 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
