import React from 'react';
import { Link } from "gatsby";
import cn from "classnames";
export const Hero = ({title}) => {
  const types = [
    { name: "Applications", url: "/applications" },
    { name: "Infrastructure", url: "/infrastructure" },
  ];

  return (
    <> 
      <div className="projects-hero">
        <div className="projects-inner">
          <h1>{title}</h1>
        </div>
      </div>
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
   
    </>

  );
};