import Layout from "../layouts";
import React from "react";

const NotFoundPage = () => (
  <Layout>
    <div className="not-found-wrapper">
      <h1 className="not-found-http-code">404</h1>
      <h2 className="not-found-title">Page not found :(</h2>
      <p className="not-found-description">
        The page you were looking for doesn’t exist
      </p>
      <a href="/" className="not-found-home-button">
        Home
      </a>
    </div>
  </Layout>
);

export default NotFoundPage;
