// Import the component definition/decorator
import {Component} from 'angular2/core';
// Import bootstrap fn for app startup
import {bootstrap} from 'angular2/platform/browser';

// Component decorator: 
// Angular creates a shadow dom element for each component and inserts the 
// template inside the dom element
@Component({
    selector: 'my-app',
    template: '<h1>Welcome to my App</h1>'
}) // No semicolon
class AppComponent {

}

/* Bootstrap will look for the selector <my-app> in html and bind the module
 * to it. */ 
bootstrap(AppComponent);

