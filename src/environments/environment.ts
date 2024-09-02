export const environment = {
  production: false,
  auth: {
    domain: 'dev-125fls1a10tx8u82.us.auth0.com',
    clientId: '81zbHb2LMcHVEIcknwOf6G1GqTqgXXMM',
    redirectUri: 'http://localhost:4200', // Ensure this matches Auth0 settings
    logoutRedirectUri: 'http://localhost:4200', // Ensure this matches Auth0 settings
    audience: 'https://dev-125fls1a10tx8u82.us.auth0.com/api/v2/'
  }
};
