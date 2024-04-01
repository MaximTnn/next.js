import { Metadata } from "next"

export const metadata: Metadata ={
    title: {
        // absolute игнорирует изменение title через родительский title template в layout
        absolute: 'Blog',
    }
}

export default function Blog() {
    return <h1>My blog</h1>
}