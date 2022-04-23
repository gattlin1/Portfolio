import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Hobbies from './Hobbies';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Hobbies />
    </BrowserRouter>
  );
});

test('Default Hobby is Chess', () => {
  expect(screen.getByText('Chess')).toHaveClass('active');
});

test('Hobby is changed to Japanese on click', () => {
  fireEvent.click(screen.getByText('Japanese'));

  expect(screen.getByText('Japanese')).toHaveClass('active');
});

test('Hobby is changed to Reading on click', () => {
  fireEvent.click(screen.getByText('Reading'));

  expect(screen.getByText('Reading')).toHaveClass('active');
});
