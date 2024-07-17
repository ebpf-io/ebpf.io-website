/* eslint-disable react/prop-types */
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';

const NotFoundPage = () => (
  <Layout>
    <section className="safe-paddings py-16">
      <div className="container flex flex-col items-center pb-16 pt-4 sm:py-0">
        <div className="flex justify-center">
          <StaticImage
            className="sm:max-w-[240px] xs:max-w-[60vw]"
            width={292}
            height={280}
            src="../../static/images/ebpf-404.png"
            loading="eager"
            alt="Hero illustration"
          />
        </div>
        <h1 className="mt-7 text-center text-10xl font-semibold leading-tight sm:mt-5 sm:text-9xl xs:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-center text-base leading-normal sm:mt-3.5 xs:mt-2.5">
          Sorry, but the page you are looking for could not be found
        </p>

        <Button className="mt-7 !px-14 sm:mt-5" size="md" theme="primary-yellow-filled" to="/">
          Home Page
        </Button>
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

export const query = graphql`
  query {
    locales: allLocale(filter: { ns: { in: ["shared"] } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
