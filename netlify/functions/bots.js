exports.handler = async (event) => {
  const userAgent = event.headers['user-agent'] || '';

  // List of user agents to block
  const blockedUserAgents = [
    'Wget',
    'Go-http-client/2.0',
    'Go-http-client/1.0',
    'Gofeed/1.0',
    'undefined',
    '-',
  ];

  // Check if the request comes from a blocked user agent
  if (blockedUserAgents.some((ua) => userAgent.includes(ua))) {
    return {
      statusCode: 403,
      body: 'Access Forbidden: Bad User Agent',
    };
  }

  // If no conditions are met, allow the request
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: '',
  };
};
