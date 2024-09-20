export default async (request) => {
  // Get the user agent string of the requester
  const ua = request.headers.get('user-agent');

  // Specify the user agents which need to be blocked
  const agents = ['Wget', 'Go-http-client', 'Gofeed', 'Undefined', '-'];

  // Check against our list of known AI bots
  let isBot = false;
  agents.forEach((agent) => {
    if (ua?.toLowerCase().includes(agent.toLowerCase())) {
      isBot = true;
    }
  });

  // If the requester is an AI bot, disallow with a 403
  if (isBot) {
    return new Response(null, { status: 403 });
  }

  // Otherwise, continue with the request as normal
};

// This edge function is executed for all requests across the site
export const config = {
  path: '/*',
};
