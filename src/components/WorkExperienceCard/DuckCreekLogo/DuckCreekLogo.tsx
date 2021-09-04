import React from 'react';
import './DuckCreekLogo.scss';

const DuckCreekLogo = () => {
  return (
    <a href='https://www.duckcreek.com/' target='_blank' rel='noreferrer'>
      <svg
        id='duck-creek-logo'
        xmlns='http://www.w3.org/2000/svg'
        width='45px'
        height='30px'
        viewBox='0 0 45 30'
        href='https://www.duckcreek.com/'
      >
        <title>Duck Creek Technologies</title>
        <polygon
          id='beak'
          points='44.8848672 11.1213182 38.4727239 7.4145 38.4727239 14.8285909'
          fill='#FFA360'
        ></polygon>
        <polygon
          id='neck'
          points='32.0606259 11.1213182 25.6484826 14.8285909 32.0606259 18.5358636 38.4727693 14.8285909 38.4727693 7.4145'
          fill='#3B3487'
        ></polygon>
        <polygon
          id='front-wing'
          points='19.2363392 3.70722727 12.8241959 7.4145 19.2363392 11.1213182 25.6484826 14.8285909 25.6484826 7.4145 25.6484826 -4.54545455e-05'
          fill='#7E6BF4'
        ></polygon>
        <polygon
          id='back-wing'
          points='19.2363392 11.1213182 12.8241959 7.4145 6.41205256 3.70722727 -9.07849829e-05 -4.54545455e-05 -9.07849829e-05 7.4145 -9.07849829e-05 14.8285909 6.41205256 18.5358636 12.8241959 22.2426818 19.2363392 18.5358636 25.6484826 14.8285909'
          fill='#3B3487'
        ></polygon>
        <polygon
          id='body'
          points='12.8242413 29.6571364 19.2667976 25.9444091 25.7025451 22.2235 32.0606713 18.5357727 25.648528 14.8285 19.2363846 18.5357727 12.8242413 22.2425909 6.41209795 18.5357727 -4.53924915e-05 22.2425909 6.39621058 25.9444091'
          fill='#2DD49C'
        ></polygon>
      </svg>
    </a>
  );
};

export default DuckCreekLogo;
