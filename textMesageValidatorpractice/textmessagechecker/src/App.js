import React,{useState} from 'react';

import './css/counter.css';

// don't change the Component name "App"
export default function App() {

    const [count, setCounter] = React.useState(0);

    function counter() {
        setCounter(i => i + 1);

    }

    return (
        <div>
            <p id="counter">{count}</p>
            <button onClick={counter}>Increment</button>
        </div>
    );
}