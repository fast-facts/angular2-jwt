import { Component } from '@angular/core';
import { ExampleHttpService } from './services/example-http.service';

@Component({
    selector: 'app-root',
    template: `<pre> {{ res$ | async | json }} </pre>`,
    standalone: false
})
export class AppComponent {
  res$ = this.exampleHttpService.testRequest();
  constructor(private exampleHttpService: ExampleHttpService) { }
}
