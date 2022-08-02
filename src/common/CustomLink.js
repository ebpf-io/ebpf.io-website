import { Link } from "gatsby";
import React from "react";

const CustomLink = ({ text, url, target }) =>
  url.startsWith("/") ? (
    <Link className='link' to={url}>
      {text}
    </Link>
  ) : (
    <a target={target || ""} className='link' href={url}>
      {text}
    </a>
  );

export default CustomLink;
