export const environment = {
  production: true,
  auth0: {
    domain: 'YOUR_AUTH0_DOMAIN', 
    clientId: 'YOUR_AUTH0_CLIENT_ID', 
    redirectUri: 'http://your-production-url/callback', 
    logoutRedirectUri: 'http://your-production-url', 
    audience: 'YOUR_API_IDENTIFIER' 
  }
};
