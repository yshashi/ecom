import { ProductService } from './../services/product.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, AfterViewInit{

  productDetails!: any;
  productId!: any;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }
  ngAfterViewInit(): void {
    this.getProductById(this.productId);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res=>{
      this.productId = Number(res['id']);

    });



  }

  getProductById(id:any){
    this.productService.getById(id)
    .subscribe({
      next:(res)=>{
        this.productDetails = res;
        console.log(this.productDetails);
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
