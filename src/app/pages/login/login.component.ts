import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  router= inject(Router)

  login($event: MouseEvent) {
  $event.preventDefault();
  this.router.navigateByUrl('organization')

}

}
