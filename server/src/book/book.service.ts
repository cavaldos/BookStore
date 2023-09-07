import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './models/book.schema';
@Injectable()
export class BookService {
  private books: Book[] = [];
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}
  async getAllBooks() {
    const books = await this.bookModel.find().exec();
    return books;
  }
  createBook(book): string {
    console.log('createBook');
    return 'Hello World!';
  }
  deleteBook(): string {
    console.log('deleteBook');
    return 'Hello World!';
  }
  getBookById(): string {
    console.log('gerBookById');
    return 'Hello World!';
  }
  updateBook(): string {
    console.log('updateBook');
    return 'Hello World!';
  }
}
