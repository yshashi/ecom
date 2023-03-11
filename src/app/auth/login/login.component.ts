import { Router } from '@angular/router';
import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userModel= {
    email:'',
    password:''
  };
  constructor(private registerService : RegisterService, private router : Router){

  }
  ngOnInit(): void {
    localStorage.clear();
    this.registerService.getUsers().subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  login(form:NgForm){
    if (form.valid){
      localStorage.setItem('token', 'eyhdjkkaayejagffsdkjkjs-sdjbhsghdksdd-sds');
      this.router.navigate(['home'])
    }else{
      alert("Form is invalid")
    }
  }
}
