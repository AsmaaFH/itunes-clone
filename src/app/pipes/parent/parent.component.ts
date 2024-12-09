import { Component } from '@angular/core';
import { NumberListComponent } from '../number-list/number-list.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [NumberListComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  value: string = ''
  onChangeHandler(event: Event){
    // this.value = event.target.value;
    console.log(event);
  }
}
