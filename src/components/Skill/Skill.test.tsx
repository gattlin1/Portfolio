import { render, screen } from '@testing-library/react';
import Skill from './Skill';

it('renders', () => {
  render(<Skill>a skill</Skill>);
  expect(screen.getByText(/a skill/i)).toBeInTheDocument();
});
