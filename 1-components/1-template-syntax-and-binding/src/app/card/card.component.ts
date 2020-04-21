import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../mocks/products';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product: IProduct | undefined;
  @Output() addToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  public addProduct() {
    if(this.product?.status) {
      this.addToCart.emit(this.product);
    } else {
      alert('Данного товара нет в наличии!');
    }
  }
}
