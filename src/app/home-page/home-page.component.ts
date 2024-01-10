import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {}
  passwordType: string = 'password';

  loginGroup = new FormGroup({
    useremail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12),
    ]),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginGroup.value);
  }

  showPasswrd() {
    if (this.passwordType == 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  navigateTo() {
    this.router.navigate(['Register']);
  }
}
