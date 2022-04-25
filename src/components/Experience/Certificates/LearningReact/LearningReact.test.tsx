import { render, screen } from '@testing-library/react';
import LearningReact from './LearningReact';

it('renders', () => {
  render(<LearningReact />);

  expect(screen.getByText(/Learning React/i)).toBeInTheDocument();
});
