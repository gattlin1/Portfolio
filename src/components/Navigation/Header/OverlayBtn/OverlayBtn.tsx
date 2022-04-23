import React from 'react';
import './OverlayBtn.scss';

interface OverlayBtnProps {
  show: boolean;
  clicked: () => void;
}

function OverlayBtn({ show, clicked }: OverlayBtnProps) {
  const btnClasses = ['overlay-btn'];

  if (show) {
    btnClasses.push('show');
  }

  return (
    <div
      role='button'
      className={btnClasses.join(' ')}
      onClick={() => clicked()}
    >
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default OverlayBtn;
