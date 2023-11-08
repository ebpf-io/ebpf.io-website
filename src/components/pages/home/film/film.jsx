import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button';
import Label from 'components/shared/label';
import VideoPlayer from 'components/shared/video-player';

const Film = ({ label, title, description, videoId, buttonText }) => {
  const [wrapperRef, isWrapperInView] = useInView({ rootMargin: '500px' });
  const [isPlaing, setIsPlaing] = useState(false);

  useEffect(() => {
    if (!isWrapperInView) {
      setIsPlaing(false);
    }
  }, [isWrapperInView]);

  return (
    <section className="film safe-paddings mt-36 lg:mt-24 md:mt-20" ref={wrapperRef}>
      <div className="container grid grid-cols-12 gap-5 sm:flex sm:flex-col-reverse sm:gap-10">
        <div className="col-span-6 self-center sm:col-span-full sm:w-full">
          <VideoPlayer
            videoId={videoId}
            isWrapperInView={isWrapperInView}
            isCurrent={isPlaing}
            setCurrentVideo={() => setIsPlaing(true)}
          />
        </div>
        <div className="col-span-6 self-center pl-14 lg:pl-9 md:pl-8 sm:col-span-full sm:self-start sm:pl-0">
          <Label theme="blue">{label}</Label>
          <h2 className="heading-9xl mt-3 font-semibold leading-none md:mt-2.5 sm:leading-dense">
            {title}
          </h2>
          <p className="mt-[18px] max-w-lg text-xl font-light lg:text-lg md:mt-3 md:text-base">
            {description}
          </p>
          <Button
            className="mt-10 w-[175px] tracking-wide lg:mt-8 md:mt-6"
            to={`https://www.youtube.com/watch?v=${videoId}`}
            theme="primary-yellow-filled"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

Film.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Film;
