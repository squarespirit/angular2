import {Component} from 'angular2/core';

// Component decorator: 
// Angular creates a shadow dom element for each component and inserts the 
// template inside the dom element
@Component({
    selector: 'my-app',
    template: '<h1>Welcome to my App</h1>'
}) // No semicolon
export class AppComponent {

}