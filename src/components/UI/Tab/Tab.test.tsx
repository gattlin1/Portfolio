import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Tab from './Tab';

beforeEach(() => {
  const tab = {
    title: 'Tab',
    tabs: { tab1: <p>Description Tab 1</p>, tab2: <p>Description Tab 2</p> },
  };

  render(
    <BrowserRouter>
      <Tab {...tab}></Tab>
    </BrowserRouter>
  );
});

it('has first tab as default', () => {
  expect(screen.getByText(/description tab 1/i).closest('div')).toHaveClass(
    'active'
  );
  expect(screen.getByText(/tab1/i).closest('button')).toHaveClass('active');
});

it('changes tab when new one is selected', () => {
  fireEvent.click(screen.getByText('tab2'));

  expect(screen.getByText(/description tab 2/i).closest('div')).toHaveClass(
    'active'
  );
  expect(screen.getByText(/tab2/i).closest('button')).toHaveClass('active');

  expect(screen.getByText(/description tab 1/i).closest('div')).not.toHaveClass(
    'active'
  );
  expect(screen.getByText(/tab1/i).closest('button')).not.toHaveClass('active');
});
