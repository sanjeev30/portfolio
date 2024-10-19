import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion'; // For animations

import deepCompression from '../assets/projects/deep-compression.webp';
import hearts from '../assets/projects/Hearts.webp';

const projects = [
    {
        id: 1,
        title: 'Deep Compression',
        description: 'As part of my master’s project at George Mason University, I developed a solution to compress Deep Neural Networks (DNN) for edge devices like mobile phones and IoT systems. Using techniques such as Knowledge Distillation, Pruning, and Quantization, I reduced the ResNet50 model size from 101 MB to 30 KB while maintaining 76% accuracy. I deployed the compressed model on an Android device with TensorFlow Lite, achieving 12-14x faster inference times. By leveraging TensorFlow’s optimization libraries, I ensured real-time processing capabilities in resource-constrained environments.',
        image: deepCompression,
        repoLink: 'https://github.com/sanjeev30/deep-compression',
        skills: ['Python', 'Tensorflow', 'Pruning', 'Quantization', 'Distillation', 'ResNet-50']
    },
    {
        id: 2,
        title: 'Hearts Game',
        description: 'The Hearts Card Game is a secure, multiplayer game built using Java (Spring Boot), Angular, and PostgreSQL. It emphasizes strong security practices, featuring JWT authentication, BCrypt password hashing, and TLS 1.3 for encrypted communication. Tools like SonarQube and OWASP ZAP were used to identify and mitigate vulnerabilities, ensuring robust protection against common security threats. The project showcases real-time gameplay with player statistics, secure login, and future plans for enhanced GUI and player rewards.',
        image: hearts,
        repoLink: 'https://github.com/yourusername/project-two',
        skills: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'JWT', 'BCrypt', 'TLS 1.3', 'Maven', 'Node.js', 'NPM', 'SonarQube', 'OWASP ZAP', 'JPA', 'SLF4J']
    },
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
