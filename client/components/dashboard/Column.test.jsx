import React from 'react';
import { Column } from './Column';
import { render } from '@testing-library/react'; //screen allows to select element from the DOM
import { expect, it } from 'vitest';
// import { BrowserRouter } from 'react-router-dom';

// test to check if Column component renders
it ('renders the Column component', () => {
      render(<Column/>);
  });

// test if create button exists
it('renders a CREATE button'), () =>{
  const createButton = screen.getByRole('create');
  expect(createButton).toBeVisible();
}


// // test to check if create button pops-up when click. 
// // TODO: generate smallTaskCard to be tested
// it('clicking the button opens a pop-up window', () => {
//   // Render your component
//   render(<Dashboard />);

//   // Find the button by its ARIA role
//   const button = screen.getByRole('button');

//   // Check that the pop-up window is not initially visible
//   const popupCard = screen.queryByText('Popup card'); // Replace with your popup content text or element
//   expect(popupCard).not.toBeInTheDocument();

//   // Simulate a user click on the button
//   fireEvent.click(button);

//   // Check that the pop-up window is now visible
//   const newPopupCard = screen.getByText('Popup card'); // Replace with your popup content text or element
//   expect(newPopupCard).toBeInTheDocument();
// });
