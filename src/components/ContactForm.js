import React, { useState }  from 'react'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
                Email:
                <input type ="email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Message:
                <input type="message" value={message} onChange={handleMessageChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm