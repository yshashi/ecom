import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms"
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,  private registerService: RegisterService){

  }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      address: [''],
      city: [''],
      state:[''],
      zip: ['', Validators.pattern(/^\d+$/)]
    })
  }

  signup(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value);
      let registerObj = this.signupForm.value;
      this.registerService.postUser(registerObj).subscribe({
        next: () => {
          alert("User Registered Successfully")
        },
        error: () => {
          alert("Something went wrong!")
        }
      })
    }else{
      alert("form is invalid")
    }
  }
}
