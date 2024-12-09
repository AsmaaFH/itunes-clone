import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { SearchJsonpService } from '../search-jsonp.service';
// import { SearchService } from '../search.service';

@Component({
  selector: 'app-http-with-promise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './http-with-promise.component.html',
  styleUrl: './http-with-promise.component.scss'
})
export class HttpWithPromiseComponent {
//   loading: boolean = false;

//   constructor(public itunes: SearchJsonpService) {}

//   doSearch(term: string) {
//     this.loading = true;
//     // this.itunes.search(term).then(_ => {
//     //   (this.loading = false)});
//   }
}
