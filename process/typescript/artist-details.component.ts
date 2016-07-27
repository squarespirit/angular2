import {Component, Input} from 'angular2/core';
import {Artist} from './artist';

@Component({
  selector: 'artist-details',
  templateUrl: 'partials/artistdetails.html',
  styleUrls: ['css/app-details.css']
})
export class ArtistDetailsComponent {
  @Input() artist: Artist;
}
