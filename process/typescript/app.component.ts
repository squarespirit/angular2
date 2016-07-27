import {Component} from 'angular2/core';
import {Artist} from './artist';
import {ARTISTS} from './artist-data';
import {ArtistItemComponent} from './artist-item.component';
import {ArtistDetailsComponent} from './artist-details.component';
import {FilterPipe} from './filter.pipe';

@Component({
  selector: 'my-app',
  templateUrl: 'partials/app.html',
  directives: [ArtistItemComponent, ArtistDetailsComponent], // Subcomponents used by this component
  pipes: [FilterPipe], // Pipes used
  styleUrls: ['css/app.css']
})
export class AppComponent {
  artists: Artist[] = ARTISTS;
  currentArtist: Artist;

  showArtist(item) {
    this.currentArtist = item;
  }
}
