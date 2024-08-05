import { Component,inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
verify($event: MouseEvent) {
  $event.preventDefault()
this.router.navigateByUrl('signup/registration')
}
  router = inject(Router)
}
