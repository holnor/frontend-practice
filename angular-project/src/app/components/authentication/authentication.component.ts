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
            opacity: '0%',
            transform: 'translateX(100%)'}),
          animate(300)
        ]),
      ]),
    trigger(
      'fadeIn', [
        transition('void => *', [
          style({opacity: '0%'}),
          animate(300)
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
