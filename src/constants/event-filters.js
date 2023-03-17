const eventFilters = [
  {
    name: 'All types',
    label: 'eventtype',
    items: [
      {
        name: 'Webinar',
      },
      {
        name: 'Meetup',
      },
      {
        name: 'Conference',
      },
    ],
  },
  {
    name: 'All region',
    label: 'region',
    items: [
      {
        name: 'Online',
      },
      {
        name: 'APAC',
      },
      {
        name: 'EMEA',
      },
      {
        name: 'North America',
      },
    ],
  },
];

// We are using ES modules here in order to be able to import variables from this file in gatsby-node.js
module.exports = {
  eventFilters,
};
