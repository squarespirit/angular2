import {Component, Input} from 'angular2/core';
import {Artist} from './artist';

@Component({
  selector: 'artist-item',
  templateUrl: 'partials/artistitem.html',
  styleUrls: ['css/app-item.css']
})
export class ArtistItemComponent {
  @Input() artist: Artist;
}