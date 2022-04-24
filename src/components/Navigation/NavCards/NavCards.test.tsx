import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NavCards from './NavCards';

const setupNavCards = (route: string) => {
  const history = createMemoryHistory();
  history.push(route);

  return (
    <Router history={history}>
      <NavCards />
    </Router>
  );
};

it('renders', () => {
  render(setupNavCards(''));

  expect(screen.getByLabelText(/navigation cards/i)).toBeInTheDocument();
});

it('renders all cards on home page', () => {
  render(setupNavCards(''));

  expect(screen.getByText(/education/i)).toBeInTheDocument();
  expect(screen.getByText('Experience')).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
});

it('renders all other cards on education page', () => {
  render(setupNavCards('/education'));

  expect(screen.queryByText(/education/i)).not.toBeInTheDocument();
  expect(screen.getByText('Experience')).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
});

it('renders all other cards on experience page', () => {
  render(setupNavCards('/experience'));

  expect(screen.queryByText('Experience')).not.toBeInTheDocument();
  expect(screen.getByText(/education/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
});

it('renders all other cards on about page', () => {
  render(setupNavCards('/about'));

  expect(screen.queryByText(/about/i)).not.toBeInTheDocument();
  expect(screen.getByText(/education/i)).toBeInTheDocument();
  expect(screen.getByText('Experience')).toBeInTheDocument();
});
