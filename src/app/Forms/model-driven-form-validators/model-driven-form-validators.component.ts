import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form-validators',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './model-driven-form-validators.component.html',
  styleUrl: './model-driven-form-validators.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ModelDrivenFormValidatorsComponent {
  langs: string[] = ['English', 'French', 'German'];

  myForm: FormGroup = new FormGroup({});

  firstName: FormControl = new FormControl('');
  lastName: FormControl = new FormControl('');
  email: FormControl= new FormControl('');
  password: FormControl = new FormControl('');
  language: FormControl = new FormControl('');

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);
  }

  createForm() {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit(){
    console.log(this.myForm.value)
    console.log(this.myForm.get('password'));
    console.log((this.myForm.get('name'))?.get('firstName'));
    console.log(this.myForm.get('email'));

  }
}
