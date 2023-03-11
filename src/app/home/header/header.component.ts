import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItem: any;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.productList.subscribe(res=>{
      console.log(res, "my cart items");
      this.totalItem = res.length
    })
  }

}
