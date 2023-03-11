import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any[], searchTerm?: string): any {
    if(products.length === 0){
      return [];
    }
    if(!searchTerm){
      return products;
    }

    let filteredProduct = products.filter(item=>{
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return filteredProduct;

  }

}
