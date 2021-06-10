import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    registerForm: any;
    submitted:boolean = false;

    loginForm: any;
    loginSubmitted:boolean = false;

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
    this.loginForm=this.formBuilder.group({

      enterLoginEmail: ['',[Validators.required, Validators.email]],
      enterLoginPass:['',[Validators.required,Validators.minLength(4)]]});   
       
  }

  // convenience getter for easy access to form fields
  get fregister() { return this.registerForm.controls; }
  get flogin() { return this.loginForm.controls; }

  onSubmit() {
      // this.submitted = true;

      // // stop here if form is invalid
      // if (this.registerForm.invalid) {
      //     return;
      // }

      // alert('SUCCESS!! :-)\n\n')

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

  onloginSubmit(){
    console.log("hp");
    
    // this.LoginSubmitted = true;
    //   if(this.loginForm.invalid){
    //     return;
    //   }
    //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
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

 


    // let user: object;
    // let userArray: Array<any> = [];
    // let counter : number = 0;
    // let form = document.getElementById('form-register') as HTMLFormElement;

    // form.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   let email = document.getElementById('email') as HTMLInputElement;
    //   let password = document.getElementById('password') as HTMLInputElement;
    //   let name = document.getElementById('name') as HTMLInputElement;
    //   user = {
    //     name: name.value,
    //     email: email.value,
    //     password: password.value,
    //   };
    //   userArray.push(user);
    //   console.log(userArray);
    // });


    // let formLogin = document.getElementById('form-login') as HTMLFormElement;

    // formLogin.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   let email = document.getElementById('email-login') as HTMLInputElement;
    //   let password = document.getElementById(
    //     'password-login'
    //   ) as HTMLInputElement;

    //   userArray.forEach((element,idx) =>{
    //     if(element.email === email.value){
    //       if (element.password === password.value) {
    //            counter += 1 
    //            alert("logged in")
              
              
    //       }
    //       else{
    //         alert("wrong password")
    //         return;
    //       }
    //     }

    //     if(idx === userArray.length-1 && counter === 0){
    //         alert('invalid credentials');
    //     }

    //   })
      
    // });
}
//             ******************************* sai code  ****************************
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit {
//   user: any;
//   registerForm: any;
//   loginForm: any;
//   userArray: Array<any> = [];
//   registerSubmitted: boolean = false;
//   loginSubmitted: boolean = false;

//   constructor(private formBuilder: FormBuilder) {
//     // let registerForm: FormGroup;
//     // let submitted: boolean = false;
//   }
//   ngOnInit(): void {
//     this.registerForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(4)]],
//       confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
//     });
//     this.loginForm = this.formBuilder.group({
//       loginEmail: ['', [Validators.required, Validators.email]],
//       loginPassword: ['', Validators.required],
//     });
//   }

//   get fg() {
//     return this.registerForm.controls;
//   }
//   get fl() {
//     return this.loginForm.controls;
//   }

//   onSubmitRegister() {
//     this.registerSubmitted = true;
//     console.log(this.registerForm);

//     let email = this.registerForm.controls.email.value;
//     let password = this.registerForm.controls.password.value;
//     let name = this.registerForm.controls.name.value;
//     this.user = {
//       name: name,
//       email: email,
//       password: password,
//     };
//     this.userArray.push(this.user);
//     console.log(this.userArray);

//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//       return;
//     }

//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
//   }
//   onSubmitLogin() {
//     console.log(
//       'came here to onsubmit login password',
//       this.loginForm.controls
//     );
//     this.loginSubmitted = true;
//     let counter = 0;
//     // stop here if form is invalid
//     let email = this.loginForm.controls.loginEmail.value;
//     let password = this.loginForm.controls.loginPassword.value;
//     console.log(password);
//     this.userArray.forEach((element, idx) => {
//       if (element.email === email) {
//         if (element.password == password) {
//           counter += 1;
//           alert('logged in');
//         } else {
//           alert('wrong password');
//           return;
//         }
//       }

//       if (idx === this.userArray.length - 1 && counter === 0) {
//         alert('invalid credentials');
//       }
//     });

//     if (this.loginForm.invalid) {
//       return;
//     }
//   }