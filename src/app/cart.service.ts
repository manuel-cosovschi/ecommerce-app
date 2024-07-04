import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemCarrito } from './item-carrito';  // Importa desde el archivo correcto

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: ItemCarrito[] = [];
  private itemsSubject: BehaviorSubject<ItemCarrito[]> = new BehaviorSubject(this.items);

  obtenerItems(): Observable<ItemCarrito[]> {
    return this.itemsSubject.asObservable();
  }

  agregarAlCarrito(item: ItemCarrito): void {
    const itemExistente = this.items.find(i => i.id === item.id);
    if (itemExistente) {
      itemExistente.cantidad += 1;
    } else {
      this.items.push(item);
    }
    this.itemsSubject.next(this.items);
  }

  eliminarDelCarrito(item: ItemCarrito): void {
    this.items = this.items.filter(i => i.id !== item.id);
    this.itemsSubject.next(this.items);
  }
}





