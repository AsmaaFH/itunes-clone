import { Component } from '@angular/core';
import { SimpleService } from '../simple.service';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirstServiceService } from '../first-service.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  // providers: [SimpleService],
  viewProviders: [SimpleService]
})
export class ParentComponent {
  constructor(public service: SimpleService, public first: FirstServiceService){
  }
}
