import React, { Children, useState } from 'react';

import './Carousel.scss';

interface CarouselProps {
  children: JSX.Element[] | JSX.Element;
  itemsPerPage: number;
}

const Carousel = ({ children, itemsPerPage }: CarouselProps) => {
  const items = Children.toArray(children);
  const [page, setPage] = useState(0);
  const [currentItems, setCurrentItems] = useState(
    items.slice(0, itemsPerPage)
  );

  const incrementPage = () => {
    setPage((prevPage) => {
      let newPage = prevPage + 1;
      const newItemStart = newPage * itemsPerPage;
      const itemsLeft = items.length - newItemStart;

      // If there is a full page of items left
      if (newItemStart + itemsPerPage <= items.length) {
        setCurrentItems(items.slice(newItemStart, newItemStart + itemsPerPage));
      }
      // If there are items left but not for a full page
      else if (itemsLeft > 0) {
        setCurrentItems(items.slice(newItemStart, newItemStart + itemsLeft));
      }
      // If there are no items left
      else {
        newPage = prevPage;
      }

      return newPage;
    });
  };

  const decrementPage = () => {
    setPage((prevPage) => {
      let newPage = prevPage - 1;
      const newItemStart = newPage * itemsPerPage;
      const itemsLeft = newItemStart + itemsPerPage;

      // If there is a full page of items left
      if (newItemStart - itemsPerPage >= 0) {
        setCurrentItems(items.slice(newItemStart, newItemStart + itemsPerPage));
      }
      // If there are items left but not for a full page
      else if (itemsLeft > 0) {
        setCurrentItems(items.slice(newItemStart, newItemStart + itemsLeft));
      }
      // If there are no items left
      else {
        newPage = prevPage;
      }

      return newPage;
    });
  };

  const hasNextPage = () => {
    const nextPageRightBound = page * itemsPerPage + itemsPerPage;
    const itemsLeft = items.length > nextPageRightBound;
    return itemsLeft;
  };

  const hasPrevPage = () => {
    return page > 0;
  };

  return (
    <div className='carousel'>
      <div className='scroll-left'>
        {hasPrevPage() && (
          <i className='fas fa-arrow-left' onClick={decrementPage}></i>
        )}
      </div>
      <div className='content'>{currentItems}</div>
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
