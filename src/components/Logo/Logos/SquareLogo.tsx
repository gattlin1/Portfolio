import React from 'react';
import Logo from '../Logo';

function SquareLogo() {
  return (
    <Logo
      className='square-logo'
      url='https://squareup.com/us/en/campaign/payroll-brand-1?%2Fgclid=CjwKCAjw6raYBhB7EiwABge5KsONFRoQcIrXCQoTXpNh1qANTiWXjl1q5Ox7k-QEhhED6hRkT2YuvBoCtQUQAvD_BwE%7Cpub%3DGOOGLE%7Ckw%3Dsquare+payroll%7Ckwid%3Dp62181867731%7Cmatchtype%3De%7Cdevice%3Dc&gclid=CjwKCAjw6raYBhB7EiwABge5KsONFRoQcIrXCQoTXpNh1qANTiWXjl1q5Ox7k-QEhhED6hRkT2YuvBoCtQUQAvD_BwE&gclsrc=aw.ds&pcrid=524633867435&pdv=c&pkw=square+payroll&pmt=e'
    >
      <img src='/images/logo/square.svg' alt='square' />
    </Logo>
  );
}

export default SquareLogo;
