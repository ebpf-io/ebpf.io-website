import PropTypes from 'prop-types';
import React from 'react';

import AnchorHeading from 'components/shared/anchor-heading';
import data from 'data/shared/faq';

import { defaultLanguage } from '../../../../../config/languages';

const Heading = AnchorHeading('h2');

const FAQ = ({ lang }) => (
  <section className="faq safe-paddings mb-32 pt-32 lg:mb-28 lg:pt-28 md:mb-20 md:pt-20" id="faq">
    <div className="container-sm">
      <div className="text-center">
        <Heading className="heading-8xl inline-flex text-center font-bold leading-dense">
          {data[lang].title}
        </Heading>
      </div>
      <ul>
        {data[lang].items.map(({ question, answer }, index) => {
          const Answer = answer;
          return (
            <li className="mt-12 first:mt-14 md:mt-10 md:first:mt-10" key={index}>
              <h3 className="font-sans text-3xl font-semibold leading-tight lg:text-2xl md:text-xl">
                {question}
              </h3>
              <div className="prose mt-6 !max-w-none prose-p:!leading-normal hover:prose-a:text-gray-40 hover:prose-a:transition hover:prose-a:duration-200 prose-ol:!pl-6 prose-ul:!pl-5 prose-li:!leading-normal prose-li:marker:font-light prose-li:marker:text-black">
                {typeof answer === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: answer }} />
                ) : (
                  <Answer />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

FAQ.propTypes = {
  lang: PropTypes.string,
};

FAQ.defaultProps = {
  lang: defaultLanguage,
};

export default FAQ;
