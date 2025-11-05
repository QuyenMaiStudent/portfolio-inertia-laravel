import React from 'react';
import ScrollFade from '../components/ScrollFade';
import ThemeSwitch from '../components/ThemeSwitch';
import Avatar from '../components/Avatar';
import ProgressBar from '../components/ProgressBar';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import { Head } from '@inertiajs/react';

export default function Landing() {
    const skills = [
        { name: 'React', v: 85 },
        { name: 'TypeScript', v: 75 },
        { name: 'Tailwind', v: 80 },
        { name: 'Node.js', v: 70 },
    ];

    const projects = [
        {
            title: 'Project Alpha',
            desc: 'Một ví dụ project demo với chức năng A, B, C.',
            img: undefined,
            url: undefined,
        },
        {
            title: 'Project Beta',
            desc: 'Project dùng React + Inertia để demo SPA.',
            img: undefined,
            url: undefined,
        },
        {
            title: 'Project Gamma',
            desc: 'Mini app quản lý dữ liệu tạm trong localStorage.',
            img: undefined,
            url: undefined,
        },
    ];

    return (
        <div className="min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503264116251-35a269479413?w=1600&q=60&auto=format&fit=crop)' }}>
            <Head title="Landing" />
            <div className="backdrop-blur-sm bg-white/60 dark:bg-black/40 min-h-screen">
                <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar />
                        <div>
                            <h1 className="text-2xl font-bold">Nguyen Van A</h1>
                            <p className="text-sm text-gray-700 dark:text-gray-300">Frontend Developer • Inertia + React</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <nav className="hidden md:flex gap-4 text-sm">
                            <a href="#about" className="hover:underline">About</a>
                            <a href="#skills" className="hover:underline">Skills</a>
                            <a href="#projects" className="hover:underline">Projects</a>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </nav>
                        <ThemeSwitch />
                    </div>
                </header>

                <main className="max-w-5xl mx-auto px-6 pb-20">
                    <section className="py-12 grid md:grid-cols-2 gap-6 items-center">
                        <ScrollFade>
                            <div>
                                <h2 className="text-4xl font-extrabold mb-3">Hi, I'm Nguyen Van A</h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">I build performant web interfaces using React, Inertia and modern tooling.</p>
                                <div className="flex gap-3">
                                    <a className="px-4 py-2 bg-blue-600 text-white rounded" href="#contact">Contact me</a>
                                    <a className="px-4 py-2 bg-white/70 dark:bg-gray-800 rounded" href="#projects">View projects</a>
                                </div>
                            </div>
                        </ScrollFade>

                        <ScrollFade>
                            <div className="flex justify-center md:justify-end">
                                <Avatar size={160} />
                            </div>
                        </ScrollFade>
                    </section>

                    <section id="about" className="py-8">
                        <ScrollFade>
                            <h3 className="text-2xl font-semibold mb-3">About me</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tôi là developer đam mê xây dựng giao diện người dùng, thích tối ưu trải nghiệm tương tác,
                                và sử dụng Inertia để kết hợp Laravel + React như SPA mượt mà.
                            </p>
                        </ScrollFade>
                    </section>

                    <section id="skills" className="py-8">
                        <ScrollFade>
                            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                            <div className="max-w-md">
                                {skills.map((s) => (
                                    <ProgressBar key={s.name} label={s.name} value={s.v} />
                                ))}
                            </div>
                        </ScrollFade>
                    </section>

                    <section id="projects" className="py-8">
                        <ScrollFade>
                            <h3 className="text-2xl font-semibold mb-4">Projects</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                {projects.map((p) => (
                                    <ProjectCard key={p.title} project={p} />
                                ))}
                            </div>
                        </ScrollFade>
                    </section>

                    <section id="contact" className="py-8">
                        <ScrollFade>
                            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
                            <ContactForm />
                        </ScrollFade>
                    </section>
                </main>
            </div>
        </div>
    );
}