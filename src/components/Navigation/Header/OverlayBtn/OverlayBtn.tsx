import React from 'react';

import './OverlayBtn.scss';

interface OverlayBtnProps {
  show: boolean;
  clicked: () => void;
}

function OverlayBtn({ show, clicked }: OverlayBtnProps) {
  const btnClasses = ['overlay-btn'];

  document.body.style.overflowY = 'scroll';

  if (show) {
    btnClasses.push('show');
    document.body.style.overflowY = 'hidden';
  }

  return (
    <div className={btnClasses.join(' ')} onClick={() => clicked()}>
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default OverlayBtn;
