import { languages } from '../../config/languages';

function createPageUrl(page) {
  const result = {};

  Object.keys(languages).forEach((lang) => {
    result[lang] = lang === 'en' ? `/${page}/` : `/${lang}/${page}/`;
  });

  return result;
}
export default createPageUrl;
