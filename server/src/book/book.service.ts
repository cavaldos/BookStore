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
  async deleteBook(_id) {
    try {
      console.log("delete  user")
      // const result = await this.bookModel.deleteOne({ _id: bookId }).exec();
    } catch (err) {
      throw new NotFoundException('Could not find book.');
    }
  }
  async getBookById(_id) {
    try {

      const book = await this.bookModel.findById(_id).exec();
      return book;
    }catch (err) {
      throw new NotFoundException('Could not find book.');
    }
  }
  updateBook(): string {
    console.log('updateBook');
    return 'Hello World!';
  }
}
