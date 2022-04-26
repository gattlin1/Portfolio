import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavOverlay from './NavOverlay';

window.scrollTo = jest.fn();

const setupNavOverlay = (show: boolean) => {
  return (
    <BrowserRouter>
      <NavOverlay show={show} onClose={() => {}} />
    </BrowserRouter>
  );
};

it('disables scroll when overlay is shown', () => {
  render(setupNavOverlay(true));

  expect(document.querySelector('body')).toHaveStyle('overflow-y: hidden');
});

it('enables scroll when overlay is not shown', () => {
  render(setupNavOverlay(false));

  expect(document.querySelector('body')).toHaveStyle('overflow-y: scroll');
});
