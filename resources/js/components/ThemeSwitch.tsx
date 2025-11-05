import React, { useEffect, useLayoutEffect, useState } from 'react';

const THEME_KEY = 'app_theme';

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        try {
            const v = localStorage.getItem(THEME_KEY);
            if (v === 'light' || v === 'dark') return v;
            // fallback to OS preference
            if (typeof window !== 'undefined' && window.matchMedia) {
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            return 'light';
        } catch {
            return 'light';
        }
    });

    // apply synchronously to avoid flash
    useLayoutEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch {
            // ignore
        }
    }, [theme]);

    // keep localStorage in sync if other tab changed theme
    useEffect(() => {
        const onStorage = (e: StorageEvent) => {
            if (e.key === THEME_KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
                setTheme(e.newValue as 'light' | 'dark');
            }
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    return (
        <button
            onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
            className="px-3 py-1 rounded-md border dark:border-gray-700"
            aria-label="Toggle Theme"
            title="Toggle theme"
        >
            {theme === 'light' ? '🌤 Light' : '🌙 Dark'}
        </button>
    );
}