/* eslint-disable react/prop-types */
import React from 'react';

import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SubscriptionForm from 'components/shared/subscription-form';

const EventsPage = ({ pageContext: { postLabs, totalCount, allCategories } }) => {
  console.log('postLabs', postLabs);
  console.log('totalCount', totalCount);
  console.log('allCategories', allCategories);
  return (
    <Layout>
      <div className="container flex flex-col pt-20 lg:pt-16">
        <h1 className="heading-9xl mx-auto max-w-[890px] text-center font-semibold leading-tight">
          Dig into the eBPF with our interactive labs
        </h1>
      </div>
      <SubscriptionForm size="lg" />
    </Layout>
  );
};

export default EventsPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
