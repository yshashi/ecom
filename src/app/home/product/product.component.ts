import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any [] = [];
  searchTerm!: string;
  constructor(private productService: ProductService, private router: Router , private cartService: CartService){

  }
  ngOnInit(): void {
    this.getAllProducts();

  }

  getAllProducts(){
    this.productService.getProducts()
    .subscribe({
      next:(res)=>{
        this.products = res;
        console.log(this.products, "Products");
      },
      error:(err)=>{
        alert("something went wrong!!");
        console.log(err, "Error")
      }
    })
  }

  goto(id: any){
    this.router.navigate(['home/product-detail', id])
  }

  buy(row:any){
    console.log(row);
    this.cartService.addToCart(row);
  }

}
