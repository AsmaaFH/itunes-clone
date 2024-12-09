import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  ngOnInit() {
    throw new Error('Method not implemented.');
  }
  public itunes = inject(SearchService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  loading: boolean = false;

  constructor() {
    this.route.params.subscribe((params) => {
      if (params['term']) {
        this.doSearch(params['term']);
      }
    });
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(() => (this.loading = false));
  }

  onSearch(term: string) {
    this.router.navigate(['search', { term }]);
  }

  canDeactivate() {
    return this.itunes.results.length > 0;
  }

}
