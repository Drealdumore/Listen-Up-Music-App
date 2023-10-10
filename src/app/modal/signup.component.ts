import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { NgClass } from '@angular/common';

@Component({
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  email: string = '';
  pass: string = '';
  signUpForm!: FormGroup;
  private userMail!: FormControl;
  private nickName!: FormControl;
  private userKey!: FormControl;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Sign Up
    this.userMail = new FormControl('', [
      Validators.required,
    ]);
    this.nickName = new FormControl(null, [Validators.required]);
    this.userKey = new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]);

    this.signUpForm = new FormGroup({
      userMail: this.userMail,
      nickName: this.nickName,
      userKey: this.userKey,
    });
  }

  closeModal() {
    this.router.navigate(['/home']);
  }

  goToLogin() {
    setTimeout(() => {
      this.router.navigate(['/auth/login']);
    }, 200);
  }

  submit() {
    // this.router.navigate(['/auth/login']);
    // this.authService.register(this.signUpForm.value)
    this.authService.register(this.userKey.value, this.userMail.value);
    console.log(this.userKey.value, this.userMail.value);
  }
}
