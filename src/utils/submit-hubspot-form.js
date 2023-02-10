const HUBSPOT_PORTAL_ID = 9197153;

const submitHubspotForm = (hubspotFormId, fields, context) =>
  window.fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${hubspotFormId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        context,
        fields,
      }),
    }
  );

export default submitHubspotForm;
