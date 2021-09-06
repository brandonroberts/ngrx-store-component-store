import { Component, OnInit } from '@angular/core';
import { Credentials } from '@example-app/auth/models';
import { LoginPageStore } from './login-page.store';

@Component({
  selector: 'bc-login-page',
  template: `
    <bc-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async"
    >
    </bc-login-form>
  `,
  styles: [],
  providers: [LoginPageStore]
})
export class LoginPageComponent {
  pending$ = this.loginPageStore.pending$;
  error$ = this.loginPageStore.error$;

  constructor(private loginPageStore: LoginPageStore) {}

  onSubmit(credentials: Credentials) {
    this.loginPageStore.login(credentials);
  }
}
