import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const styles = {
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '12px',
        marginBottom: '6px',
        color: 'cornsilk',
    },
    h5: {
        textAlign: 'center',
    },
    button: {
        textAlign: 'center',
    },
    feedback: {
        backgroundColor: 'cornsilk',
        borderRadius: '4px',
        textAlign: 'center',
        marginBottom: '6px',
    }
}

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
        <div className='container-fluid d-flex-column justify-content-center col-md-6' style={styles.container}>
            <h5 className='p-3' style={styles.h5}>Wanna talk? Provide your details here and I will get back with you ASAP!</h5>
            <form className='form d-flex-column justify-content-center p-3'>
                <div className='form-row'>
                    <div className='form-group col-md-6'>
                        <label for="name">Name</label>
                        <input
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Enter name here...'
                            className='form-control'
                            id='inputName'
                        />
                    </div>
                </div>
                <div className='form-group col-md-8'>
                    <label for="inputEmail4">Email</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder='Enter email here...'
                        className="form-control"
                        id="inputEmail4"
                    />
                </div>
                <div className='mb-3'>
                    <label for="validationTextarea">Message</label>
                    <input
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder='What would you like to discuss?'
                        className='form-control is-invalid'
                        id="validationTextarea"
                    />
                    <div className="invalid-feedback" style={styles.feedback}>
                        Please enter a message in the textarea.
                    </div>
                    <div style={styles.button}>
                        <button type="button" onClick={handleFormSubmit} className="btn btn-warning">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            {errorMessage && (
                <div className='errorDiv d-flex justify-content-center'>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );

}

export default Form;