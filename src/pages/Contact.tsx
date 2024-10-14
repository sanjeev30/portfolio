// src/pages/Contact.tsx

import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Generate mailto link
        const mailtoLink = `mailto:sanjeevkumarsh30@gmail.com?subject=Message from ${formData.name} (${formData.email})&body=${encodeURIComponent(
            formData.message
        )}`;

        // Open default mail client
        window.location.href = mailtoLink;

        // Reset form fields after sending the message
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-light-blue-400 via-violet-400 to-coral-400 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Blurred Background Shapes */}
            <div className="absolute -top-16 -left-16 w-96 h-96 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-3000"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-tr from-yellow-300 to-red-400 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-5000"></div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white z-10"
            >
                Contact Me
            </motion.h1>

            {/* Contact Form */}
            <motion.form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-8 pt-6 pb-8 w-full max-w-lg z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {/* Name Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700"
                    />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700"
                    />
                </div>

                {/* Message Input */}
                <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-50 dark:bg-gray-700 h-32"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-center">
                    <motion.button
                        type="submit"
                        className="bg-blue-500 dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaPaperPlane className="mr-2" />
                        Send Message
                    </motion.button>
                </div>
            </motion.form>
        </div>
    );
};

export default Contact;
