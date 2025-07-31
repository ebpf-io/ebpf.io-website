import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import VideoPlayer from 'components/shared/video-player/';
import ArrowIcon from 'icons/arrow.inline.svg';

import 'swiper/css';
import 'swiper/css/navigation';

const VideoGallery = ({ title, items, className }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [sortedItems, setSortedItems] = useState([]);
  const [wrapperRef, isWrapperInView] = useInView({ rootMargin: '500px' });

  useEffect(() => {
    const sortedArray = [...items].sort(
      (a, b) => new Date(b.date.trim()) - new Date(a.date.trim())
    );
    setSortedItems(sortedArray);
  }, [items]);

  return (
    <section
      className={clsx('community safe-paddings mb-40 mt-36 lg:my-28 md:my-24', className)}
      ref={wrapperRef}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="heading-8xl font-semibold leading-dense">{title}</h2>
          <div className="space-x-5 md:hidden">
            <button
              className="prev hover:btn-black-hover rounded bg-black px-3.5 py-[17px] transition-[background] duration-200 lg:px-3 lg:py-[15px]"
              type="button"
              aria-label="Previous"
            >
              <ArrowIcon className="h-auto w-[18px] rotate-180" />
            </button>
            <button
              className="next hover:btn-black-hover rounded bg-black px-3.5 py-[17px] transition-[background] duration-200 lg:px-3 lg:py-[15px]"
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
          560: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 'auto',
            spaceBetween: 28,
          },
        }}
      >
        {sortedItems.map(({ videoId, title, speaker, date }) => {
          const isCurrent = currentVideo === videoId;

          return (
            <SwiperSlide className="mt-14 lg:mt-10 sm:mt-[30px]" key={videoId}>
              <VideoPlayer
                videoId={videoId}
                isCurrent={isCurrent}
                setCurrentVideo={setCurrentVideo}
                isWrapperInView={isWrapperInView}
              />
              <h3 className="mt-4 font-sans text-xl font-semibold leading-tight lg:text-lg">
                {title}
              </h3>
              <span className="mt-2 inline-flex space-x-4 text-sm lg:text-sm">
                <span>{speaker}</span>
                <span className="relative before:absolute before:-left-2.5 before:top-1/2 before:block before:h-1 before:w-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-90">
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
