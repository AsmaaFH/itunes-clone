import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-model-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reactive-model-form.component.html',
  styleUrl: './reactive-model-form.component.scss',
})
export class ReactiveModelFormComponent implements OnInit {
  searchField: FormControl = new FormControl();
  searches: string[] = [];

  onChange(event: Event) {
    // const inputElement = event.target as HTMLInputElement;
    // let value = inputElement.value;
    // this.searches.push(value);
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .subscribe(term => {
          this.searches.push(term);
        });
  }
}
