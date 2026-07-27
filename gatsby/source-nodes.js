async function getHubspotEmails({ actions: { createNode }, createContentDigest }) {
  const getObjects = async () => {
    if (process.env.NODE_ENV !== 'production' || !process.env.HUBSPOT_ACCESS_TOKEN) {
      return [];
    }

    let hubspotEmailsData;

    try {
      const searchParams = new URLSearchParams({
        limit: '300',
        sort: '-publishDate',
      });

      const hubspotEmails = await fetch(
        `https://api.hubapi.com/marketing/v3/emails?${searchParams}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!hubspotEmails.ok) {
        throw new Error(`HubSpot API responded with status: ${hubspotEmails.status}`);
      }

      hubspotEmailsData = await hubspotEmails.json();
    } catch (error) {
      return [];
    }

    const emails = hubspotEmailsData.results || [];

    const eCHOemails = emails
      .filter((email) => {
        const hasEchoInName = email.name && email.name.toLowerCase().includes('echo news');

        const isPublished = email.isPublished && email.state === 'PUBLISHED';
        return hasEchoInName && isPublished;
      })
      .map((email) => ({
        name: email.name,
        publishDate: email.publishDate,
        isPublished: true,
        publishedUrl:
          email.webversion.url || `isovalent-9197153.hs-sites.com/${email.webversion.slug}`,
      }))
      .slice(0, 150);

    return eCHOemails;
  };

  const objects = await getObjects();

  createNode({
    objects,
    id: 'hubspot-email-data',
    parent: null,
    children: [],
    internal: {
      type: 'HubspotEmails',
      contentDigest: createContentDigest(objects),
    },
  });
}

module.exports = async (options) => {
  await getHubspotEmails(options);
};
