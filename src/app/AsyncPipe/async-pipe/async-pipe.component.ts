import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.scss'
})

export class AsyncPipeComponent {
  promiseData?: Promise<string>;
  constructor() {
    //before using async pipe
		// this.getPromise().then(v => this.promiseData = v);

    //after using async pipe
    this.promiseData = this.getPromise();
  }

  getPromise() {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
 }
}
