import { Link } from "gatsby";
import React from "react";

const CustomLink = ({ children, url, target }) =>
  url.startsWith("/") ? (
    <Link className='link' to={url}>
      {children}
    </Link>
  ) : (
    <a target={target || ""} className='link' href={url}>
      {children}
    </a>
  );

export default CustomLink;
