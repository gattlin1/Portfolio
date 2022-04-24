import { render, screen } from '@testing-library/react';
import Logo from './Logo';

it('renders with children', () => {
  render(
    <Logo url=''>
      <i>Logo Child</i>
    </Logo>
  );

  expect(screen.getByText('Logo Child')).toBeInTheDocument();
});

it('is enabled with url', () => {
  render(
    <Logo url='/education'>
      <i>Logo Child</i>
    </Logo>
  );

  expect(document.querySelector('.logo')).not.toHaveClass('disabled');
});

it('is disabled with blank url', () => {
  render(
    <Logo url=''>
      <i>Logo Child</i>
    </Logo>
  );

  expect(document.querySelector('.logo')).toHaveClass('disabled');
});

it('has custom classes', () => {
  const testClass = 'test';
  render(
    <Logo className={testClass} url=''>
      <i>Logo Child</i>
    </Logo>
  );

  expect(document.querySelector('.logo')).toHaveClass('test');
});
