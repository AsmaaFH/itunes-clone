import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { firstValueFrom } from 'rxjs';

interface ApiResponse{
  results: any[] ;
}

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent {
  public artist: any;

  constructor(private http: HttpClient, private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      this.http
        .jsonp<ApiResponse>(
          `https://itunes.apple.com/lookup?id=${params["artistId"]}`,
          "callback"
        )
        .toPromise()
        .then(res => {
          console.log(res);
          this.artist = res?.results[0];
          console.log(this.artist);
        });
    });
  }
}
