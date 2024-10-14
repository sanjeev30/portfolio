// src/pages/Projects.tsx

import React from 'react';
// import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion'; // For animations

// const projects = [
//     {
//         id: 1,
//         title: 'Project One',
//         description: 'A brief description of Project One.',
//         image: 'https://picsum.photos/seed/picsum1/400/300',
//         repoLink: 'https://github.com/yourusername/project-one',
//         liveDemo: 'https://project-one-demo.com',
//     },
//     {
//         id: 2,
//         title: 'Project Two',
//         description: 'A brief description of Project Two.',
//         image: 'https://picsum.photos/seed/picsum2/400/300',
//         repoLink: 'https://github.com/yourusername/project-two',
//         liveDemo: 'https://project-two-demo.com',
//     },
//     // Add more projects as needed
// ];

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

            {/* Projects Grid */}
            {/* <motion.div
                className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-10 px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </motion.div> */}
            {/* Construction Image Placeholder */}
            <div className="flex items-center justify-center">
                <img
                    src="wip.webp"
                    alt="Construction in Progress"
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default Projects;
