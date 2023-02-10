/* eslint-disable react/prop-types */
import React from 'react';

import Layout from 'components/shared/layout';
import Link from 'components/shared/link';
import SEO from 'components/shared/seo';

// TODO: Add colors and font sizes, check out the reference — https://tailwindui.com/components/marketing/feedback/404-pages#component-5792f8fd3c3c2be236e72c170345a0ce
//       No need to change anything else. Only colors and font sizes
const NotFoundPage = () => (
  <Layout>
    <section className="safe-paddings py-16 sm:py-32">
      <div className="container">
        <p className="font-semibold uppercase">404 error</p>
        <h1>Page not found</h1>
        <p className="mt-2">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-6">
          <Link to="/">Go back home</Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;

export const Head = ({ location: { pathname } }) => (
  <SEO
    title="Page not found"
    description="Sorry, we couldn’t find the page you’re looking for"
    pathname={pathname}
  />
);
