/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require("react");

exports.onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  setHeadComponents([
    <meta
      key="meta-viewport"
      name="viewport"
      content="width=device-width, initial-scale=1"
    />,
    <link
      key="putua-one-font"
      href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,900&display=swap"
      rel="stylesheet"
    />,
    <link
      key="noto-serif-fonr"
      href="https://fonts.googleapis.com/css?family=Noto+Serif&display=swap"
      rel="stylesheet"
    />
  ]);
};
