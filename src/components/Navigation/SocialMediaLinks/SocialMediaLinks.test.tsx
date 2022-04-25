import { render, screen } from '@testing-library/react';
import SocialMediaLinks from './SocialMediaLinks';

it('renders', () => {
  render(<SocialMediaLinks />);

  expect(screen.getByTitle(/Github/i)).toBeInTheDocument();
  expect(screen.getByTitle(/LinkedIn/i)).toBeInTheDocument();
  expect(screen.getByTitle(/Email/i)).toBeInTheDocument();
});
