import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: 'app-model-driven-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.scss'],
})
export class ModelDrivenFormComponent implements OnInit {
  langs: string[] = ['English', 'French', 'German'];

  myForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl("", Validators.required),
        lastName: new FormControl("", Validators.required),
      }),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*"),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      language: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // console.log("Form Submitted!");
      // console.log(this.myForm.value);
      this.myForm.reset();
    }else{
      // console.log(this.myForm.value);
    }
  }
}
