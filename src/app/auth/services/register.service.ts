import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class RegisterService {

  private baseUrl: string = "http://localhost:3000/registerList"
  constructor(private http: HttpClient) { }

  postUser(registerObj: any) {
    return this.http.post<any>(this.baseUrl, registerObj);
  }

  getUsers(){
    return this.http.get<any>(this.baseUrl);
  }

  getUserById(id: number){

  }

  deleteUser(id: number){

  }

  updateUser(id: number, updateObj : any){

  }


}
