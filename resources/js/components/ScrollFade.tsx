import React, { useEffect, useRef, PropsWithChildren } from 'react';

export default function ScrollFade({ children }: PropsWithChildren<{}>) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-6');
                    }
                });
            },
            { threshold: 0.12 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="opacity-0 translate-y-6 transition-all duration-600 ease-out"
        >
            {children}
        </div>
    );
}