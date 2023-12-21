import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { books as mockedBooks } from '../../book.mocks';

@Component({
  selector: 'kg-book-detailed',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './book-detailed.component.html',
  styleUrl: './book-detailed.component.scss',
})
export default class BookDetailedComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public book: any;

  @Input() set id(value: string) {
    this.getBook(value).then((book) => {
      this.book = book;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getBook(id: string): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockedBooks.find((book) => book.id === id));
      }, 1);
    });
  }
}
