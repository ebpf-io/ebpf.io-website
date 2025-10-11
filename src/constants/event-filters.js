const eventFilters = [
  {
    name: 'Select types',
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
    name: 'Conference',
    label: 'conference',
    items: [
      {
        name: 'eBPF Summit',
      },
      {
        name: 'Cloud Native eBPF Day',
      },
      {
        name: 'eBPF Track (LPC)',
      },
      {
        name: 'bpfconf (LSF/MM/BPF)',
      },
      {
        name: 'FOSDEM',
      },
      {
        name: 'BPF Meetups at IETF',
      },
      {
        name: 'SIGCOMM eBPF Workshop',
      },
    ],
  },
  {
    name: 'Select regions',
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
  {
    name: 'Select date',
    label: 'date',
    items: [
      {
        name: 'Upcoming events',
      },
      {
        name: 'Archived events',
      },
    ],
  },
];

// We are using ES modules here in order to be able to import variables from this file in gatsby-node.js
module.exports = {
  eventFilters,
};
