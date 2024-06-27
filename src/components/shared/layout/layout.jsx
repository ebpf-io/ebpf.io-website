import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import TopBanner from 'components/shared/top-banner';

const Layout = ({ children, headerWithFullWidthBottomBorder, pageUrls }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <TopBanner />
      <div className="relative flex min-h-screen flex-col">
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          fullWidthBottomBorder={headerWithFullWidthBottomBorder}
          pageUrls={pageUrls}
          onBurgerClick={handleHeaderBurgerClick}
        />
        <main className="flex-grow">{children}</main>
        <Footer pageUrls={pageUrls} />
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerWithFullWidthBottomBorder: PropTypes.bool,
  lang: PropTypes.string,
  pageUrls: PropTypes.object,
};

Layout.defaultProps = {
  headerWithFullWidthBottomBorder: false,
  lang: 'en',
  pageUrls: null,
};

export default Layout;
