import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
private baseUrl: string = 'http://localhost:3000'
constructor(private http: HttpClient) { }

getProducts(){
  return this.http.get<any>(`${this.baseUrl}/productList`);
}

getById(id: any){
  return this.http.get<any>(`${this.baseUrl}/productList/${id}`)
}

}
