import React from 'react';

import './CarouselItem.scss';

interface CarouselItemProps {
  children: JSX.Element;
}

function CarouselItem({ children }: CarouselItemProps) {
  return (
    <div className='carousel-item'>
      <div className='carousel-wrapper'>{children}</div>
    </div>
  );
}

export default CarouselItem;
