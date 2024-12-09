import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { CardComponent } from '../../Shared/card/card.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() items: string[] = [];
  @ViewChild('cardComp') cardCompRef! : CardComponent;
  constructor(){
    // console.log('Constructor ViewChild '+this.cardCompRef);
  }
  ngOnInit(){
    // console.log('ngOnInit ViewChild '+this.cardCompRef);

  }

  ngAfterViewInit(){
    // console.log('ngAfterViewInit ViewChild:', JSON.stringify(this.cardCompRef));

  }
}
