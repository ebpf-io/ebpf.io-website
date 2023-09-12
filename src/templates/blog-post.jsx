/* eslint-disable react/prop-types */

import clsx from 'clsx';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import React from 'react';

import PostAuthor from 'components/pages/blog-post/post-author';
import SocialShare from 'components/pages/blog-post/social-share';
import TableOfContents from 'components/pages/blog-post/table-of-contents';
import Content from 'components/shared/content';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import SubscriptionForm from 'components/shared/subscription-form';
import postAuthors from 'data/shared/post-authors';

const BlogPost = ({
  data: {
    mdx: {
      frontmatter: { title, description, date, toc, path },
      fields: { author },
      tableOfContents,
    },
  },
  children,
}) => {
  const socialShareUrl = process.env.GATSBY_DEFAULT_SITE_URL + path;
  const showTableOfContents = toc && tableOfContents?.items.length > 0;

  return (
    <Layout>
      <article className="safe-paddings mb-36 mt-16 xl:mb-32 lg:mb-28 md:mb-20 md:mt-14">
        <div className="container grid-gap-x grid grid-cols-12">
          <div className="col-span-8 md:col-span-full">
            <h1 className="heading-8xl font-semibold leading-tight">{title}</h1>
            <div className="mt-6 inline-flex items-center text-sm leading-none">
              {author && (
                <span className="inline-flex items-center pr-3">
                  {postAuthors[author]?.photo && (
                    <img
                      className="mr-3 rounded-full"
                      src={postAuthors[author]?.photo}
                      alt={postAuthors[author]?.name}
                      width={36}
                      height={36}
                      loading="eager"
                    />
                  )}
                  <span className="font-medium">{postAuthors[author]?.name || author}</span>
                </span>
              )}
              <time
                className={clsx({
                  'border-l border-gray-90 pl-3': postAuthors[author]?.name || author,
                })}
              >
                {date}
              </time>
            </div>
          </div>
        </div>
        <div className="container grid-gap-x grid grid-cols-12 md:grid-cols-1">
          {showTableOfContents && (
            <TableOfContents
              className="hidden md:col-span-full md:mt-6 md:block"
              items={tableOfContents.items}
            />
          )}
          <Content
            className="prose-blog col-span-8 mt-8 md:col-span-full md:mt-4"
            content={children}
          />
          <aside className="col-start-10 col-end-13 mt-8 md:col-span-full md:hidden">
            <div className="sticky bottom-10 top-10 max-h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden ">
              {showTableOfContents && <TableOfContents items={tableOfContents.items} />}
              <SocialShare
                className={clsx({ 'mt-9': showTableOfContents })}
                url={socialShareUrl}
                excerpt={description}
                title={title}
              />
            </div>
          </aside>
          <SocialShare
            className="hidden border-dashed border-gray-80 md:mt-4 md:flex md:items-center md:space-x-4 md:border-t md:pt-8 sm:flex-col sm:space-x-0 sm:space-y-3"
            url={socialShareUrl}
            excerpt={description}
            title={title}
          />
          {author && postAuthors[author]?.bio && (
            <PostAuthor className="col-span-8 md:col-span-full" author={author} />
          )}
          <SubscriptionForm
            className="col-span-full mt-28 lg:mt-24 md:mt-20 sm:mt-16"
            title="Subscribe"
            afterTitle="to bi-weekly eCHO News"
            description="Keep up on the latest news and information from the eBPF and Cilium"
            placeholder="Email address..."
            buttonTitle="Subscribe"
            size="md"
          />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;

export const Head = ({
  data: {
    mdx: {
      frontmatter: { title, path, description, ogImage },
    },
  },
}) => {
  const imageSrc = getSrc(ogImage?.childImageSharp);

  return <SEO title={title} pathname={path} description={description} image={imageSrc} />;
};

export const query = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD MMM, YYYY")
        categories
        description
        toc
        path
        ogImage {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 630, formats: JPG)
          }
        }
      }
      fields {
        author
      }
      tableOfContents(maxDepth: 3)
    }
  }
`;
