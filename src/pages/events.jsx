/* eslint-disable react/prop-types */
import React from 'react';

import Card from 'components/pages/events/card';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SubscriptionForm from 'components/shared/subscription-form';

const cardData = {
  type: 'Meetup',
  title: 'A max two lines header lorem ipsum dolor there are many',
  description: 'There are many variations of passages of Lorem Ipsum available, but the majority',
  date: 'Decemer, 10',
  place: 'Hamburg, Germany',
  linkUrl: 'https://www.google.com/',
};

const HomePage = () => (
  <Layout>
    <div className="container grid-gap grid grid-cols-12">
      <Card {...cardData} className="col-span-4" />
    </div>
    <div className="container mt-28 md:mt-20 sm:mt-12">
      <SubscriptionForm size="lg" />
    </div>
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
