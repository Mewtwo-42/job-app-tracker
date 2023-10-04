import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = () => {
  //initilize state variables
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //declare navigate hook that was imported from react-router
  const navigate = useNavigate();

  //declare a setInput function to update name, username & password state
  const setInput = (fieldName, event) => {
    // Get the current value from the event target
    const value = event.target.value;
    // Determine which state variable to update based on fieldName
    switch (fieldName) {
      case 'name':
        // Update the username state with the new value
        setName(value);
        break;
      case 'username':
        // Update the username state with the new value
        setUsername(value);
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
      const response = await fetch(`http://localhost:8000/signup`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, username, password }), //send name, username and password as JSON
      });

      //check if response is NOT ok (ex. 401 Unauthorized)
      if (!response.ok) {
        throw new Error('Invalid credentials.');
      }

      // Clear the input fields on successful signup
      setName('');
      setUsername('');
      setPassword('');

      //redirect user to dashboard on successful signup
      navigate('/dashboard');
    } catch (error) {
      //handle errors by setting error message in state
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Full Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setInput('name', e)}
          />
        </div>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={(e) => setInput('username', e)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setInput('password', e)}
          />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to='/'>Login here.</Link>
      </p>
    </div>
  );
};
