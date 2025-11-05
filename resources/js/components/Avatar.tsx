import React from 'react';

export default function Avatar({
    src,
    size = 96,
    alt = 'Avatar',
}: {
    src?: string;
    size?: number;
    alt?: string;
}) {
    const defaultSrc =
        'https://ui-avatars.com/api/?name=Nguyen+Van+A&background=0D8ABC&color=fff&rounded=true&size=256';
    return (
        <img
            src={src || defaultSrc}
            alt={alt}
            style={{ width: size, height: size }}
            className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
        />
    );
}