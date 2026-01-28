import { useState } from "react";

// export default function App() {
//     let [counter, setCounter] = useState(0);

//     const handleDecrease = () => {
//         /**
//          * using callback like below can be used to retreive old value which can be used to determine new value
//          */
//         // counter--
//         // setCounter(counter)
//         setCounter(prev => prev - 1)
//     };

//     const handleIncrease = () => {
//         counter++
//         setCounter(counter)
//     }

//     return (
//         <main className="container">
//             <h1>How many times will Bob say "state" in this section?</h1>
//             <div className="counter">
//                 <button className="minus" aria-label="Decrease count" onClick={handleDecrease}>–</button>
//                 <h2 className="count">{counter}</h2>
//                 <button className="plus" aria-label="Increase count" onClick={handleIncrease}>+</button>
//             </div>
//         </main>
//     )
// }

export default function App() {
    const [value, setValue] = useState(true);
    let output = value ? 'Yes' : 'No';

    const handleClick = () => {
        setValue(prev => !prev);
        output = value ? 'Yes' : 'No';
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={handleClick}>{output}</button>
        </main>
    )
}