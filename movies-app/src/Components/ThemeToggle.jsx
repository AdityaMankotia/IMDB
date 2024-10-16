import React, { useState, useEffect } from 'react';
import './ThemeToggle.css'; // Import the CSS for styling

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (
        <label className="theme-toggle">
            <input
                type="checkbox"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(prev => !prev)}
            />
            <span className="slider"></span>
        </label>
    );
};

export default ThemeToggle;
