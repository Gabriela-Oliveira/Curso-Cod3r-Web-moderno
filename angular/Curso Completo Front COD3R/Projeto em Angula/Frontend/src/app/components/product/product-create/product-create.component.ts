import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, //injeção de dependencia
      private router: Router) { } // quando passamos o router no construtor o angula se encarrega 
      //de criar a rota ELE INJETA UM ELEMENTO DO TIPO ROUTER

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => { //AVISA QUANDO O PRODUTO JÁ FOI CRIADO E EXECUTA A FUNÇÃO
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products']) //cria a rota já direcionando para o products
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
