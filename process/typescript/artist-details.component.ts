import {Component} from 'angular2/core';
import {Artist} from './artist';

// Component decorator
@Component({
  selector: 'artist-details',
  templateUrl: 'partials/artistdetails.html',
  inputs: ['artist']
}) // No semicolon
export class ArtistDetailsComponent {}
