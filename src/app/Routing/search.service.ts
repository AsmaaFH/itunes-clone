import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchItem } from './search-item';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private http = inject(HttpClient);
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[] = [];

  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http
        .jsonp(apiURL, 'callback')
        .toPromise()
        .then(
          (res: any) => {
            this.results = res.results.map((item: any) => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            resolve(this.results);
          },
          (msg) => {
            reject(msg);
          }
        );
    });
  }


}
