import React, { useState } from 'react';
import Header from '../../components/Navigation/Header/Header';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

import './Layout.scss';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

function Layout(props: LayoutProps) {
  const [showSideDrawer, setShowSidedrawer] = useState(false);

  const handleOpenSideDrawer = () => {
    setShowSidedrawer(true);
  };
  const handleCloseSideDrawer = () => {
    setShowSidedrawer(false);
  };

  return (
    <>
      <Header onOpenSideDrawer={handleOpenSideDrawer} />
      {showSideDrawer && (
        <Sidedrawer onCloseSidedrawer={handleCloseSideDrawer} />
      )}
      <main>{props.children}</main>
      <ScrollToTop />
    </>
  );
}

export default Layout;
