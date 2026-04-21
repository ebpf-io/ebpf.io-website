const fetch = require(`node-fetch`);

async function getHubspotEmails({ actions: { createNode }, createContentDigest }) {
  const getObjects = async () => {
    if (process.env.NODE_ENV !== 'production' || !process.env.HUBSPOT_ACCESS_TOKEN) {
      return [];
    }

    const results = [];
    let after;

    try {
      do {
        const url = new URL('https://api.hubapi.com/marketing/v3/emails/');
        url.searchParams.set('limit', '100');
        url.searchParams.set('isPublished', 'true');
        if (after) url.searchParams.set('after', after);

        // eslint-disable-next-line no-await-in-loop
        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.log(`HubSpot emails API returned ${response.status}`);
          return [];
        }

        // eslint-disable-next-line no-await-in-loop
        const data = await response.json();
        results.push(...(data.results || []));
        after = data.paging && data.paging.next && data.paging.next.after;
      } while (after);
    } catch (error) {
      console.log(error);
      return [];
    }

    return results
      .filter(({ name }) => typeof name === 'string' && /eCHO news/i.test(name))
      .map(({ name, publishDate, state, publishedUrl, url }) => ({
        name,
        publishDate: publishDate ? String(new Date(publishDate).getTime()) : null,
        isPublished: state === 'PUBLISHED' || state === 'AUTOMATED',
        publishedUrl: publishedUrl || url || null,
      }))
      .filter(
        ({ isPublished, publishDate, publishedUrl }) => isPublished && publishDate && publishedUrl
      );
  };

  const objects = await getObjects();

  createNode({
    objects,
    id: `hubspot-email-data`,
    parent: null,
    children: [],
    internal: {
      type: `HubspotEmails`,
      contentDigest: createContentDigest(objects),
    },
  });
}

module.exports = async (options) => {
  await getHubspotEmails(options);
};
