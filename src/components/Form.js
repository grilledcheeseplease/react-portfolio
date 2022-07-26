import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        if (inputType === 'name') setName(inputValue);
        if (inputType === 'email') setEmail(inputValue);
        if (inputType === 'message') setMessage(inputValue);

    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !name || !message) {
            setErrorMessage('Please provide name, valid email, and a message.');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
        alert(`Thank you, ${name}, for your message! I will respond ASAP to the email provided.`);
    };

    return (
        <div>
            <p>Wanna talk? Provide your details here and I will get back with you ASAP!</p>
            <form className='form'>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Enter name here...'
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder='Enter email here...'
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder='What would you like to discuss?'
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );

}

export default Form;