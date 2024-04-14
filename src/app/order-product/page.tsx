'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function OrderProduct() {
    const router = useRouter()

    const handleClick = () => {
        console.log('Placing your order')
        router.push('/')
        // router.forward() переход к следующей странице
        // router.back() переход к предыдущей странице
    }

    return (
        <>
            <h1>Oredr product</h1>
            <button onClick={handleClick}>Place order</button>
        </>
    );
}
