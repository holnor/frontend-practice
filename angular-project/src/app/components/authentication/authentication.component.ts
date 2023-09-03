import {Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations: [
    trigger(
      'easeInLeft', [
        transition('void => *', [
          style({
            transform: 'translateX(-100%)'}),
          animate(200)
        ]),
      ]),
    trigger(
      'easeInRight', [
        transition('void => *', [
          style({transform: 'translateX(100%)'}),
          animate(200)
        ])
      ]
    )

  ]
})
export class AuthenticationComponent {
  authType = 'Login'

  setAuthType(authType: string) {
    this.authType = authType;
  }
}
