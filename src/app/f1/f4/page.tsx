import Link from 'next/link';
import React from 'react';

// https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes

export default function F4() {
    return (
        <>
            <h1>
                F4 page
            </h1>
            <div>
                <Link href="/f1/f3">F3</Link>
                <Link href="/about">About</Link>
            </div>
        </>
    );
}
