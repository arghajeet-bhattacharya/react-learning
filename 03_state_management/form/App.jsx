import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {

    const handleFormSubmit = (formData) => {
        const email = formData.get('email-input');
        const password = formData.get('password-input');
        console.log('email: ', email);
        console.log('password: ', password);
    }

    return (
        <section>
            <h1>Signup form</h1>
            <form action={handleFormSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email-input" placeholder="joe@schmoe.com" />
                <br />

                <label htmlFor="password">Password:</label>
                <input id="password" type="password" name="password-input" />
                <br />

                <button>Submit</button>

            </form>
        </section>
    )
}