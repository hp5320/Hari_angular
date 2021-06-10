import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: any;
    submitted:boolean = false;
    user: any;
    userArray: Array<any> = [];

  constructor(private formBuilder: FormBuilder) { } 

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({

      enterRegisterName: ['',Validators.required],
      enterRegisterEmail: ['',[Validators.required, Validators.email]],
      enterRegisterPass:['',[Validators.required,Validators.minLength(4)]],
      enterRegisterConfirmPass:['',Validators.required]

    });
  }

  get fregister() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

  let email = this.registerForm.controls.enterRegisterEmail.value;
  let password = this.registerForm.controls.enterRegisterPass.value;
  let name = this.registerForm.controls.enterRegisterName.value;
  this.user = {
    name: name,
    email: email,
    password: password,
  };
  this.userArray.push(this.user);
  console.log(this.userArray);

  // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
}

}
