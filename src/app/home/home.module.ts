import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductComponent } from './product/product.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { MyUpperCasePipe } from '../shared/myUpperCase.pipe';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    AboutusComponent,
    ContactComponent,
    ProductDetailComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    FormsModule,
  ],
  providers:[ProductService]
})
export class HomeModule { }
