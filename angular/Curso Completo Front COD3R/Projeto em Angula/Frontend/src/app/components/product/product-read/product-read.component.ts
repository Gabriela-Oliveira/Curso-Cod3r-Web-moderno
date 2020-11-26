import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action'] //add os atributos na tabela
  
  constructor(private productService: ProductService) { } //INJETA O PRODUTO

  ngOnInit(): void {
    this.productService.read().subscribe(products => { //MOSTRA OS PRODUTOS
      this.products = products
    })
  }

}
