import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
  }
  obj = {
    name: "Sashi",
    salary:12000
  }
  title = 'E-commerce';
  userName!: string;
  receiveData(event:string){
    console.log(event);
    this.userName = event;

  }
}
