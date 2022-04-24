import { Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import NavigationItems from './NavigationItems';

const setupNavigationItems = (history: any) => {
  return (
    <Router history={history}>
      <NavigationItems />
    </Router>
  );
};

it('renders', () => {
  render(setupNavigationItems(createMemoryHistory()));

  expect(screen.getByLabelText(/navigation items/i)).toBeInTheDocument();
});

it('routes to home', async () => {
  const history = createMemoryHistory();
  render(setupNavigationItems(history));

  fireEvent.click(screen.getByText(/home/i));

  expect(history.location.pathname).toEqual('/');
});

it('routes to education', async () => {
  const history = createMemoryHistory();
  render(setupNavigationItems(history));

  fireEvent.click(screen.getByText(/education/i));

  expect(history.location.pathname).toEqual('/education');
});

it('routes to experience', async () => {
  const history = createMemoryHistory();
  render(setupNavigationItems(history));

  fireEvent.click(screen.getByText(/experience/i));

  expect(history.location.pathname).toEqual('/experience');
});

it('routes to about', async () => {
  const history = createMemoryHistory();
  render(setupNavigationItems(history));

  fireEvent.click(screen.getByText(/about/i));

  expect(history.location.pathname).toEqual('/about');
});
