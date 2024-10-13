// src/components/ExperienceItem.tsx

import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceProps {
    experience: {
        id: number;
        role: string;
        company: string;
        duration: string;
        logo: string;
        description: string;
    };
    index: number;
}

const ExperienceItem: React.FC<ExperienceProps> = ({ experience, index }) => {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-md p-6 flex items-center"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            {/* Company Logo */}
            <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-20 h-20 object-cover rounded-full mr-6"
            />
            {/* Experience Details */}
            <div>
                <h2 className="text-xl font-bold">{experience.role}</h2>
                <h3 className="text-lg text-gray-600">{experience.company}</h3>
                <p className="text-sm text-gray-500">{experience.duration}</p>
                <p className="mt-2 text-gray-700">{experience.description}</p>
            </div>
        </motion.div>
    );
};

export default ExperienceItem;
