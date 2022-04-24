import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

beforeEach(() => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
});

it('renders', () => {
  expect(screen.getByLabelText('Main')).toBeInTheDocument();
});

it('has overlay closed by default', () => {
  expect(screen.getByLabelText('Navigation Items')).not.toHaveClass('show');
});

it('opens overlay on click', () => {
  expect(screen.getByLabelText('Navigation Items')).not.toHaveClass('show');

  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByLabelText('Navigation Items')).toHaveClass('show');
});
