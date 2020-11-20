const parseHtml = require("./scripts/parse-html");

module.exports = {
  siteMetadata: {
    title: `eBPF`,
    description: "eBPF is a revolutionary technology that can run sandboxed programs in the Linux kernel without changing kernel source code or loading a kernel module.",
    siteUrl: "https://www.ebpf.io"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-catch-links",
    "gatsby-plugin-netlify",
    "gatsby-plugin-nprogress",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        base64Width: 20,
        forceBase64Format: `png`,
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96283704-3",
        head: false
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-autolink-headers",
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-"
            }
          },
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700
            }
          },
          `gatsby-remark-responsive-iframe`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const { hasPreview, previewHtml, mainHtml } = parseHtml(
                  edge.node
                );
                return Object.assign({}, edge.node.frontmatter, {
                  description: previewHtml,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": mainHtml }]
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      html
                      id
                      frontmatter {
                        categories
                        date
                        path
                        title
                        tags
                      }
                    }
                  }
                }
              }
            `,
            output: "/news/rss.xml",
            title: "eBPF.io / News"
          }
        ]
      }
    }
  ]
};
