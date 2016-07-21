import {Component} from 'angular2/core';

// Component decorator 
/* Angular replaces the inner html of <my-app> with the specified template 
 * at the file url */
@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html'
}) // No semicolon
export class AppComponent {

}