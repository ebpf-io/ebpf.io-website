module.exports = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type HubspotEmails implements Node {
      objects: [HubspotEmailsObject]
    }
    type HubspotEmailsObject {
      name: String
      publishDate: String
      isPublished: Boolean
      publishedUrl: String
    }
  `;
  createTypes(typeDefs);
};
