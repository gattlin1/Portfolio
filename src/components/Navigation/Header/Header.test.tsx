import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

window.scrollTo = jest.fn();

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
  expect(screen.getByLabelText('Navigation Overlay')).not.toHaveClass('show');
});

it('opens overlay on click', () => {
  expect(screen.getByLabelText('Navigation Overlay')).not.toHaveClass('show');

  fireEvent.click(screen.getByRole('button'));

  expect(screen.getByLabelText('Navigation Overlay')).toHaveClass('show');
});
