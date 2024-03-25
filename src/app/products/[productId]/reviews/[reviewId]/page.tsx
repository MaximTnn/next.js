import { notFound } from 'next/navigation';
import React from 'react';

export default function ReviewDetail({params}: {
    params: {
        productId: string
        reviewId: string
    }
}) {
    if (parseInt(params.reviewId) > 1000) {
        notFound()
    }
    return (
        <h1>review {params.reviewId} for product {params.productId}</h1>
    );
}