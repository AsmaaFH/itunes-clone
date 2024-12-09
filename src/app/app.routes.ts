import { Routes } from '@angular/router';
import { ArtistComponent } from './Routing/artist/artist.component';
import { SearchComponent } from './Routing/search/search.component';
import { ArtistTrackListComponent } from './Routing/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './Routing/artist-album-list/artist-album-list.component';
import { ArtistVideoListComponent } from './Routing/artist-video-list/artist-video-list.component';
import { HomeComponent } from './Routing/home/home.component';
import { alwaysAuthGuard } from './Routing/Guards/always-auth.guard';
import { LoginComponent } from './Routing/login/login.component';
import { authGuard } from './Routing/Guards/auth.guard';
import { unSearchedTermGuard } from './Routing/Guards/un-searched-term.guard';
import { ParentComponent } from './Lifecycle Hooks/parent/parent.component';
import { NumberListComponent } from './pipes/number-list/number-list.component';
import { ParentComponent as Parent } from './pipes/parent/parent.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', canDeactivate: [unSearchedTermGuard], component: SearchComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'artist/:artistId',
    component: ArtistComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'tracks', pathMatch: 'full' },
      { path: 'tracks', component: ArtistTrackListComponent },
      { path: 'albums', component: ArtistAlbumListComponent },
      { path: 'videos', component: ArtistVideoListComponent },
    ],
  },
  { path: 'lifecycle', component: ParentComponent },
  { path: 'numbers', component: Parent },
];
