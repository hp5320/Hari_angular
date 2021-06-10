import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

    loginForm: any;
    loginSubmitted:boolean = false;
    userArray: Array<any> = [];
    user: any;

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({

      enterLoginEmail: ['',[Validators.required, Validators.email]],
      enterLoginPass: ['',[Validators.required,Validators.minLength(4)]]});
  }

get flogin() { return this.loginForm.controls; }

onloginSubmit(){
  console.log("hp");
  this.loginSubmitted = true;
  let counter = 0;
  // stop here if form is invalid
  let email = this.loginForm.controls.enterLoginEmail.value;
  let password = this.loginForm.controls.enterLoginPass.value;
  console.log(password);
  this.userArray.forEach((element, idx) => {
    if (element.email === email) {
      if (element.password == password) {
        counter += 1;
        alert('logged in');
      } else {
        alert('wrong password');
        return;
      }
    }

    if (idx === this.userArray.length - 1 && counter === 0) {
      alert('invalid credentials');
    }
  });

  if (this.loginForm.invalid) {
    return;
  }
}
}
