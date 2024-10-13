// src/pages/Projects.tsx

import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'A brief description of Project One.',
        image: 'https://picsum.photos/seed/picsum1/400/300',
        repoLink: 'https://github.com/yourusername/project-one',
        liveDemo: 'https://project-one-demo.com',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        image: 'https://picsum.photos/seed/picsum2/400/300',
        repoLink: 'https://github.com/yourusername/project-two',
        liveDemo: 'https://project-two-demo.com',
    },
    // Add more projects as needed
];

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12">
                Projects
            </h1>
            <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
