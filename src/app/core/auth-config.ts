import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://auth-dev.mdapps-staging.com',
  clientId: 'angular-test-app', // The "Auth Code + PKCE" client
  responseType: 'code',
  redirectUri: 'http://localhost:4200',
  postLogoutRedirectUri: 'http://localhost:4200',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile email apiApp', // Ask offline_access to support refresh token refreshes
  useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  nonceStateSeparator : 'semicolon' // Real semicolon gets mangled by IdentityServer's URI encoding
};
