import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(
    private ps: ProductService,
    public cart: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.ps.getProductById(id);
  }
}
