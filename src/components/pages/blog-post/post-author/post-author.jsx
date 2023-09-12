import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import postAuthors from 'data/shared/post-authors';

import TwitterIcon from './images/twitter.inline.svg';

const PostAuthor = ({ className, author }) => {
  const { name, photo, twitterUrl, bio } = postAuthors[author];
  return (
    <figure
      className={clsx(
        className,
        'mt-20 flex items-start space-x-8 border-y border-dashed border-gray-80 py-9 lg:mt-16 md:mt-12 sm:mt-8 sm:flex-col sm:space-x-0 sm:space-y-4'
      )}
    >
      <img
        className="rounded-full sm:h-20 sm:w-20"
        src={photo}
        alt={name}
        width={112}
        height={112}
        loading="lazy"
      />
      <div>
        <div className="inline-flex items-center">
          <h3 className="font-sans text-3xl font-semibold leading-tight md:text-2xl">{name}</h3>
          {twitterUrl && (
            <Link
              to={twitterUrl}
              className="ml-2.5 mt-1 inline-flex items-center hover:text-gray-30"
            >
              <TwitterIcon className="h-auto w-[18px]" />
              <span className="sr-only">Twitter</span>
            </Link>
          )}
        </div>
        <p className="mt-3 text-lg md:text-base">{bio}</p>
      </div>
    </figure>
  );
};

PostAuthor.propTypes = {
  className: PropTypes.string,
  author: PropTypes.string.isRequired,
};

PostAuthor.defaultProps = {
  className: null,
};

export default PostAuthor;
