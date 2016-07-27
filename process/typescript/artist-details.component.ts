import {Component} from 'angular2/core';

// Interface could go in its own file if more than one component uses it
interface Artist {
  name: string;
  shortname: string;
  reknown: string;
  bio: string;
}

// Component decorator
@Component({
  selector: 'artist-details',
  templateUrl: 'partials/artistdetails.html',
  inputs: ['artist']
}) // No semicolon
export class ArtistDetailsComponent {}
