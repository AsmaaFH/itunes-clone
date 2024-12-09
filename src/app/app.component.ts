import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AsyncPipeComponent } from './AsyncPipe/async-pipe/async-pipe.component';
import { ModelDrivenFormComponent } from './Forms/model-driven-form/model-driven-form.component';
import { ModelDrivenFormValidatorsComponent } from './Forms/model-driven-form-validators/model-driven-form-validators.component';
import { ReactiveModelFormComponent } from './Forms/reactive-model-form/reactive-model-form.component';
import { TemplateDrivenFormComponent } from './Forms/template-driven-form/template-driven-form.component';
import { ProvidersComponent } from './Dependency Injection/providers/providers.component';
import { ParentComponent } from "./Dependency Injection/parent/parent.component";
import { ChildComponent } from "./Dependency Injection/child/child.component";
import { HttpApiComponent } from "./Http/http-api/http-api.component";
// import { HttpWithPromiseComponent } from './Http/http-with-promise/http-with-promise.component';
import { HttpWithObservablesComponent } from "./Http/http-with-observables/http-with-observables.component";
import { ArtistComponent } from './Routing/artist/artist.component';
import { HeaderComponent } from './Routing/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //  AsyncPipeComponent,
    // ModelDrivenFormComponent,
    // ModelDrivenFormValidatorsComponent,
    // ReactiveModelFormComponent,
    // TemplateDrivenFormComponent,
    // ProvidersComponent,
    // ParentComponent,
    // ChildComponent,
    // HttpApiComponent
    // HttpWithPromiseComponent,
    // HttpWithObservablesComponent,
    // ArtistComponent
    HeaderComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-18-practice';

  getTitle(){
		return this.title;
	}

  ngOnInit() {
    // const numbers = interval(1000);
    // numbers.subscribe((value) => {
    //   console.log('Subscriber: ' + value);
    // });
    // interval(1000)
    //   .pipe(
    //     take(3),
    //     map((v) => Date.now())
    //   )
    //   .subscribe((value) => console.log('Subscriber: ' + value));
  }
}
