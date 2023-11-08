import clsx from 'clsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const VideoPlayer = ({ videoId, isCurrent, setCurrentVideo, isWrapperInView }) => {
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
          className="youtube-video absolute left-0 top-0 h-full w-full rounded-2xl"
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
          'absolute left-0 top-0 h-full w-full',
          isCurrent ? 'pointer-events-none' : 'pointer-events-auto'
        )}
        onClick={handleClick}
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  setCurrentVideo: PropTypes.func.isRequired,
  isWrapperInView: PropTypes.bool.isRequired,
};

export default VideoPlayer;
