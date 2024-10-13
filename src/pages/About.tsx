// src/pages/About.tsx

import React from 'react';
import SkillIcons from '../components/SkillIcons';

const About: React.FC = () => {
    return (
        // <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden'>
            {/* Background Shapes */}
            <div className="absolute -top-16 -left-16 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            {/* Profile Picture */}
            <img
                src="https://picsum.photos/200/200"
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover mb-8 shadow-lg"
            />

            {/* Humorous Story */}
            <div className="max-w-2xl text-center text-white">
                <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                    A Developer's Tale
                </h1>
                <p className="text-lg sm:text-xl text-white/60">
                    Once upon a coffee-fueled night, I accidentally deployed a "Hello World" app to Mars.
                    Now, Martians think I'm their leader! When I'm not leading interplanetary tech revolutions,
                    I build amazing web applications right here on Earth.
                </p>
            </div>

            {/* Animated Skill Icons */}
            <div className="mt-12">
                <SkillIcons />
            </div>
        </div>
    );
};

export default About;
