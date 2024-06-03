'use client'

// В Error.message мы отправиди сообщение об ошибке из компонента
export default function ErrorBoundary({ error }: { error: Error }) {
    console.log(error.message)

    return <div>
        Error message: {error.message}
    </div>
}
