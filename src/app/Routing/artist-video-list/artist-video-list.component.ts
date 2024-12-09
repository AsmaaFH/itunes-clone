import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface ApiResponse{
  results: any[] ;
}
@Component({
  selector: 'app-artist-video-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-video-list.component.html',
  styleUrl: './artist-video-list.component.scss'
})
export class ArtistVideoListComponent {
  public videos: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.parent?.params.subscribe(params => {
      this.http
        .jsonp<ApiResponse>(
          `https://itunes.apple.com/lookup?id=${
            params["artistId"]
          }&entity=musicVideo`,
          "callback"
        )
        .toPromise()
        .then(res => {
          console.log(res);
          this.videos = res?.results.slice(1) || [];
        });
    });
  }
}
