import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavOverlay from './NavOverlay';

const setupNavOverlay = (show: boolean) => {
  return (
    <BrowserRouter>
      <NavOverlay show={show} onCloseSidedrawer={() => {}} />
    </BrowserRouter>
  );
};

test('Scroll is disabled when shown', () => {
  render(setupNavOverlay(true));

  expect(document.querySelector('body')).toHaveStyle('overflow-y: hidden');
});

test('Scroll is enabled when not shown', () => {
  render(setupNavOverlay(false));

  expect(document.querySelector('body')).toHaveStyle('overflow-y: scroll');
});
