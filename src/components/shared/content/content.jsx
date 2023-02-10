import { MDXProvider } from '@mdx-js/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import AnchorHeading from 'components/shared/anchor-heading';

import CardItem from '../card-item';
import CodeBlock from '../code-block';

const components = {
  h2: AnchorHeading('h2'),
  h3: AnchorHeading('h3'),
  table: (props) => (
    <div className="table-wrapper">
      <table {...props} />
    </div>
  ),
  // eslint-disable-next-line react/jsx-no-useless-fragment
  undefined: (props) => <Fragment {...props} />,
  code: (props) => {
    if (props?.className?.startsWith('language-')) {
      return <CodeBlock {...props} />;
    }
    return <code {...props} />;
  },
  pre: (props) => <div {...props} />,
  CardsList: (props) => <div className="grid-gap grid grid-cols-2 sm:grid-cols-1" {...props} />,
  CardItem,
};

const Content = ({ className, content }) => (
  <div className={clsx('prose-content max-w-none', className)}>
    <MDXProvider components={components}>{content}</MDXProvider>
  </div>
);

Content.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node.isRequired,
};

Content.defaultProps = {
  className: null,
};

export default Content;
