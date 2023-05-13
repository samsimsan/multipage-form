import React from 'react';

export default function App() {
    const now = 1;

    if (now === 1) {
        return <div>
        <h1>Hello</h1>
    </div>
    } else if (now ===2) {
        return <div>
        <h1>Hello2</h1>
    </div>
    } else {
        return <div>
        <h1>Hello nope</h1>
    </div>
    }
    
}