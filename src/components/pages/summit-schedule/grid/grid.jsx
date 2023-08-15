import React, { useCallback, useState, useEffect } from 'react';

import DangerousHtml from 'components/shared/dangerous-html';

const Grid = () => {
  const [scheduleHTML, setScheduleHTML] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchScheduleData = async (cb) => {
    setIsLoading(true);
    try {
      const res = await fetch(process.env.GATSBY_SESSIONIZE_URL);
      const data = await res.text();
      cb(data);
    } catch (e) {
      // eslint-disable-next-line
      console.warn('Can not fetch the schedule:', { e });
    } finally {
      setIsLoading(false);
    }
  };

  const modifySessionizeScript = useCallback((html) => {
    // this requires for the sessionize logic to run
    // consistently
    const htmlWithModifiedScriptAndReplacedAmpersand = html
      .replace(/(showLocalTimezone = true;)([\s\S]+)$/m, '$1sessionize.onLoad();$2')
      .replace(/&amp;/g, '&');
    setScheduleHTML(htmlWithModifiedScriptAndReplacedAmpersand);
  }, []);

  useEffect(() => {
    if (process.env.GATSBY_SESSIONIZE_URL) {
      fetchScheduleData(modifySessionizeScript);
    }
  }, [modifySessionizeScript]);

  if (isLoading) {
    return (
      <div className="my-20 flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-gray-80" />
      </div>
    );
  }

  if (!isLoading) {
    return (
      <section className="safe-paddings py-24 md:py-20">
        <div className="container item-center flex flex-col" id="schedule">
          <h2 className="mx-auto w-fit text-10xl font-bold leading-tight lg:text-9xl sm:text-7xl">
            Schedule
          </h2>
          {scheduleHTML ? <DangerousHtml className="mt-6" html={scheduleHTML} /> : null}
        </div>
      </section>
    );
  }

  return null;
};

export default Grid;
