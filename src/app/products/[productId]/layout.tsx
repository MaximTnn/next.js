import Link from 'next/link';
import React from 'react';

export default function ProductDetailsLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
       <>
        <Link href='/products'>Back</Link>
        {children}
        <h2>Feature products</h2>
        {/* Carousel here*/}
       </>
    );
}
