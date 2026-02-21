import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {

    const handleFormSubmit = (formData) => {
        const data = Object.fromEntries(formData);
        const skillSet = formData.getAll('skillSet');
        const finalDta = { ...data, skillSet }
        console.log('finalDta: ', finalDta)
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
                        <input type='radio' name='joiningStatus' value='yes' defaultChecked={true} />Yes
                    </label>
                    <label>
                        <input type='radio' name='joiningStatus' value='no' />No
                    </label>
                    <label>
                        <input type='radio' name='joiningStatus' value='dont-know' />Don't know
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Skill</legend>
                    <label>
                        <input type='checkbox' name='skillSet' value='node' defaultChecked={true} />Node.js
                    </label>
                    <label>
                        <input type='checkbox' name='skillSet' value='react' defaultChecked={true} />React.js
                    </label>
                    <label>
                        <input type='checkbox' name='skillSet' value='mysql' />MySql
                    </label>
                </fieldset>

                <label>What is your current city</label>
                <select id='curCity' name='curCity' defaultValue='' required={false}>
                    <option value='' disabled>-- Choose Option --</option>
                    <option value='delhi'>Delhi</option>
                    <option value='hyderabad'>Hyderabad</option>
                    <option value='bangalore'>Bangalore</option>
                </select>

                <button>Submit</button>

            </form>
        </section>
    )
}