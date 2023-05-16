import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import axios from 'axios';

const INITIAL_STATE = {
    id: nanoid(),
    name: '',
    email: '',
    subject: '',
    message: '',
}

const Contact = () => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [submitted, setSubmitted] = useState(false);
    //Error state
    const [error, setError] = useState(false);
    //Loading state
    const [loading, setLoading] = useState(false);


    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        });
    };

    //to prevent default refresh
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
          const response = await axios.post('https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries', form);
          console.log(response);
          setSubmitted(true);
          setError(null);
          setForm(INITIAL_STATE);
        } catch (error) {
          setSubmitted(false);
          setError('Submission failed. Please try again later.');
        } finally {
          setLoading(false);
        }
    };
    
 
    
  return (
    <div>
    {/* success code */}
    {submitted && <p className='success'>Form submitted successfully!</p>}
    {/* error code */}
    {error && <p className='error'>Error: {error}</p>}
    <form onSubmit={handleSubmit}>
    <div className='container'>
         <div className="wrap">

            <h2>Contact US</h2>
            <label className='label' htmlFor="name">Name</label>
            <div className="name-div">
            
                <input type="text" id='name' placeholder='name' required
                value={form.name} onChange={handleChange}/>
             </div> 

             <div className="email-div">
                <label htmlFor="email">Email </label>
                <input type="email" id='email'  placeholder='Email'
                value={form.email} onChange={handleChange} required/>
             </div>

             <div className="subject-div">
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject"  placeholder='Enter your message here...'
                value={form.subject} onChange={handleChange}/>
            </div>


             <div className="text-div">
             <label htmlFor="message">Message</label>
                <textarea name="textarea" id="message" placeholder='Message' value={form.message} onChange={handleChange} required></textarea>
             </div>
             <div className="btn">
                <button type='submit'>Submit</button>
                
                {loading && <p className='submit'>Loading...</p>}
             </div>
         </div>
        
    </div>
   
    </form>
    </div>
  )
}


export default Contact