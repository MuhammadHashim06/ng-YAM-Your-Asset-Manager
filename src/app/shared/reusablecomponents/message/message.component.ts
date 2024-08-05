import { Component, inject } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { response } from '../../../core/constant/constant';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  router = inject(Router)
navigate() {
this.router.navigateByUrl(this.message.nextpath)
}
  constructor(private route: ActivatedRoute){
    const name = this.route.snapshot.paramMap.get('message')!;
this.message=response.message


  }
  message:any
}
