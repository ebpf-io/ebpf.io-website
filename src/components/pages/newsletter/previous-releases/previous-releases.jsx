/* eslint-disable no-param-reassign */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Link from 'components/shared/link';
import CalendarIcon from 'icons/calendar.inline.svg';
import { getMonthAndDay, getYear } from 'utils/get-date-data';

const PreviousReleases = () => {
  const data = useStaticQuery(graphql`
    query hubspotEmailsQuery {
      hubspotEmails {
        objects {
          name
          publishDate
          publishedUrl
        }
      }
    }
  `);

  const items = data.hubspotEmails.objects.filter((item) => item.name.match(/^eCHO news \d{1,3}$/));

  items.forEach((item) => {
    item.year = getYear(Number(item.publishDate));
    item.title = `eCHO News Episode`;
    // eslint-disable-next-line prefer-destructuring
    item.number = item.name.match(/\d{1,3}/)[0];
    item.date = getMonthAndDay(Number(item.publishDate));
  });

  const getReleases = () =>
    items.reduce((acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [item];
      } else {
        acc[item.year].push(item);
      }
      return acc;
    }, {});

  const newsletterData = getReleases();

  return Object.keys(newsletterData).length > 0 ? (
    <section className="releases safe-paddings mb-32 mt-40 lg:my-32 md:my-24 sm:my-20" id="archive">
      <div className="container">
        <h2 className="heading-9xl text-center font-semibold tracking-[-0.01em]">
          Previous releases of eCHO News
        </h2>
        <ul className="mt-8 space-y-10">
          {Object.entries(newsletterData)
            .reverse()
            .map(([year, releases], index) => (
              <li key={index}>
                <h3 className="text-3xl font-bold leading-snug">{year}</h3>
                <ul className="mt-8 grid grid-cols-4 gap-8 lg:grid-cols-3 md:mt-6 md:gap-7 sm:grid-cols-2 sm:gap-6 [@media(max-width:500px)]:grid-cols-1">
                  {releases.map(({ title, number, date, publishedUrl }, index) => (
                    <li className="flex flex-col" key={index}>
                      <Link
                        className="rounded-lg border border-gray-90 p-6 pt-5 transition-colors duration-200 hover:border-gray-70"
                        to={publishedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="heading-7xl font-medium leading-none">#{number}</span>
                        <h4 className="mt-3 text-lg font-medium md:text-base">{title}</h4>
                        <span className="mt-4 flex items-center space-x-2.5 border-t border-dashed border-gray-80 pt-5">
                          <CalendarIcon className="h-3.5 w-3.5 shrink-0 text-secondary-blue" />
                          <span className="text-sm leading-none">{date}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </section>
  ) : (
    <span className="mb-32 block" />
  );
};

export default PreviousReleases;
