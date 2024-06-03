import Link from 'next/link';
import React from 'react';

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function ProductDetailsLayout({
    children
} : {
    children: React.ReactNode
}) {
    const random = getRandomInt(0, 1)

    // Имитация ошибки
    if (random === 1) {
        throw new Error('Error loading products')
    }

    return (
       <>
        <Link href='/products'>Back</Link>
        {children}
        <h2>Feature products</h2>
        {/* Carousel here*/}
       </>
    );
}
