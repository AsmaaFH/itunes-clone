import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchItem } from './search-item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse {
  results: SearchItem[];
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  // =========using Promise===========

  // search(term: string) {
  //   let promise = new Promise<void>((resolve, reject) => {
  //     let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
  //     this.http
  //       .get<ApiResponse>(apiURL)
  //       .toPromise()
  //       .then((res) => {
  //         console.log(res?.results)
  //           resolve();
  //         },
  //         msg => {
  //           reject(msg);
  //         }
  //       );
  //   });
  //   return promise;
  // }

  // =========using Observable===========

  search(term: string): Observable<SearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    return this.http.jsonp<ApiResponse>(apiURL, 'callback').pipe(map((response) =>response.results)
    )
  }
}
