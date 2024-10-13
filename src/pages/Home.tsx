import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const getGreeting = (): string => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) return 'Good morning';
    if (currentHour < 18) return 'Good afternoon';
    return 'Good evening';
};

const Home: React.FC = () => {
    const [text] = useTypewriter({
        words: ['a Software Engineer.', 'a Java Developer.', 'a Web Designer.', 'a Cloud Engineer.', 'a DevOps Enginner.'],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute -top-16 -left-16 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            {/* Content */}
            <div className="z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl sm:text-6xl font-bold text-white"
                >
                    {getGreeting()}, I'm Sanjeevkumar!
                </motion.h1>
                <p className="mt-4 text-lg sm:text-2xl text-white animate-fade-in">
                    I'm {text}
                    <Cursor cursorColor="#fff" />
                </p>
            </div>

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-8 z-10"
            >
                <img
                    src="./profile-gray-bg.png"
                    alt="Hero"
                    className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
                />
            </motion.div>
        </div>
    );
};

export default Home;
