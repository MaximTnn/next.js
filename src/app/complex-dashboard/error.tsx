'use client'

import Card from "@/components/Card/Card"

// В Error.message мы отправили сообщение об ошибке из компонента
export default function NotificationErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
    console.log(error.message)
    // reset - функция для перезагрузки компонента

    return (
        <Card>
            Error message: {error.message}
        </Card>
    )
}
