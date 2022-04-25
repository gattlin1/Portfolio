import { render, screen } from '@testing-library/react';
import SocialMediaLink from './SocialMediaLink';

it('renders', () => {
  render(<SocialMediaLink name='test' url='' iconClass='' />);

  expect(screen.getByTitle(/test/i)).toBeInTheDocument();
});
