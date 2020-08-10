module.exports = post => {
  const { html } = post;
  const normalizedHtml = html.trim();
  const regex = /<p>{{\s*preview\s*}}<\/p>([\s\S]*)<p>{{\s*\/\s*preview\s*}}<\/p>([\s\S]*)/gi;
  const matches = regex.exec(normalizedHtml);

  if (!matches || matches.index > 0) {
    return {
      hasPreview: false,
      previewHtml: normalizedHtml,
      mainHtml: normalizedHtml
    };
  }

  const previewHtmlMatch = matches[1];
  const mainHtmlMatch = matches[2];

  return {
    hasPreview: true,
    previewHtml: previewHtmlMatch,
    mainHtml: mainHtmlMatch
  };
};
