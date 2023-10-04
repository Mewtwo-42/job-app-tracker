import React from 'react';
import { Login } from './Login';
import { render, screen } from '@testing-library/react'; //screen allows to select element from the DOM
import { expect, beforeEach, it } from 'vitest';
//import { renderWithProviders } from './utilities';
//import { beforeEach } from 'node:test';
import { BrowserRouter } from 'react-router-dom';

//the function that is going to run before each test and render the login component
beforeEach(() => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
});


// checking all elements from the login component
it('render the element on the page as expected', () => {
  // test that the login component inc. the input fields 
  it('render the login input field correctly', () => {
    const loginInput = screen.getByPlaceholderText('Enter your email');
    expect(loginInput).toBeVisible();
  });
  // test the button to see if it work as expected
  it('render the login button correctly', () =>{
    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();
  })

});

