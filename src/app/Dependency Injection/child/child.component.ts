import { Component } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  providers: [ SimpleService ],
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  constructor(public service: SimpleService) { }
}
