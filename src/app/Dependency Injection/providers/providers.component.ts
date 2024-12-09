
import {
  NgModule,
  Injector,
  Component,
  Injectable,
  Inject,
  TypeDecorator
} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
class OtherService {
  constructor() {}
}

@Injectable({
  providedIn: 'root'
})
class SimpleService {
  value: string = '';

  otherService: OtherService;

  constructor(otherService: OtherService) {
    this.otherService = otherService;
  }
}

@Component({
  selector: 'app-providers',
  standalone: true,
  imports: [],
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss'
})

export class ProvidersComponent {
  constructor(private simpleService: SimpleService) {}
}
