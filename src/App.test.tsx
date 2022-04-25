import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

window.scrollTo = jest.fn();

afterAll(() => {
  jest.clearAllMocks();
});

it('renders', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByRole(/application/i)).toBeInTheDocument();
});
