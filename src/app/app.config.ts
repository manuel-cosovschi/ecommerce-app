import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  imports: [
    AuthModule.forRoot({
      domain: 'dev-wxfi3qbmh2kxkaus.us.auth0.com',
      clientId: 'muKrWnonVB6LEYHJVcmQqayW5oB4w06m',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
})
export class AppModule {}


