import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrl: './newcomp.component.css'
})
export class NewcompComponent {

  myForm!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOninit() {

    this.myForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(['', Validators.required, Validators.minLength(8)])
  });
  }

  validateForm() {
    // if(this.myForm.get('password')?.value.length < 8) {
    //   this.isSubmitted = true;
    // }
  }

}
