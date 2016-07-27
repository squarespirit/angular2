import {Component, Input} from 'angular2/core';
import {Artist} from './artist';

@Component({
  selector: 'artist-item',
  templateUrl: 'partials/artistitem.html',
  styles: [`
    img {
      display: block;
      float: left;
      width: 60px;
      -webkit-border-radius: 12px;
      border-radius: 12px;
      margin-right: 10px;
      margin-bottom: 10px;
    }`,
    'h2 { margin-top: 0; }'
  ]
})
export class ArtistItemComponent {
  @Input() artist: Artist;
}