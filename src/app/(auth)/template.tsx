'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import './styles.css'

// Template в отличии от Layout не созраняет текущий стейт, а монтируется заново
// Layout в свою очередь сохраняет состояние и делает перерендер только дочерних элеиентов при смене страницы
// Для примера используется инпут с состоянием

const navLinks = [
    {
        name: 'Register',
        href: '/register',
    },
    {
        name: 'Login',
        href: '/login',
    },
    {
        name: 'Forgot password',
        href: '/forgot-password',
    },
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathName = usePathname()
    const [input, setInput] = React.useState('')

    return (
        <div>
            <div>
                <input type="text" name="" id="" value={input} onChange={e => setInput(e.target.value)}/>
            </div>
            <div>
                {navLinks.map((link, i) => {
                    const isActive = pathName.startsWith(link.href)  
                    return <Link 
                        href={link.href} key={i}
                        className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
                    >
                            {link.name}
                    </Link>
                })}
                {children}
            </div>
        </div>
    );
}