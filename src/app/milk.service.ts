import { Injectable } from '@angular/core';

@Injectable()
export class MilkService {

  constructor() { }

  getMilk() {
    return "Milk not send successfully";
  }

  getRole(){

    return "Admin";
  }
}
