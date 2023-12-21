import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { books as mockedBooks } from './book.mocks';

@Component({
  selector: 'kg-books',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export default class BooksComponent {
  books = mockedBooks;
}
