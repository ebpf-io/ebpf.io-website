module.exports = post => {
  const nhp = require('node-html-parser')
  const { html } = post;
  const normalizedHtml = html.trim();
  const regex = /<p>{{\s*preview\s*}}<\/p>([\s\S]*)<p>{{\s*\/\s*preview\s*}}<\/p>([\s\S]*)/gi;
  const matches = regex.exec(normalizedHtml);

  const parsedToPreviewImageHtml = (parsed) => {
    const firstImageHtml = parsed.querySelector('.gatsby-resp-image-link');
    const firstManualLinkImageHtml = parsed.querySelector('a img.gatsby-resp-image-image');
    const firstManualOgLinkImageHtml = parsed.querySelector('a.ogpreview img.gatsby-resp-image-image');

    if (firstManualOgLinkImageHtml) {
      return firstManualOgLinkImageHtml.parentNode.parentNode.outerHTML;
    } else if(firstManualLinkImageHtml) {
      return firstManualLinkImageHtml.parentNode.parentNode.outerHTML;
    }

    return firstImageHtml ? firstImageHtml.outerHTML : null;
  }

  const parsedToPreviewDescription = (parsed) => {
    const textNode = Array
      .from(parsed.querySelectorAll('p'))
      .find((elem) => (elem.textContent || elem.text).trim().length > 0);

    return (textNode.textContent || textNode.text).slice(0, 133) + '...';
  }

  if (!matches || matches.index > 0) {
    const parsed = nhp.parse(normalizedHtml);

    return {
      hasPreview: false,
      previewHtml: normalizedHtml,
      mainHtml: normalizedHtml,
      previewImageHtml: parsedToPreviewImageHtml(parsed),
      previewDescription: parsedToPreviewDescription(parsed),
    };
  }

  const previewHtmlMatch = matches[1];
  const mainHtmlMatch = matches[2];
  const parsed = nhp.parse(previewHtmlMatch);

  return {
    hasPreview: true,
    previewHtml: previewHtmlMatch,
    mainHtml: mainHtmlMatch,
    previewImageHtml: parsedToPreviewImageHtml(parsed),
    previewDescription: parsedToPreviewDescription(parsed),
  };
};
