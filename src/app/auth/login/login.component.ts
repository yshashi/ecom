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
  constructor(private registerService : RegisterService){

  }
  ngOnInit(): void {
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
    console.log(form.value)
  }
}
