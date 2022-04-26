import { render, screen } from '@testing-library/react';
import Card from './Card';

it('renders', () => {
  render(
    <Card title='Card Title'>
      <p>some children</p>
    </Card>
  );

  expect(screen.getByText(/card title/i)).toBeInTheDocument();
});
