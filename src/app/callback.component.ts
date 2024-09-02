import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-callback',
  template: '<p>Loading...</p>',
})
export class CallbackComponent implements OnInit {
  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    try {
      await this.authService.handleAuthCallback();
    } catch (error) {
      console.error('Error during auth callback', error);
      // Handle errors or redirect to an error page
    }
  }
}
