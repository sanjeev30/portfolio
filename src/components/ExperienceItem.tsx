import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItemProps {
    experience: {
        id: number;
        role: string;
        company: string;
        duration: string;
        description: string;
        image: string; // New field for the image
    };
    index: number;
    largeScreen: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index, largeScreen }) => {
    const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: index * 0.2 } };

    return largeScreen ? (
        <motion.div
            className={`flex justify-between items-center w-full mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} px-8`}
            initial="initial" animate="animate" variants={fadeUp}
            whileHover={{ scale: 1.05 }} // Framer Motion hover effect for large screens
            transition={{ duration: 0.3 }}
        >
            {/* Card content with dark mode */}
            <motion.div
                className="w-5/12 relative"
                initial="initial" animate="animate" variants={fadeUp}
            >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative">
                    {/* Triangular indicator pointing correctly on the edges */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 ${index % 2 === 0 ? 'right-full' : 'left-full'} border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${index % 2 === 0 ? 'border-r-[10px] border-r-gray-700' : 'border-l-[10px] border-l-gray-700'}`}></div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{experience.role}</h2>
                    <h3 className="text-md font-semibold text-gray-600 dark:text-gray-400">{experience.company}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{experience.duration}</p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{experience.description}</p>
                </div>
            </motion.div>

            {/* Image in the middle with circular border for large screen */}
            <motion.div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-gray-400 dark:border-gray-500 z-10 absolute left-1/2 transform -translate-x-1/2">
                <img src={experience.image} alt="Company logo or random" className="rounded-full w-full h-full object-cover" />
            </motion.div>
        </motion.div>
    ) : (
        <motion.div
            className="mb-8 flex items-center px-4"
            initial="initial" animate="animate" variants={fadeUp}
            whileHover={{ scale: 1.05 }} // Framer Motion hover effect for small screens
            transition={{ duration: 0.3 }}
        >
            {/* Reduced Image size on small screens with gray border */}
            <div className="flex items-center justify-center w-12 h-12 aspect-square rounded-full border-4 border-gray-400 dark:border-gray-500 z-10 relative -ml-3.5">
                <img src={experience.image} alt="Company logo or random" className="rounded-full w-full h-full object-cover" />
            </div>

            {/* Right content with dark mode */}
            <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full relative ml-6"
                initial="initial" animate="animate" variants={fadeUp}
            >
                {/* Adjusted Triangular icon to point towards the circular icon from the left edge */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-2.5 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-gray-700"></div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{experience.role}</h2>
                <h3 className="text-md font-semibold text-gray-600 dark:text-gray-400">{experience.company}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{experience.duration}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{experience.description}</p>
            </motion.div>
        </motion.div>
    );
};

export default ExperienceItem;
