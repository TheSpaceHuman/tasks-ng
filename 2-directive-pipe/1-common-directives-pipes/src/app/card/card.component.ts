import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../mocks/products';

@Component({
  selector: 'app-shop-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public product: IProduct | undefined;

  @Output()
  public addToCart: EventEmitter<IProduct> = new EventEmitter();

  public addProduct() {
    this.addToCart.emit(this.product)
  }
}
