import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { HelpersService } from 'src/app/shared/services/helpers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isError = false;
  message: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private helperService: HelpersService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  // convenience getter for easy access to form fields
  get f(): any {
    return this.loginForm.controls;
  }

  createForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(8),
        Validators.pattern("^[0-9]*$"),
      ]]

    });
  }
  /** WARN: don't delete this metthod
     * it's a fake call just comment this method and write you own
     */
  getUser(): Observable<any> {
    const url = `${environment.fakeBaseUrlHttps}user.json`;
    return this.http.get(url).pipe(delay(500));
  }

  logIn() {
    if (this.loginForm.invalid) {
      this.submitted = true;
      return;
    }
    else {

      this.getUser().subscribe(response => {

        if (response.passowrd === this.f.password.value && response.userName === this.f.userName.value) {
          this.helperService.setToke = "true";

          this.isError = false;
          this.message = "";
          //redirect url 
          this.router.navigate(['/dashboard']);
        }
        else {
          this.isError = true;
          this.message = "User Undefined";
        }
      });
    }




    //this.showAlert();




    // const { email, password } = this.loginForm.value;


    // this.loginService.externalLogin(login)
    //   .subscribe((response: any) => {

    //     if (response) {
    //       this.showMessage = response.errorMessage;
    //       if (this.showMessage) {
    //         this.message = response.errorMessage;
    //         this.loginForm.enable();
    //         this.isInternalDisable = false;

    //       } else {
    //         if(response.isMfaCodeGenrateSuccess){
    //           this.showAlert();
    //         }

    //       }
    //     }
    //   }, (err) => {
    //     err.SourceClass = this.route.routeConfig.component.name;
    //     this.loginForm.enable();
    //     this.isInternalDisable = false;
    //     throw err;

    //   });

  }
}

