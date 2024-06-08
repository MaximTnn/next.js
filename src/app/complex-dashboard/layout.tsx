import React from 'react';

// Пример реализации паралельных маршрутов (Parallel Routes)
// Паралельные маршруты реализуются с помощью слотов (@slot)
// Данные пропсы автоматически получаются из папок стрницы complex-dashboard
export default function DashboardLayout({
    children, // complex-dashboard/page.tsx
    users, // complex-dashboard/@users/page.tsx
    revenue, // complex-dashboard/@revenue/page.tsx
    notifications, // complex-dashboard/@notifications/page.tsx
    login, // complex-dashboard/@login/page.tsx
}: {
    children: React.ReactNode
    users: React.ReactNode
    revenue: React.ReactNode
    notifications: React.ReactNode
    login: React.ReactNode
}) {
    const isLoggedIn = false;

    console.log(login);
    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: 'flex', flex: 1 }}>
                    {notifications}
                </div>
            </div>
        </div>
    ) : (
        login
    );
}
