const { format, parseISO } = require('date-fns');

const getShortDate = (date) => format(parseISO(date), 'MMMM, dd yyyy');

// We are using ES modules here in order to be able to import variables from this file in gatsby-node.js
module.exports = {
  getShortDate,
};
