// Gatsby has dotenv by default
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const wrapESMPlugin = (name) =>
  function wrapESM(opts) {
    return async (...args) => {
      const mod = await import(name);
      const plugin = mod.default(opts);
      return plugin(...args);
    };
  };

module.exports = {
  flags: { DEV_SSR: process.env.GATSBY_DEV_SSR || false },
  siteMetadata: {
    siteTitle: 'eBPF - Introduction, Tutorials & Community Resources',
    siteDescription:
      'eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.',
    siteImage: '/images/social-preview.jpg',
    siteLanguage: 'en',
    siteUrl: process.env.GATSBY_DEFAULT_SITE_URL || 'http://localhost:8000',
    authorName: 'Pixel Point',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'static-pages',
        path: `${__dirname}/content/static-pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blog-posts',
        path: `${__dirname}/content/blog-posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'events',
        path: `${__dirname}/content/events/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'contributors',
        path: `${__dirname}/content/contributors/`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 85,
          placeholder: 'none',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        mdxOptions: {
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            // eslint-disable-next-line global-require
            require('remark-gfm'),
          ],
          rehypePlugins: [wrapESMPlugin('rehype-slug')],
        },
        gatsbyRemarkPlugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              quality: 85,
              withWebp: true,
              backgroundColor: 'white',
              disableBgImageOnAlpha: true,
            },
          },
          {
            resolve: 'gatsby-remark-video',
            options: {
              width: 860,
              height: 'auto',
              preload: 'auto',
              controls: true,
            },
          },
          'gatsby-remark-responsive-iframe',
        ],
      },
    },
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-svgo',
      options: {
        inlineSvgOptions: [
          {
            test: /\.inline.svg$/,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                'prefixIds',
                'removeDimensions',
              ],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/fonts/*': ['Cache-Control: public, max-age=31536000, immutable'],
        },
      },
    },
    'gatsby-alias-imports',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.nodes.map(({ frontmatter, fields: { html } }) => {
                const { path, date, externalUrl, description } = frontmatter;
                const url = externalUrl || site.siteMetadata.siteUrl + path;
                return {
                  ...frontmatter,
                  description,
                  date,
                  url,
                  guid: url,
                  custom_elements: [{ 'content:encoded': html }],
                };
              }),
            query: `
              {
                allMdx(
                  filter: {
                    internal: { contentFilePath: { regex: "/content/blog-posts/((?!README).)*$/" } }
                    fields: { isDraft: { in: false } }
                  }
                  limit: 20
                  sort: { frontmatter: { date: DESC } }
                ) {
                  nodes {
                    fields {
                      html
                    }
                    frontmatter {
                      title
                      description
                      date
                      externalUrl
                      path
                    }
                  }
                }
              }
            `,
            output: '/blog/rss.xml',
            title: 'eBPF - The latest news, updates and articles covering eBPF and related topics.',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: process.env.GATSBY_DEFAULT_SITE_URL,
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-Z8DWSQN6XQ'],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
