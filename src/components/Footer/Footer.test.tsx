import { render, screen } from '@testing-library/react';
import Footer from './Footer';

beforeEach(() => {
  render(<Footer />);
});

it('renders', () => {
  expect(screen.getByLabelText(/footer/i)).toBeInTheDocument();
});

it('has social medial links', () => {
  expect(screen.getByTitle(/github/i)).toBeInTheDocument();
  expect(screen.getByTitle(/linkedin/i)).toBeInTheDocument();
  expect(screen.getByTitle(/email/i)).toBeInTheDocument();
});
