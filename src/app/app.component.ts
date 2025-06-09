import { Component, inject } from '@angular/core';
import { ExampleHttpService } from './services/example-http.service';

@Component({
  selector: 'app-root',
  template: `<pre> {{ res$ | async | json }} </pre>`,
})
export class AppComponent {
  private exampleHttpService = inject(ExampleHttpService);
  res$ = this.exampleHttpService.testRequest();
}
