import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ApiResponse{
  results: any[] ;
}
@Component({
  selector: 'app-artist-track-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-track-list.component.html',
  styleUrl: './artist-track-list.component.scss'
})
export class ArtistTrackListComponent {
  public tracks: any[] = [];
  public isLoading: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.parent?.params.subscribe(params => {
      this.isLoading = true;
      this.http
        .jsonp<ApiResponse>(
          `https://itunes.apple.com/lookup?id=${
            params["artistId"]
          }&entity=song`,
          "callback"
        )
        .toPromise()
        .then(res => {
          console.log(res);
          this.tracks = res?.results.slice(1) || [];
          this.isLoading = false;
        });
    });
  }
}
