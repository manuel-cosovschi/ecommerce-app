import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { ReactiveFormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-wxfi3qbmh2kxkaus.us.auth0.com',
      clientId: 'muKrWnonVB6LEYHJVcmQqayW5oB4w06m',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    ReactiveFormsModule
  ],
}).catch(err => console.error(err));




