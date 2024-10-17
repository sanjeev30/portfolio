import React from 'react';
import { motion } from 'framer-motion';
import SkillIcons from '../components/SkillIcons';

const Skills: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-light-blue-400 via-violet-400 to-coral-400 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Blurred Artistic Polygon Shapes */}
            <div className="absolute -top-16 -left-16 w-96 h-96 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-3000"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-tr from-yellow-300 to-red-400 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-5000"></div>

            {/* Skill Icons Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full px-8 py-16"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                    My Skills
                </h2>
                <div className="flex justify-center">
                    <SkillIcons />
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;
