// src/components/DarkModeToggle.tsx

import React, { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleDarkMode } from '../store/themeSlice';

const DarkModeToggle: React.FC = () => {
    const dispatch = useAppDispatch();
    const darkMode = useAppSelector((state) => state.theme.darkMode);

    // Set dark mode based on localStorage or system preference on initial load
    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedDarkMode) {
            // Apply user's previously selected mode from localStorage
            if (storedDarkMode === 'dark') {
                dispatch(toggleDarkMode());
            }
        } else if (systemPrefersDark) {
            // If no stored preference, apply system preference
            dispatch(toggleDarkMode());
        }
    }, [dispatch]);

    // Toggle dark mode and save to localStorage
    const handleToggle = () => {
        dispatch(toggleDarkMode());
        localStorage.setItem('darkMode', darkMode ? 'light' : 'dark');
    };

    return (
        <button
            onClick={handleToggle}
            className="fixed bottom-4 right-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 p-3 rounded-full shadow-lg focus:outline-none"
            aria-label="Toggle dark mode"
        >
            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
    );
};

export default DarkModeToggle;
