import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SearchItem } from './search-item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse {
  results: SearchItem[];
}

@Injectable({
  providedIn: 'root'
})

export class SearchJsonpService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  search(term: string): Observable<SearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.jsonp<ApiResponse>(apiURL, 'callback').pipe(map((response) =>response.results)
    )
  }
}
