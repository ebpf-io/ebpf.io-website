import React from 'react';

import Link from 'components/shared/link';
import LinkedInIcon from 'icons/linkedin.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';
import Logo from 'images/logo.inline.svg';

const SummitFooter = () => (
  <footer className="py-8 lg:py-6 md:py-4" aria-labelledby="footerHeading">
    <div className="container flex items-center justify-between sm:flex-col sm:gap-y-4">
      <Link to="https://ebpf.io/">
        <Logo className="h-8 w-auto" />
      </Link>

      <Link
        className="font-bold text-black transition-colors duration-200 hover:text-primary-orange"
        to="https://docs.google.com/document/u/0/d/1pmplQdjghadioJVHaGS5X6KrecbYLWVA2VgVz0BzG9E/edit"
        target="_blank"
        rel="noopener noreferrer"
      >
        Code of Conduct
      </Link>
      <div className="flex items-center space-x-6 md:space-x-3">
        <Link
          className="hover:text-primary-5 text-black transition-colors duration-200"
          to="http://twitter.com/ebpfsummit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="h-6 w-auto" />
        </Link>
        <Link
          className="hover:text-primary-5 text-black transition-colors duration-200"
          to="http://linkedin.com/company/ebpf-summit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="h-6 w-auto" />
        </Link>
      </div>
    </div>
  </footer>
);

export default SummitFooter;
