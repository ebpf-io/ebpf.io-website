import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import slugify from "slugify";

import Layout from "../layouts";
import PostCard from "../common/blog-post/PostCard";

import "../stylesheets/blog.scss";

const NavLink = (props) => <Link to={props.url}>{props.text}</Link>;

export default function NewsIndex({ data, pageContext }) {
  const { group, index, first, last } = pageContext;
  const prevUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const pageMetaTitle = "eBPF - Blog";
  const pageMetaDescription =
    "The latest news, updates and articles covering eBPF and related topics.";
  const pageMetaImageUrl = "https://ebpf.io" + "/images/ogimage-blog.png";
  const uniqueCategories = [...new Set(group.map(item => item.node.frontmatter.categories[0]))];
  const featuredPost = group.find((post) => post.node.frontmatter.isFeatured === true)?.node;

  return (
    <Layout>
      <div className="blog">
        <div className='blog-posts'>
          <Helmet
            title={pageMetaTitle}
            meta={[
              { name: "keywords", content: "ebpf, bpf, news, updates, blog" },
              { name: "type", property: "og:type", content: "website" },
              {
                name: "url",
                property: "og:url",
                content: "https://ebpf.io/blog",
              },
              { name: "title", property: "og:title", content: pageMetaTitle },
              {
                name: "description",
                property: "og:description",
                content: pageMetaDescription,
              },
              { name: "description", content: pageMetaDescription },
              { name: "image", property: "og:image", content: pageMetaImageUrl },
              { name: "twitter:card", content: "summary_large_image" },
              { name: "twitter:url", content: "https://ebpf.io/blog" },
              { name: "twitter:title", content: pageMetaTitle },
              { name: "twitter:description", content: pageMetaDescription },
              { name: "twitter:image", content: pageMetaImageUrl },
            ]}
          >
            <link
              rel='alternate'
              type='application/rss+xml'
              title='RSS Feed'
              href='/blog/rss.xml'
            />
          </Helmet>

          <div className="categories-wrapper">
            <h2 className="categories-heading">Categories</h2>
            <ul className="categories-item-list">
              <li className='categories-item'>
                <a className="categories-link" href='/blog/'>
                  All posts
                </a>
              </li>
                {uniqueCategories.map(
                  (category, _) =>
                    category !== "_" && (
                      <li className='categories-item' key={category}>
                        <a className="categories-link" href={`/blog/categories/${slugify(category, {lower: true})}`}>
                          {category}
                        </a>
                      </li>
                    )
                )}
            </ul>
          </div>

          <div className="posts-wrapper">
          {featuredPost && 
          (<>
            <h2 className="posts-heading">Featured</h2>
            <PostCard post={featuredPost}/>
          </>)}

          <h2 className="posts-heading">Latest</h2>
          {group.filter((post) => post.node.frontmatter.isFeatured !== true).map(({ node: post }) => (
            <PostCard key={post.id} post={post} />
          ))}
          {/* TODO: add pagination */}
            {/* <div className='prev-next-links blog-post'>
              <div className='prev-link'>
                {!first && (
                  <NavLink url={`/blog/${prevUrl}`} text='« Newer Posts' />
                )}
              </div>
              <div className='next-link'>
                {!last && <NavLink url={`/blog/${nextUrl}`} text='Older Posts »' />}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      totalCount
    }
  }
`;
