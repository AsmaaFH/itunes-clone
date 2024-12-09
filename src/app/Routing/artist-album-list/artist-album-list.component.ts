import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface ApiResponse{
  results: any[] ;
}
@Component({
  selector: 'app-artist-album-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-album-list.component.html',
  styleUrl: './artist-album-list.component.scss'
})
export class ArtistAlbumListComponent {
  public albums: any[] = [];
  public isLoading: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.parent?.params.subscribe(params => {
      this.isLoading = true;
      this.http
        .jsonp<ApiResponse>(
          `https://itunes.apple.com/lookup?id=${
            params["artistId"]
          }&entity=album`,
          "callback"
        )
        .toPromise()
        .then(res => {
          console.log(res);
          this.albums = res?.results?.slice(1) || [];
          this.isLoading = false;
        });
    });
  }
}
