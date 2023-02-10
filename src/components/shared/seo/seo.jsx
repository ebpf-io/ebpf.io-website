/* eslint-disable react/prop-types */
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const SEO = ({ title, description, pathname, keywords, image }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDescription, siteUrl, siteImage },
    },
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteUrl
          siteImage
        }
      }
    }
  `);

  const currentTitle = title || siteTitle;
  const currentDescription = description || siteDescription;
  const currentUrl = pathname !== '/' ? `${siteUrl}${pathname}` : siteUrl;
  const currentImage = image || siteImage;
  return (
    <>
      <title key={currentTitle}>{currentTitle}</title>
      {/* General */}
      <meta name="description" content={currentDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {/* Open Graph */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={siteUrl + currentImage} />
      <meta property="og:type" content="website" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default SEO;
