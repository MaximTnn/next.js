import { notFound } from 'next/navigation';
import React from 'react';

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function ReviewDetail({params}: {
    params: {
        productId: string
        reviewId: string
    }
}) {
    const random = getRandomInt(0, 1)

    // Имитация ошибки
    if (random === 1) {
        throw new Error('Error loading review')
    }

    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }
    return (
        <h1>review {params.reviewId} for product {params.productId}</h1>
    );
}