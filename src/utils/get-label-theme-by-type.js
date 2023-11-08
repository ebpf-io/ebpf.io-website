const getLabelThemeByType = (type) => {
  const themes = {
    meetup: 'green',
    webinar: 'red',
    conference: 'blue',
  };

  return themes[type.toLowerCase()] || 'blue';
};

export default getLabelThemeByType;
