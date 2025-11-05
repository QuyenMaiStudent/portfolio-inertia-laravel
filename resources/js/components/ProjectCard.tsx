import React from 'react';

export default function ProjectCard({
    project,
}: {
    project: { title: string; desc: string; img?: string; url?: string };
}) {
    const placeholder =
        project.img ||
        'https://images.unsplash.com/photo-1526312426976-35f0e7a0a6d8?w=800&q=60&auto=format&fit=crop';
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm bg-white dark:bg-gray-800">
            <img src={placeholder} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 my-2">{project.desc}</p>
                <a
                    className="text-sm text-blue-600 dark:text-blue-400"
                    href={project.url || '#'}
                    onClick={(e) => {
                        if (!project.url) e.preventDefault();
                    }}
                >
                    View (mock)
                </a>
            </div>
        </div>
    );
}