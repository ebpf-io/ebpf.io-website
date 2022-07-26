import React from 'react';
import { Link } from "gatsby";
import cn from "classnames";
import background from './assets/hero-bg.svg';
export const Hero = ({title}) => {
  const types = [
    { name: "Applications", url: "/applications" },
    { name: "Infrastructure", url: "/infrastructure" },
  ];

  return (
    <div className="projects-hero">
      <img src={background} alt="" aria-hidden width={1600} height={300} />
      <h1>{title}</h1>
      <div className="projects-buttons">
        {types.map(({ name, url }, index) => {
          return (
            <Link
              className={cn(
                "projects-button",
              )}
              activeClassName="active-button"
              key={index}
              to={url}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};