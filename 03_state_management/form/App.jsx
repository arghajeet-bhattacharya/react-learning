import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {

    const handleFormSubmit = (formData) => {
        console.log('formData: ', formData)
        const email = formData.get('email-input');
        const password = formData.get('password-input');
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

                <label htmlFor='description'>Description:</label>
                <textarea id='description' name='description'></textarea>

                <fieldset>
                    <legend>Joining Status</legend>
                    <label>
                        <input type='radio' name='joiningStatus' value='yes' defaultChecked={true}/>Yes
                    </label>
                    <label>
                        <input type='radio' name='joiningStatus'value='no'/>No
                    </label>
                    <label>
                        <input type='radio' name='joiningStatus' value='dont-know'/>Don't know
                    </label>
                </fieldset>

                <button>Submit</button>

            </form>
        </section>
    )
}