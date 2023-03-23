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
}) => {
  if (imageSrc?.childImageSharp) {
    return (
      <GatsbyImage
        className={gatsbyClassName}
        imgClassName={gatsbyImgClassName}
        image={getImage(imageSrc)}
        width={width}
        height={height}
        objectFit="cover"
        layout="fullWidth"
        backgroundColor="#F6F6F9"
        alt={alt}
      />
    );
  }

  return <img className={svgClassName} src={imageUrl} alt={alt} />;
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
};

export default ImageUniversal;
