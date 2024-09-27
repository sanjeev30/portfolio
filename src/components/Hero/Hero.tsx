import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [showCursor, setShowCursor] = useState(false);
    const fullText = "Hi, I'm Sanjeevkumar!";

    useEffect(() => {
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, 500);

            return () => clearInterval(interval);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-primaryDark opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Full Stack Wizard: Turning Coffee into Code, One Bug at a Time!
                        </div>
                    </div>
                    <div className="text-center">
                        <motion.h1
                            className="text-4xl font-semibold tracking-tight text-dark sm:text-6xl"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {fullText.split('').map((char, index) => (
                                <motion.span key={index} variants={letterVariants}>
                                    {char}
                                </motion.span>
                            ))}
                            <motion.span
                                className="blink-cursor text-4xl font-semibold tracking-tight text-dark/80 sm:text-6xl"
                                style={{ display: 'inline' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: showCursor ? 1 : 0 }}
                            >
                                _
                            </motion.span>
                        </motion.h1>
                        <p className="mt-6 text-lg leading-8 text-dark/70">
                            Full Stack Developer with expertise in crafting scalable, high-performance applications. From building seamless backends in Java and Spring Boot to creating dynamic frontends with Angular & React.JS, I thrive on solving complex problems and delivering innovative solutions. Let's turn ideas into reality!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="mailto:sanjeevkumarsh30@gmail.com"
                                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-dark shadow-sm hover:bg-primaryDark hover:text-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Contact Me!
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
