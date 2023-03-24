import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/lazy';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowIcon from 'icons/arrow.inline.svg';

import 'swiper/css';
import 'swiper/css/navigation';

const Video = ({ videoId, isCurrent, setCurrentVideo, isWrapperInView }) => {
  const [isSSR, setIsSSR] = useState(false);
  const onPlay = () => {
    setCurrentVideo(videoId);
  };
  useEffect(() => {
    setIsSSR(true);
  }, []);

  const handleClick = () => {
    setCurrentVideo(videoId);
  };

  return (
    <div className="relative h-0 overflow-hidden pb-[56.25%]">
      <img
        className="w-full"
        src={`data:image/svg+xml;charset=utf-8,%3Csvg width='592' height='333' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`}
        alt=""
        width={592}
        height={333}
        aria-hidden
      />
      {isWrapperInView && isSSR && (
        <ReactPlayer
          className="youtube-video absolute top-0 left-0 h-full w-full rounded-2xl"
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="100%"
          playing={isCurrent}
          controls
          onPlay={onPlay}
        />
      )}
      <button
        type="button"
        aria-label="Play video"
        className={clsx(
          'absolute top-0 left-0 h-full w-full',
          isCurrent ? 'pointer-events-none' : 'pointer-events-auto'
        )}
        onClick={handleClick}
      />
    </div>
  );
};

const VideoGallery = ({ title, items, className }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [wrapperRef, isWrapperInView] = useInView({ rootMargin: '500px' });
  return (
    <section
      className={clsx('community safe-paddings mt-36 mb-40 lg:my-28 md:my-24', className)}
      ref={wrapperRef}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="heading-8xl font-semibold leading-dense">{title}</h2>
          <div className="space-x-5 md:hidden">
            <button
              className="prev hover:btn-black-hover rounded bg-black py-[17px] px-3.5 transition-[background] duration-200 lg:px-3 lg:py-[15px]"
              type="button"
              aria-label="Previous"
            >
              <ArrowIcon className="h-auto w-[18px] rotate-180" />
            </button>
            <button
              className="next hover:btn-black-hover rounded bg-black py-[17px] px-3.5 transition-[background] duration-200 lg:px-3 lg:py-[15px]"
              type="button"
              aria-label="Next"
            >
              <ArrowIcon className="h-auto w-[18px]" />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={32}
        className="w-full select-none"
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 'auto',
            spaceBetween: 28,
          },
        }}
      >
        {items.map(({ videoId, title, speaker, date }) => {
          const isCurrent = currentVideo === videoId;

          return (
            <SwiperSlide className="mt-14 lg:mt-10 sm:mt-[30px]" key={videoId}>
              <Video
                videoId={videoId}
                isCurrent={isCurrent}
                setCurrentVideo={setCurrentVideo}
                isWrapperInView={isWrapperInView}
              />
              <h3 className="mt-4 font-sans text-xl font-semibold leading-tight lg:text-lg">
                {title}
              </h3>
              <span className="mt-2 inline-flex space-x-4 text-sm opacity-50 lg:text-sm">
                <span>{speaker}</span>
                <span className="relative before:absolute before:top-1/2 before:-left-2.5 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-90">
                  {date}
                </span>
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

Video.propTypes = {
  videoId: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  setCurrentVideo: PropTypes.func.isRequired,
  isWrapperInView: PropTypes.bool.isRequired,
};

VideoGallery.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      videoId: PropTypes.string,
      title: PropTypes.string,
      speaker: PropTypes.string,
      date: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

VideoGallery.defaultProps = {
  className: null,
};

export default VideoGallery;
