import { Injectable } from '@angular/core';

@Injectable()
export class NewspaperService {

  constructor() { }
  getNewspaper() {
    return "Paper provided";
  }
}
