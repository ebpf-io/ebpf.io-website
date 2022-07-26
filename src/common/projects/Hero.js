import React from 'react';
import { Link } from "gatsby";
import cn from "classnames";

export const Hero = () => {
  const types = [
    { name: "Applications", url: "/applications" },
    { name: "Infrastructure", url: "/infrastructure" },
  ];

  return (
    <div className="projects-hero">
      <img src={require("../../assets/hero-bg.svg")} alt="" aria-hidden />
      <h1>Applications</h1>
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