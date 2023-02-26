import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'', component:HomeComponent,

  children:[
    {path:'', redirectTo:'product', pathMatch:'full'},
    { path: 'product', component: ProductComponent },
    { path: 'about', component: AboutusComponent },
    { path: 'contact', component: ContactComponent },
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
