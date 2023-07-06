import React, { useState } from 'react';
import '../css/contact.css'
const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handling the submit request
    setIsSubmitted(true);
  };

  return (
    <div className='contact-page'>
      <h1>Contact Us</h1>
      {isSubmitted ? (
        <p>Thank you for your message. We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
            //   setting the value of the name hook
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
            //   setting the value of the email hook
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              value={message}
            // setting the value of the message hook
              
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
