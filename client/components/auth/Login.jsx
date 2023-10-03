import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const login = () => {
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
    e.preventDefault();

  }

};
