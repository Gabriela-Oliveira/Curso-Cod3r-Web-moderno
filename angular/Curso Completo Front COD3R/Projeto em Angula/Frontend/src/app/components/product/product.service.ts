//ONDE IMPLEMENTAMOS A LOGICA MAIS ELABORADA DE CADA COMPONENTE RELACIONADO AO PRODUTO

import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar"; //ALERTA
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "http://localhost:3001/products"; //FAZ A REQUISIÇÃO PARA A API

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void { //CHAMA A FUNÇÃO QUE FOI CRIADA EM PRODUCT-CREATE.COMPONENTS.TS
    this.snackBar.open(msg, "X", { // O X APARECE NO ALERTA PARA FECHAR
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(product: Product): Observable<Product> { //OBSERVA O PRODUTO QUANDO FOR CRIADO
    return this.http.post<Product>(this.baseUrl, product).pipe( //MANDA UMA REQUISIÇÃO PARA A API
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Product[]> { //LÊ UM ARRAY DE PRODUTOS
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
