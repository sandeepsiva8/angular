// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { from, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth0Service,
    private router: Router,
    private cookieService: CookieService
  ) {}

  public login(): void {
    this.auth.loginWithRedirect();
  }
  public logout(): void {
    this.auth.logout().subscribe(() => {
      this.cookieService.delete('access_token');
      window.location.href = '/'; // Redirect manually
    });
  }

  public isAuthenticated$ = this.auth.isAuthenticated$;

  public getToken$(): Observable<string | null> {
    return from(this.auth.getAccessTokenSilently()).pipe(
      map((token: string | null) => {
        if (token) {
          this.cookieService.set('access_token', token); // Store token in cookies
          return token;
        }
        return null;
      }),
      catchError((error) => {
        console.error('Error getting access token', error);
        return of(null);
      })
    );
  }

  public async handleAuthCallback(): Promise<void> {
    try {
      await this.auth.handleRedirectCallback().toPromise();
      const accessToken = await this.auth.getAccessTokenSilently().toPromise();
      if (accessToken) {
        this.cookieService.set('access_token', accessToken); // Store token in cookies
      }
      this.router.navigate(['/']);
    } catch (error) {
      console.error('Error handling authentication callback', error);
    }
  }
}
