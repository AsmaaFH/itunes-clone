import { Component } from '@angular/core';
import { SearchItem } from '../search-item';
import { SearchService } from '../search.service';
import { CommonModule } from '@angular/common';
import { SearchJsonpService } from '../search-jsonp.service';

@Component({
  selector: 'app-http-with-observables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './http-with-observables.component.html',
  styleUrl: './http-with-observables.component.scss'
})
export class HttpWithObservablesComponent {
  public loading: boolean = false;
  public results: SearchItem[] = [];

  constructor(public itunes:SearchJsonpService) {

  }

  doSearch(term:string) {
    this.loading = true;
    this.itunes.search(term).subscribe( (data) => {
      this.loading = false;
      this.results = data;
      console.log(this.results);
    },
    (error) => {
      this.loading = false;
      console.error('Search failed:', error);
    }
  );
  }

}
