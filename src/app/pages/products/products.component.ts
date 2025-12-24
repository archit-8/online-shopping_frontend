import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categories: string[] = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Snacks'];
  selectedCategory = 'All';

  constructor(private ps: ProductService) {}

  ngOnInit(): void {
    this.products = this.ps.getProducts();
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
