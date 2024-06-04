import React from 'react';

export default  function Card({children} : {children: React.ReactNode}) {
    const cardStyle = {
        padding: '100px',
        margin: '10px',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,0.1)',
        border: '1px solid #ddd',
        display: 'flex',
        alignItems: 'center',
    }

    return (
        <div style={cardStyle}>
            {children}
        </div>
    );
}
