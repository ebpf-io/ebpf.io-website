import React from "react";

export default function ({ icon, iconWidth, iconHeight, title, text, ...props }) {
  return <div className="main-section" {...props}>
    <div className="main-section-title">{title}</div>
    <img className="section-logo" src={icon} width={iconWidth} />
    <div className="main-section-text">{text}</div>
  </div>
};
