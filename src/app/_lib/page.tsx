import React from 'react';

export default function PrivateRoute() {
    return (
        <h1>You cannot view this in the browser</h1>
    );
}

// за приватную папку отвечает нижнее подчеркивание (_название)
// данная страница не учитывается в роутинге и в ней можно хранить отдельно логику страницы или компоненты 