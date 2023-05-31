import { Component } from '@angular/core';
import { products } from 'src/app/datas/product';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  product: Product | undefined
  value: string = ""
  search(): void {
    this.product = products.find(item => item.name.toLowerCase() == this.value.toLowerCase())
    
  }
}
