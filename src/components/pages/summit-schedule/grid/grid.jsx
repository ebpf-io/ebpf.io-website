import React, { useCallback, useState, useEffect } from 'react';

import DangerousHtml from 'components/shared/dangerous-html';
import endpoints from 'data/shared/sessionize';

const Grid = () => {
  const [scheduleHTML, setScheduleHTML] = useState('');

  const fetchScheduleData = async (cb) => {
    try {
      const res = await fetch(endpoints.grid);
      const data = await res.text();
      cb(data);
    } catch (e) {
      // eslint-disable-next-line
      console.warn('Can not fetch the schedule:', { e });
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
    if (endpoints.grid) {
      fetchScheduleData(modifySessionizeScript);
    }
  }, [modifySessionizeScript]);

  return (
    <section className="safe-paddings relative z-0 pb-24 pt-16 md:pb-20 md:pt-8">
      <div className="container item-center flex flex-col" id="schedule">
        {scheduleHTML ? (
          <DangerousHtml html={scheduleHTML} />
        ) : (
          <div className="my-20 flex items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-gray-80" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Grid;
