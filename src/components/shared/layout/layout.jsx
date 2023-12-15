import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import MobileMenu from 'components/shared/mobile-menu';
import TopBanner from 'components/shared/top-banner';
import footerMenu from 'data/shared/footer-menu';
import headerMenu from 'data/shared/header-menu';

import { defaultLanguage } from '../../../../config/languages';

const translateMenuItem = (menuItem, language) => ({
  ...menuItem,
  title: menuItem.title ? menuItem.title[language] || menuItem.title : menuItem.title,
  to: menuItem.to ? menuItem.to[language] || menuItem.to : menuItem.to,
  items: menuItem.items
    ? menuItem.items.map((subItem) => translateMenuItem(subItem, language))
    : undefined,
});

const Layout = ({ children, headerWithFullWidthBottomBorder, lang, pageUrls }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const headerMenuItems = headerMenu.map((item) => translateMenuItem(item, lang));
  const footerMenuItems = footerMenu.map((item) => translateMenuItem(item, lang));

  return (
    <>
      <TopBanner />
      <div className="relative flex min-h-screen flex-col overflow-y-hidden">
        <Header
          items={headerMenuItems}
          isMobileMenuOpen={isMobileMenuOpen}
          fullWidthBottomBorder={headerWithFullWidthBottomBorder}
          lang={lang}
          pageUrls={pageUrls}
          onBurgerClick={handleHeaderBurgerClick}
        />
        <main className="flex-grow">{children}</main>
        <Footer items={footerMenuItems} lang={lang} pageUrls={pageUrls} />
        <MobileMenu isOpen={isMobileMenuOpen} items={headerMenuItems} />
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
  lang: defaultLanguage,
  pageUrls: null,
};

export default Layout;
