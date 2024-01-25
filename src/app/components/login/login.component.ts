import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  Username: string = 'Abhishek@123';
  storeValue: any = '';

  constructor(private router: Router) {}

  ngOnInit() {

  }

  login() {
    this.router.navigateByUrl('/users');
  }

  onClick() {
    this.storeValue = this.Username;
    console.log(this.storeValue);
  }
}
