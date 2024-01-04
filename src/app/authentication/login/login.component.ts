import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, UntypedFormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginForm!: UntypedFormGroup;
  submitted : boolean = false;
  loginDetails :any = {};
  constructor(private fb:FormBuilder,
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  get f() {
return this.loginForm.controls;
  }


  login() {
 this.submitted = true;
 if(this.loginForm.invalid) {
  return
 }

 this.authService.authUser(this.loginForm.value).subscribe((res:any) => {
  this.loginDetails = res;
  
    alert('User Login Successfull.');
    this.router.navigate(['instruction'])
 }, (error) => {
  if(error) {
alert(error)
  }
 })
  }
}
