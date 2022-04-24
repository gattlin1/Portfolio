import { Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import NavigationItem from './NavigationItem';

const setupNavigationItem = (to: string, text: string, history: any) => {
  return (
    <Router history={history}>
      <NavigationItem to={to}>{text}</NavigationItem>
    </Router>
  );
};

it('renders', () => {
  render(setupNavigationItem('', 'Navigation Item', createMemoryHistory()));

  expect(screen.getByText(/navigation item/i)).toBeInTheDocument();
});

it('routes to new route', () => {
  const history = createMemoryHistory();
  render(setupNavigationItem('/home', 'Home', history));

  fireEvent.click(screen.getByText(/home/i));

  expect(history.location.pathname).toEqual('/home');
});
