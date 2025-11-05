import React, { useState } from 'react';

const STORAGE_KEY = 'contacts_local';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [saved, setSaved] = useState<string | null>(null);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        const entry = {
            id: Date.now(),
            name,
            email,
            message,
            created_at: new Date().toISOString(),
        };
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const arr = raw ? JSON.parse(raw) : [];
            arr.unshift(entry);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
            setSaved('Lưu vào localStorage thành công.');
            setName('');
            setEmail('');
            setMessage('');
            setTimeout(() => setSaved(null), 3000);
        } catch (err) {
            setSaved('Không thể lưu.');
            setTimeout(() => setSaved(null), 3000);
        }
    };

    return (
        <form onSubmit={submit} className="space-y-3 max-w-md">
            <div>
                <label className="block text-sm">Name</label>
                <input
                    className="w-full rounded border px-3 py-2 bg-white dark:bg-gray-900"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className="block text-sm">Email</label>
                <input
                    type="email"
                    className="w-full rounded border px-3 py-2 bg-white dark:bg-gray-900"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className="block text-sm">Message</label>
                <textarea
                    className="w-full rounded border px-3 py-2 bg-white dark:bg-gray-900"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    required
                />
            </div>
            <div>
                <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white">
                    Send (local)
                </button>
                {saved && <span className="ml-3 text-sm text-green-600">{saved}</span>}
            </div>
        </form>
    );
}