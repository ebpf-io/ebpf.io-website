import React from 'react';
import { Link } from "gatsby";
import cn from "classnames";
export const Hero = ({title}) => {
  const types = [
    { name: "Applications", url: "/applications" },
    { name: "Infrastructure", url: "/infrastructure" },
  ];

  return (
    <div className="projects-buttons">
      {types.map(({ name, url }, index) => {
        return (
          <Link
            className={cn(
              "projects-button",
            )}
            partiallyActive={true}
            activeClassName="active-button"
            key={index}
            to={url}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};