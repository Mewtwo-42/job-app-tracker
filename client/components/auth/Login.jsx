import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  //initilize state variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //declare navigate hook that was imported from react-router
  const navigate = useNavigate();

  //declare a setInput function to update email & password state
  const setInput = (fieldName, event) => {
    // Get the current value from the event target
    const value = event.target.value;
    // Determine which state variable to update based on fieldName
    switch (fieldName) {
      case 'email':
        // Update the email state with the new value
        setEmail(value);
        break;
      case 'password':
        // Update the password state with the new value
        setPassword(value);
        break;
    }
  };

  //function to handle form submission
  const handleSubmit = async (e) => {
    //prevent the default form submission
    e.preventDefault();

    try {
      //send POST requset to login endpt with user credentials
      //QUESTION ON WHERE TO FETCH??
      const response = await fetch(`http://localhost:8000`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }), //send email and password as JSON
      });

      //check if response is NOT ok (ex. 401 Unauthorized)
      if (!response.ok) {
        throw new Error('Invalid credentials.');
      }

      // Clear the input fields on successful login
      setEmail('');
      setPassword('');

      //redirect user to dashboard on successful login
      navigate('http://localhost:8000/dashboard');
    } catch (error) {
      //handle errors by setting error message in state
      setError(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-customBeige">
      <div className='max-w-md w-full space-y-8'>
        <h2 className="text-center text-3xl font-extrabold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor='email' className='block text-gray-600 font-semibold'>Email</label>
            <input
              id='email'
              name='email'
              type='text'
              value={email}
              onChange={(e) => setInput('email', e)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-gray-600 font-semibold'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setInput('password', e)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            />
          </div>
          <button type='submit'
          className="w-full bg-customBlue text-white py-2 px-4 rounded-md hover:bg-customDarkBlue focus:outline-none"
          >Login</button>
        </form>
        <p>
          Not a member?{' '}
          <Link to='http://localhost:8000/signup'>Signup now</Link>
        </p>
      </div>
    </div>
  );
};
