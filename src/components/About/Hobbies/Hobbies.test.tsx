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

it('has chess as default hobby', () => {
  expect(screen.getByText('Chess')).toHaveClass('active');
});

it('changes hobby to Japanese when selected', () => {
  fireEvent.click(screen.getByText('Japanese'));

  expect(screen.getByText('Japanese')).toHaveClass('active');
});

it('changes hobby to reading when selected', () => {
  fireEvent.click(screen.getByText('Reading'));

  expect(screen.getByText('Reading')).toHaveClass('active');
});
