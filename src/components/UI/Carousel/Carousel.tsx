import React, { Children, useEffect, useState } from 'react';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

import './Carousel.scss';

interface CarouselProps {
  children: JSX.Element[] | JSX.Element;
  breakPoints: { breakPointWidth: number; breakPointItems: number }[];
}

const Carousel = ({ children, breakPoints }: CarouselProps) => {
  const items = Children.toArray(children);
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const { width } = useWindowDimensions();
  let contentClasses = ['content'];

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    setPage(page - 1);
  };

  const hasNextPage = () => {
    return items.length - itemsPerPage > page;
  };

  const hasPrevPage = () => {
    return page > 0;
  };

  useEffect(() => {
    let newItems = 0;
    for (const { breakPointWidth, breakPointItems } of breakPoints) {
      if (width < breakPointWidth) {
        newItems = breakPointItems;
        break;
      }
    }

    // If the window is larger than all the breakpoints, set to largest breakPointItems
    if (newItems === 0) {
      newItems = breakPoints[breakPoints.length - 1].breakPointItems;
    }

    setItemsPerPage((prevItemsPerPage) => {
      return newItems;
    });
  }, [width, itemsPerPage, breakPoints]);

  contentClasses.push('show-' + itemsPerPage);

  return (
    <div className='carousel'>
      <div className='scroll-left'>
        {hasPrevPage() && (
          <i className='fas fa-arrow-left' onClick={decrementPage}></i>
        )}
      </div>
      <div className='content-wrapper'>
        <div
          className={contentClasses.join(' ')}
          style={{ transform: `translateX(-${(page * 100) / itemsPerPage}%)` }}
        >
          {items}
        </div>
      </div>
      <div className='scroll-right'>
        {hasNextPage() && (
          <i className='fas fa-arrow-right' onClick={incrementPage}></i>
        )}
      </div>
      <div className='pagination'>
        {hasPrevPage() && (
          <i className='far fa-circle' onClick={decrementPage}></i>
        )}
        <i className='fas fa-circle'></i>
        {hasNextPage() && (
          <i className='far fa-circle' onClick={incrementPage}></i>
        )}
      </div>
    </div>
  );
};

export default Carousel;
