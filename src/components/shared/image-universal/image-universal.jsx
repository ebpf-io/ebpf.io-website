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
  gatsbyClassName,
  gatsbyImgClassName,
  svgClassName,
  bgColor,
  ...otherProps
}) => {
  if (imageSrc?.childImageSharp) {
    return (
      <GatsbyImage
        className={gatsbyClassName}
        imgClassName={gatsbyImgClassName}
        image={getImage(imageSrc)}
        width={width}
        height={height}
        objectFit="contain"
        layout="fullWidth"
        backgroundColor={bgColor}
        alt={alt}
        {...otherProps}
        loading="lazy"
      />
    );
  }

  return (
    <img
      className={svgClassName}
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      {...otherProps}
      loading="lazy"
    />
  );
};

ImageUniversal.propTypes = {
  imageSrc: PropTypes.shape({
    childImageSharp: PropTypes.object,
  }),
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  gatsbyClassName: PropTypes.string,
  gatsbyImgClassName: PropTypes.string,
  svgClassName: PropTypes.string,
  bgColor: PropTypes.string,
};

ImageUniversal.defaultProps = {
  imageSrc: null,
  imageUrl: null,
  width: null,
  height: null,
  alt: '',
  gatsbyClassName: null,
  gatsbyImgClassName: null,
  svgClassName: null,
  bgColor: null,
};

export default ImageUniversal;
