import React from 'react';
import { FaJava, FaAws, FaDocker, FaGit, FaLinux, FaWindows, FaJsSquare, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiTypescript, SiPostgresql, SiMongodb, SiKubernetes, SiJenkins, SiAzuredevops, SiReact, SiAngular, SiRedux, SiMysql, SiRedis, SiApachekafka, SiJira, SiMicrosoftazure } from 'react-icons/si'; // Corrected Microsoft Azure icon
import { motion } from 'framer-motion';

const skillCategories = [
    {
        category: 'Programming Languages',
        skills: [
            { icon: <FaJava className="text-blue-700" />, name: 'Java' },
            { icon: <FaJsSquare className="text-yellow-400" />, name: 'JavaScript' },
            { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
            { icon: <FaPython className='text-blue-700' />, name: 'Python' }
        ],
    },
    {
        category: 'Frameworks & Libraries',
        skills: [
            { icon: <SiSpringboot className="text-green-500" />, name: 'Spring Boot' },
            { icon: <SiReact className="text-blue-600" />, name: 'React.js' },
            { icon: <SiRedux className="text-purple-600" />, name: 'Redux' },
            { icon: <SiAngular className="text-red-600" />, name: 'Angular' },
        ],
    },
    {
        category: 'Databases & Messaging',
        skills: [
            { icon: <SiMysql className="text-blue-500" />, name: 'MySQL' },
            { icon: <SiPostgresql className="text-blue-600" />, name: 'PostgreSQL' },
            { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB' },
            { icon: <SiApachekafka className="text-black" />, name: 'Apache Kafka' },
            { icon: <SiRedis className="text-red-500" />, name: 'Redis' },
        ],
    },
    {
        category: 'Cloud & DevOps',
        skills: [
            { icon: <SiMicrosoftazure className="text-blue-600" />, name: 'Microsoft Azure' },
            { icon: <FaAws className="text-orange-500" />, name: 'AWS' },
            { icon: <SiAzuredevops className="text-blue-600" />, name: 'Azure DevOps' },
            { icon: <FaDocker className="text-blue-500" />, name: 'Docker' },
            { icon: <SiKubernetes className="text-blue-600" />, name: 'Kubernetes' },
            { icon: <SiJenkins className="text-red-500" />, name: 'Jenkins' },
        ],
    },
    {
        category: 'Tools & Platforms',
        skills: [
            { icon: <FaGit className="text-red-600" />, name: 'Git' },
            { icon: <FaLinux className="text-blue-600" />, name: 'Linux' },
            { icon: <FaWindows className="text-blue-600" />, name: 'Windows' },
            { icon: <SiJira className="text-blue-500" />, name: 'Jira' },
        ],
    },
];

const SkillIcons: React.FC = () => {
    return (
        <div className="w-[80%] mx-auto mt-10">
            {skillCategories.map((category, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{category.category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        {category.skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                className="text-5xl flex flex-col items-center bg-gray-200 dark:bg-gray-700 p-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {skill.icon}
                                <p className="text-base text-gray-900 dark:text-white mt-2">{skill.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillIcons;
