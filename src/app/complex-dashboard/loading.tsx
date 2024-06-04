'use client'

import Card from '@/components/Card/Card';
import React from 'react';

// Данный компонент отображает состояние загрузки пока вызываемая страница загружается
// Компонент нужно разместить рядом со страницей и он будет работать автоматически 

export default function Loading() {
    return (
        <Card>
            Loading...
        </Card>
    );
}