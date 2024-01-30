import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { CredentialsService } from '../shared-module/Services/credentials.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  constructor(private postLink: CredentialsService) {}

  UserProfileDetails = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    useremail: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      (c: AbstractControl) => Validators.required(c),
      Validators.required,
      // Validators.minLength(5),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,}/
      ),
    ]),
    confrimpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{6,}/
      ),
    ]),
  });

  onSubmit() {
    console.log(this.UserProfileDetails.value);
    this.postLink
      .registerUser(this.UserProfileDetails.value)
      .subscribe((registeredUserData: any) => {
        this.UserProfileDetails = registeredUserData;
      });
  }
}
