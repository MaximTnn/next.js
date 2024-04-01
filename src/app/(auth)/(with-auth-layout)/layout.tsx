import React from 'react';

export default function AuthLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
       <>
        <h2>inner layout</h2>
        {children}
       </>
    );
}
