import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('Renders with children', () => {
  render(
    <Logo url=''>
      <i>Logo Child</i>
    </Logo>
  );

  expect(screen.getByText('Logo Child')).toBeTruthy();
});

test('Not disabled with url', () => {
  render(
    <Logo url='/education'>
      <i>Logo Child</i>
    </Logo>
  );

  expect(document.querySelector('.logo')).not.toHaveClass('disabled');
});

test('Disabled with blank url', () => {
  render(
    <Logo url=''>
      <i>Logo Child</i>
    </Logo>
  );

  expect(document.querySelector('.logo')).toHaveClass('disabled');
});

test('Has custom classes', () => {
  const testClass = 'test';
  render(
    <Logo className={testClass} url=''>
      <i>Logo Child</i>
    </Logo>
  );

  expect(document.querySelector('.logo')).toHaveClass('test');
});
