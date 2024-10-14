import React from 'react';
import ExperienceItem from '../components/ExperienceItem';
import { motion } from 'framer-motion'; // Added for animations
import ourCode from '../assets/ourcode.png';
import gmu from '../assets/gmu.png';
import tcs from '../assets/tcs.png';
import best from '../assets/best.png';
import mu from '../assets/mumbai-university.png';

const experiences = [
    {
        id: 1,
        role: 'Software Engineer',
        company: 'OurCode.io',
        duration: 'Aug 2024 – Present',
        description: 'Contributed to the development of ActiveDocumentation, improving Java codebase design enforcement.',
        image: ourCode,
    },
    {
        id: 2,
        role: 'MS in Computer Science',
        company: 'George Mason University',
        duration: 'Aug 2022 – May 2024',
        description: 'Relevant Coursework: Component Based Software Development, Secure Software Programming, Decision Guidance.',
        image: gmu,
    },
    {
        id: 3,
        role: 'Software Developer',
        company: 'Tata Consultancy Services (TCS)',
        duration: 'Jun 2019 – Jul 2022',
        description: 'Developed APIs, automated security assessments, and improved observability using Open Telemetry.',
        image: tcs,
    },
    {
        id: 4,
        role: 'Software Development Intern',
        company: 'B.E.S.T',
        duration: 'Jun 2018 – Jul 2018',
        description: 'Built an Android app to track maintenance activities, increasing crew efficiency.',
        image: best,
    },
    {
        id: 5,
        role: 'BE in Computer Engineering',
        company: 'University of Mumbai',
        duration: 'Aug 2015 – May 2019',
        description: 'Relevant Coursework: Data Structures, Web Technologies, Operating Systems, Computer Networks.',
        image: mu,
    },
];

const Experience: React.FC = () => {
    return (
        <>
            {/* Experience Section */}
            <div className="min-h-screen bg-gradient-to-br from-light-blue-400 via-violet-400 to-coral-400 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden px-4 lg:px-20">
                {/* Artistic Background Elements */}
                <div className="absolute -top-16 -left-16 w-96 h-96 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-3000"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-tr from-yellow-300 to-red-400 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-5000"></div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 pt-12"
                >
                    My Experience
                </motion.h1>

                {/* Large Screen Timeline */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Timeline vertical line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

                        {experiences.map((exp, index) => (
                            <ExperienceItem
                                key={exp.id}
                                experience={exp}
                                index={index}
                                largeScreen
                            />
                        ))}
                    </div>
                </div>

                {/* Small Screen Timeline */}
                <div className="block lg:hidden">
                    <div className="relative">
                        {/* Timeline vertical line for mobile */}
                        <div className="absolute left-6 top-0 bottom-0 h-full w-1 bg-gray-300"></div>

                        {experiences.map((exp, index) => (
                            <ExperienceItem
                                key={exp.id}
                                experience={exp}
                                index={index}
                                largeScreen={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;
