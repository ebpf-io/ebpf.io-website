import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactModal from 'react-modal';

import Link from 'components/shared/link';
import CloseIcon from 'icons/close.inline.svg';
import LinkedInIcon from 'icons/linkedin.inline.svg';
import TwitterIcon from 'icons/twitter.inline.svg';

const icons = {
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon,
};

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 25, 40, 0.6)',
    zIndex: '30',
  },
};

const Modal = ({
  className,
  isOpen,
  closeModal,
  fullName,
  tagLine,
  profilePicture,
  bio,
  links,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      contentLabel={null}
      ariaHideApp={false}
      bodyOpenClassName="overflow-hidden touch-none"
      className={clsx(
        'border-gray-2 scrollbar-hidden relative left-1/2 top-1/2 z-50 max-h-[90%] w-[95%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-lg border border-gray-90 bg-white p-8 md:py-5',
        className
      )}
      closeTimeoutMS={200}
      shouldCloseOnOverlayClick
      onRequestClose={closeModal}
    >
      <CloseIcon className="absolute right-5 top-4 h-4 w-4" role="button" onClick={closeModal} />
      <div className="flex h-full w-full flex-col">
        <div className="flex w-full sm:mt-5">
          <img
            className={clsx('h-20 w-20 flex-shrink-0 rounded-full', isLoaded ? '' : 'hidden')}
            src={profilePicture}
            alt={fullName}
            width={80}
            height={80}
            loading="eager"
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && (
            <div className="h-20 w-20 flex-shrink-0 animate-pulse rounded-full bg-gray-96" />
          )}
          <div className="flex flex-col pl-5">
            <h2 className="text-5xl font-bold leading-tight lg:text-4xl md:text-xl">{fullName}</h2>
            {tagLine && (
              <span className="mt-2.5 text-base font-medium leading-none">{tagLine}</span>
            )}
            {links?.length > 0 && (
              <div className="mt-5 flex gap-x-4">
                {links.map(({ title, url }, index) => {
                  const Icon = icons[title];
                  if (!Icon) return null;
                  return (
                    <Link to={url} target="_blank" rel="noopener noreferrer" key={index}>
                      <Icon className="h-5 w-5 text-primary-orange" />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <p className="mt-5 text-lg leading-normal md:text-base">{bio}</p>
      </div>
    </ReactModal>
  );
};
Modal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  fullName: PropTypes.string,
  tagLine: PropTypes.string,
  profilePicture: PropTypes.string,
  bio: PropTypes.string,
  links: PropTypes.array,
};

Modal.defaultProps = {
  className: null,
  tagLine: null,
  profilePicture: null,
  bio: null,
  links: null,
  fullName: null,
};

export default Modal;
