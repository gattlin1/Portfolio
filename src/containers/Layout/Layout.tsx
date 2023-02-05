import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Navigation/Header/Header';
import NavCards from '../../components/Navigation/NavCards/NavCards';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

import './Layout.scss';

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main>
        {props.children}
        <br />
        <NavCards />
      </main>
      <ScrollToTop />
    </>
  );
}

export default Layout;
