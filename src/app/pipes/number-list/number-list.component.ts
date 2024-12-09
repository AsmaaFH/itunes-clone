import { Component, Input } from '@angular/core';
import { PurePipe } from '../pure.pipe';
import { ImpurePipe } from '../impure.pipe';

@Component({
  selector: 'app-number-list',
  standalone: true,
  imports: [PurePipe, ImpurePipe],
  styleUrl: './number-list.component.scss',
  template: `
    <div>
      <h3>Original Numbers:</h3>
      <p>{{ numbers }}</p>

      <h3>Formatted Numbers with Pure Pipe:</h3>
      <p>{{ numbers | pure }}</p>

      <h3>Formatted Numbers with ImPure Pipe:</h3>
      <p>{{ numbers | impure }}</p>
    </div>
  `,
})
export class NumberListComponent {
  numbers = [1, 2, 3, 4, 5];
  @Input() input : string = ''

  ngOnInit(){
    setTimeout(()=> console.log('setTimeout'), 2000);
    console.log("ngOnInit Numbers Component");
    this.tester();
  }

  tester(){
    console.log("track change detection");
  }
}
