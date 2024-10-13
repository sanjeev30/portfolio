// src/components/SkillIcons.tsx

import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
    { icon: <FaReact />, name: 'React' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <SiTailwindcss />, name: 'TailwindCSS' },
];

const SkillIcons: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    className="text-5xl text-white flex flex-col items-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    {skill.icon}
                    <p className="text-base text-white/60 mt-2">{skill.name}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default SkillIcons;
