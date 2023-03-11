import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyUpperCasePipe } from './myUpperCase.pipe';
import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MyUpperCasePipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [],

  exports: [MyUpperCasePipe, FilterPipe, HttpClientModule, CommonModule]
})
export class SharedModule { }
