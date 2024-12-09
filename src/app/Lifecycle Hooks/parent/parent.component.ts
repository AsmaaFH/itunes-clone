import { ChangeDetectionStrategy, Component, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  items = ['Mango', 'Orange'];

  constructor() {}

  ngOnInit() {
    //for testing
    let observable = of(this.items);
    observable.subscribe((items) => console.log(items));

    observable.pipe(tap((data) => console.log('Received:', data)));
    observable.subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let key in changes) {
      let change = changes[key];
    }
  }
}
