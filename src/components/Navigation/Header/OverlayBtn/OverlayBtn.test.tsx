import React from 'react';
import { render, screen } from '@testing-library/react';
import OverlayBtn from './OverlayBtn';

const createOverlayBtn = (show: boolean) => {
  return <OverlayBtn show={show} clicked={() => {}} />;
};

test('Renders', () => {
  render(createOverlayBtn(true));

  expect(screen.getByRole('button')).toBeTruthy();
});

test('Has class show when show prop is present', () => {
  render(createOverlayBtn(true));

  expect(screen.getByRole('button')).toHaveClass('show');
});

test("Doesn't have class show when show prop isn't present", () => {
  render(createOverlayBtn(false));

  expect(screen.getByRole('button')).not.toHaveClass('show');
});
