/* eslint-disable react/prop-types */
import clsx from 'clsx';
import React from 'react';

import BlogPosts from 'components/pages/get-started/blog-posts';
import Books from 'components/pages/get-started/books';
import Contributors from 'components/pages/get-started/contributors';
import Documentation from 'components/pages/get-started/documentation/documentation';
import Events from 'components/pages/get-started/events';
import Hero from 'components/pages/get-started/hero';
import Tutorials from 'components/pages/get-started/tutorials';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SubscriptionForm from 'components/shared/subscription-form';
import VideoGallery from 'components/shared/video-gallery';
import videoItems from 'data/get-started/video-data';

const GetStartedPage = ({ pageContext: { events, blogPosts, contributors } }) => {
  const hasContributors = contributors.length;

  return (
    <Layout>
      <Hero />
      <Documentation />
      <div className="container mt-28 md:mt-20 sm:mt-12">
        <SubscriptionForm size="lg" />
      </div>
      <Books />
      <Tutorials />
      <Events items={events.map(({ frontmatter }) => ({ ...frontmatter }))} />
      <VideoGallery
        className="mt-32 lg:mt-24 md:mt-16 sm:mt-14"
        items={videoItems}
        title="eBPF introductory videos"
      />
      <BlogPosts
        className={clsx(!hasContributors && 'mb-36 xl:mb-32 lg:mb-28 md:mb-20')}
        items={blogPosts.map(({ frontmatter }) => ({
          ...frontmatter,
          linkUrl: frontmatter.path || frontmatter.externalUrl,
          type: frontmatter.categories[0],
        }))}
      />
      {hasContributors && (
        <Contributors
          className="mb-36 xl:mb-32 lg:mb-28 md:mb-20"
          items={contributors.map(({ frontmatter }) => ({ ...frontmatter }))}
        />
      )}
    </Layout>
  );
};

export default GetStartedPage;

export const Head = ({ location: { pathname } }) => <SEO pathname={pathname} />;
