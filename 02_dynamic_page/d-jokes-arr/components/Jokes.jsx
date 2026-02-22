import {useState} from 'react';

export default function Contact({ setup, punchline, id }) {

    const [isDisplay, setIdDisplay] = useState(false);

    const handleDisplayPunchlineClick = (id) => {
        setIdDisplay(prev => !prev);
    }

    return (
        <>
            {setup && <h3>{setup}</h3>}
            {isDisplay && <p>{punchline}</p>}
            <button onClick={handleDisplayPunchlineClick}>{isDisplay ? 'Hide' : 'Show'} Display</button>
            <hr></hr>
        </>
    )
}