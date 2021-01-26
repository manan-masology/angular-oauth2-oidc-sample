import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: ['https://auth-dev.mdapps-staging.com/'],
    sendAccessToken: true,
  }
};
