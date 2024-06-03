'use client'

// В Error.message мы отправили сообщение об ошибке из компонента
export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
    console.log(error.message)
    // reset - функция для перезагрузки компонента

    return <div>
        Error message: {error.message}
        <button onClick={reset}>Try again</button>
    </div>
}
