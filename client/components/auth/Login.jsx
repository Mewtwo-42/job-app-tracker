import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const Login = () => {
  //initilize state variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //declare navigate hook that was imported from react-router
  const navigate = useNavigate();

  //declare a setInput function to update username & password state
  const setInput = (fieldName, event) => {
    // Get the current value from the event target
    const value = event.target.value;
    // Determine which state variable to update based on fieldName
    switch (fieldName) {
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
      const apiUrl = 'https://';
      const response = await fetch(`${apiUrl}user/`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }), //send username and password as JSON
      });

      //check if response is NOT ok (ex. 401 Unauthorized)
      if (!response.ok) {
        throw new Error('Invalid credentials.');
      }

      // Clear the input fields on successful login
      setUsername('');
      setPassword('');

      //redirect user to dashboard on successful login
      navigate('/dashboard');
    } catch (error) {
      //handle errors by setting error message in state
      setError(error.message);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
