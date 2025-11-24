import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system');

    useEffect(() => {
        const element = document.documentElement;
        const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

        function applyTheme() {
            console.log('Applying theme:', theme);
            console.log('System dark mode:', darkQuery.matches);
            if (theme === 'dark' || (theme === 'system' && darkQuery.matches)) {
                console.log('Adding dark class');
                element.classList.add('dark');
            } else {
                console.log('Removing dark class');
                element.classList.remove('dark');
            }
        }

        applyTheme();
        localStorage.setItem('theme', theme);

        const handleSystemChange = () => {
            if (theme === 'system') applyTheme();
        };

        darkQuery.addEventListener('change', handleSystemChange);
        return () => darkQuery.removeEventListener('change', handleSystemChange);
    }, [theme]);

    return (
        <div className="bg-white/10 dark:bg-black/50 backdrop-blur-md border border-orange-500/30 rounded-full p-1 flex gap-1 shadow-lg">
            <button
                onClick={() => { console.log('Clicked Light'); setTheme('light'); }}
                className={`p-2 rounded-full transition-all ${theme === 'light'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-orange-500'
                    }`}
                title="Light Mode"
            >
                <Sun className="w-4 h-4" />
            </button>
            <button
                onClick={() => { console.log('Clicked System'); setTheme('system'); }}
                className={`p-2 rounded-full transition-all ${theme === 'system'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-orange-500'
                    }`}
                title="System Default"
            >
                <Monitor className="w-4 h-4" />
            </button>
            <button
                onClick={() => { console.log('Clicked Dark'); setTheme('dark'); }}
                className={`p-2 rounded-full transition-all ${theme === 'dark'
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-orange-500'
                    }`}
                title="Dark Mode"
            >
                <Moon className="w-4 h-4" />
            </button>
        </div>
    );
}
