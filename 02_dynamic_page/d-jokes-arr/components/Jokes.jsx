export default function Contact({ setup, punchline, upvote }) {
    return (
        <>
            {setup && <p>Setup 1:: {setup}</p>}
            <p style={{ display: setup ? 'block' : 'none' }}>Setup 2:: {setup}</p>
            <p>Punchline:: {punchline}</p>
            {upvote && <p>Upvote:: {upvote}</p>}
            {upvote && <p>Upvote Summary:: {upvote > 5 ? 'Greater than 5' : 'Less than 5'}</p>}
            <hr></hr>
        </>
    )
}