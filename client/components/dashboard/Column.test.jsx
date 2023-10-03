import React from 'react';
import Dashboard from './Dashboard.jsx';
import { render, screen } from '@testing-library/react'; //screen allows to select element from the DOM
import { expect, beforeEach, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
    render(
      <BrowserRouter>
        <Dashboard/>
      </BrowserRouter>
    );
  });

//we have 2 buttons create and task small


it('renders a CREATE button'), () =>{
    const createButton = screen.getByRole('button');
    expect(createButton).toBeInTheDocument();
}
//create button should create a small task card
it('create button should create a small task card'), () =>{
    const taskSmall = screen.getByRole('button');
    expect(taskSmall).toBeInTheDocument();
}