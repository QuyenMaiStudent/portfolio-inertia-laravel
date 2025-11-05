import React, { useEffect, useLayoutEffect, useState } from 'react';

const THEME_KEY = 'app_theme';

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        try {
            const v = localStorage.getItem(THEME_KEY);
            if (v === 'light' || v === 'dark') return v;
            // dùng mặc định theo cài đặt OS nếu chưa có trong localStorage
            if (typeof window !== 'undefined' && window.matchMedia) {
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            return 'light';
        } catch {
            return 'light';
        }
    });

    // áp dụng đồng bộ để tránh hiện tượng flash
    useLayoutEffect(() => {
        const root = document.body;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch {
            // bỏ qua
        }
    }, [theme]);

    // giữ localStorage đồng bộ nếu tab khác thay đổi theme
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