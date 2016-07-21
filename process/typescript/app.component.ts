import {Component} from 'angular2/core';

// Component decorator 
/* Angular replaces the inner html of <my-app> with the specified template 
 * at the file url */
@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html'
}) // No semicolon
export class AppComponent {
    name = 'Ray';
    artists = ['Barot Bellingham', 'Jonathan Ferrar', 'Hillary Post'];

    onClick(myName) {
        this.name = myName;
    }

    addArtist(myArtist) {
        this.artists.push(myArtist);
    }
}