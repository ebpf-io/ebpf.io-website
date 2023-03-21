import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

// This component supports png jpg (GatsbyImage) and svg format (img)
const ImageUniversal = ({
  imageSrc,
  imageUrl,
  alt,
  width,
  height,
  className,
  gatsbyImageClassName,
  imgClassName,
  svgClassName,
}) => (
  <div className={className}>
    {imageSrc?.childImageSharp ? (
      <GatsbyImage
        className={clsx('h-full w-full', gatsbyImageClassName)}
        imgClassName={imgClassName}
        image={getImage(imageSrc)}
        width={width}
        height={height}
        objectFit="cover"
        alt={alt}
      />
    ) : (
      <img className={clsx('h-full w-full object-cover', svgClassName)} src={imageUrl} alt={alt} />
    )}
  </div>
);

ImageUniversal.propTypes = {
  imageSrc: PropTypes.shape({
    childImageSharp: PropTypes.object,
  }),
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  gatsbyImageClassName: PropTypes.string,
  imgClassName: PropTypes.string,
  svgClassName: PropTypes.string,
};

ImageUniversal.defaultProps = {
  imageSrc: null,
  imageUrl: null,
  width: null,
  height: null,
  alt: '',
  className: null,
  gatsbyImageClassName: null,
  imgClassName: null,
  svgClassName: null,
};

export default ImageUniversal;
