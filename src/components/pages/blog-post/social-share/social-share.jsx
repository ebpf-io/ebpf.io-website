import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

import FacebookIcon from './images/facebook.inline.svg';
import LinkedinIcon from './images/linkedin.inline.svg';
import TwitterIcon from './images/twitter.inline.svg';

const SocialShare = ({ className, title, url, excerpt }) => (
  <div className={clsx(className)}>
    <h3 className="text-[15px] font-semibold leading-snug">Share on social media:</h3>
    <div className="mt-4 flex space-x-4 md:mt-0">
      <TwitterShareButton className="group" url={url} title={title} via="ebpf">
        <TwitterIcon className="h-8 w-8 [&_circle]:transition-colors [&_circle]:duration-200 group-hover:[&_circle]:stroke-black" />
      </TwitterShareButton>
      <LinkedinShareButton className="group" url={url} title={title} summary={excerpt}>
        <LinkedinIcon className="h-8 w-8 [&_circle]:transition-colors [&_circle]:duration-200 group-hover:[&_circle]:stroke-black" />
      </LinkedinShareButton>
      <FacebookShareButton className="group" url={url}>
        <FacebookIcon className="h-8 w-8 [&_circle]:transition-colors [&_circle]:duration-200 group-hover:[&_circle]:stroke-black" />
      </FacebookShareButton>
    </div>
  </div>
);

SocialShare.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

SocialShare.defaultProps = {
  className: null,
};

export default SocialShare;
