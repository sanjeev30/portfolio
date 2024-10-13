// src/pages/Experience.tsx

import React from 'react';
import ExperienceItem from '../components/ExperienceItem';

const experiences = [
    {
        id: 1,
        role: 'Frontend Developer',
        company: 'TechCorp',
        duration: 'Jan 2020 - Present',
        logo: 'https://picsum.photos/seed/picsum1/100/100',
        description: 'Developed and maintained web applications using React and TypeScript.',
    },
    {
        id: 2,
        role: 'Software Engineer',
        company: 'InnovateX',
        duration: 'Jun 2018 - Dec 2019',
        logo: 'https://picsum.photos/seed/picsum2/100/100',
        description: 'Worked on backend systems using Node.js and Express.',
    },
    // Add more experiences as needed
];

const Experience: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12">
                Experience
            </h1>
            <div className="max-w-4xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={exp.id} experience={exp} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Experience;
