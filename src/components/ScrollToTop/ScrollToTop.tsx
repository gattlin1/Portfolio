import React, { useEffect, useState } from 'react';

import './ScrollToTop.scss';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const classes = ['far', 'fa-arrow-alt-circle-up', 'scroll-to-top'];

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isVisible) {
    classes.push('visible');
  }

  return (
    <div id='scroll-to-top' data-testid='scroll-to-top'>
      <i className={classes.join(' ')} onClick={scrollUp}></i>
    </div>
  );
}

export default ScrollToTop;
