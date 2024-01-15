import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialsService } from '../shared-module/Services/credentials.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private router: Router, private postLink: CredentialsService) {}

  passwordType: string = 'password';

  loginGroup = new FormGroup({
    useremail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginGroup.value);
    this.postLink.addAttendance(this.loginGroup).subscribe((userData: any) => {
      this.loginGroup = userData;
    });
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
