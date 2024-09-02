import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth0Service,
    private router: Router
  ) {}

  public login(): void {
    this.auth.loginWithRedirect();
  }

  public logout(): void {
    this.auth.logout().subscribe(() => {
      window.location.href = '/'; // Redirect manually
    });
  }

  public isAuthenticated$ = this.auth.isAuthenticated$;

  // Ensure this method exists and handles the callback
  public async handleAuthCallback(): Promise<void> {
    try {
      await this.auth.handleRedirectCallback().toPromise();
      this.router.navigate(['/']); // Navigate to home or another route
    } catch (error) {
      console.error('Error handling authentication callback', error);
      // Handle errors or redirect to an error page
    }
  }
}
