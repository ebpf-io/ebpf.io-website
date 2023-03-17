import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Checkbox = (props) => {
  const { className, id, label, ...otherProps } = props;

  return (
    <div className={clsx('checkbox', className)}>
      <input className="checkbox__input" type="checkbox" id={id} {...otherProps} />
      <label className="checkbox__label" htmlFor={id}>
        <span dangerouslySetInnerHTML={{ __html: label }} />
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  className: null,
  error: null,
};

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

export default Checkbox;
