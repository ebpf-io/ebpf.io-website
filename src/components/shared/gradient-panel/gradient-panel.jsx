import PropTypes from 'prop-types';
import React from 'react';

const GradientPanel = ({ title, subtitle, children }) => (
  <div className="rounded-xl border border-[#FFD08A] bg-gradient-to-r from-[#FFF0D9] to-[#FFE3B3] px-10 py-12 shadow-sm md:px-6">
    {title && <h2 className="heading-9xl text-center font-bold leading-none">{title}</h2>}
    {subtitle && <p className="mt-3 text-center text-lg text-gray-700">{subtitle}</p>}
    <div className="mt-10">{children}</div>
  </div>
);

GradientPanel.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

GradientPanel.defaultProps = {
  title: null,
  subtitle: null,
};

export default GradientPanel;
