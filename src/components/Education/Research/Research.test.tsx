import { render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Research from './Research';

it('renders', () => {
  render(
    <BrowserRouter>
      <Research />
    </BrowserRouter>
  );

  expect(screen.getByLabelText(/research/i)).toBeInTheDocument();
});

it('has nasa research item opened with corresponding hash', () => {
  const history = createMemoryHistory();
  history.push('/education#CNN Approach for IR Spectral Classification');

  render(
    <Router history={history}>
      <Research />
    </Router>
  );

  expect(screen.getByText(/Infrared \(IR\)/i)).toBeInTheDocument();
});
