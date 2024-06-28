import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [RouterModule, CommonModule]
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}


