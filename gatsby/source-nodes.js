const fetch = require(`node-fetch`);

async function getHubspotEmails({ actions: { createNode }, createContentDigest }) {
  const getObjects = async () => {
    if (process.env.NODE_ENV === 'production' && process.env.HUBSPOT_ACCESS_TOKEN) {
      let hubspotEmailsData;
      try {
        const hubspotEmails = await fetch(
          `https://api.hubapi.com/marketing-emails/v1/emails?limit=150&name__icontains=eCHO+news&orderBy=-publish_date`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
              'Content-Type': 'application/json',
            },
          }
        );
        hubspotEmailsData = await hubspotEmails.json();
      } catch (error) {
        console.log(error);
        return [];
      }

      return hubspotEmailsData.objects
        .filter(({ isPublished }) => isPublished !== false)
        .map(({ name, publishDate, isPublished, publishedUrl }) => ({
          name,
          publishDate,
          isPublished,
          publishedUrl,
        }));
    }

    return [];
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
