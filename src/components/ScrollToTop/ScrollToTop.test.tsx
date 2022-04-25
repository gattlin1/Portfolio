import { render, screen } from '@testing-library/react';
import ScrollToTop from './ScrollToTop';

it('renders', () => {
  render(<ScrollToTop />);

  expect(screen.getByTestId(/scroll-to-top/i)).toBeInTheDocument();
});
