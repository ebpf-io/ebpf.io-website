import { useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button';
import Label from 'components/shared/label';
import VideoPlayer from 'components/shared/video-player';

const Film = () => {
  const { t } = useTranslation();
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
            videoId={t('film.videoId')}
            isWrapperInView={isWrapperInView}
            isCurrent={isPlaing}
            setCurrentVideo={() => setIsPlaing(true)}
          />
        </div>
        <div className="col-span-6 self-center pl-14 lg:pl-9 md:pl-8 sm:col-span-full sm:self-start sm:pl-0">
          <Label theme="blue">{t('film.label')}</Label>
          <h2 className="heading-9xl mt-3 font-semibold leading-none md:mt-2.5 sm:leading-dense">
            {t('film.title')}
          </h2>
          <p className="mt-[18px] max-w-lg text-xl font-light lg:text-lg md:mt-3 md:text-base">
            {t('film.description')}
          </p>
          <Button
            className="mt-10 px-9 tracking-wide lg:mt-8 md:mt-6"
            to={t('film.buttonUrl')}
            theme="primary-yellow-filled"
            size="md"
            target="_blank"
          >
            {t('film.buttonText')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Film;
