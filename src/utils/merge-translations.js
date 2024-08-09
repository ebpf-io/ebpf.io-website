const mergeTranslations = (translation, defaultTranslation) => {
  if (Array.isArray(translation)) {
    return translation.map((item, index) => mergeTranslations(item, defaultTranslation[index]));
  }
  if (typeof translation === 'object' && translation !== null) {
    return Object.fromEntries(
      Object.entries(defaultTranslation).map(([key, value]) => [
        key,
        mergeTranslations(translation[key], value),
      ])
    );
  }
  return translation ?? defaultTranslation;
};

export default mergeTranslations;
