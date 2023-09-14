import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get('getall')
  getAllBooks() {
    return this.bookService.getAllBooks();
  }
  @Post('create')
  createBook(@Body() book: any) {
    return this.bookService.createBook(book);
  }
  @Delete(':id')
  deleteBook(@Param('id') _id: string) {
    return this.bookService.deleteBook(_id);
  }

  @Get(':id')
  getBookById(@Param('id') _id: string) {
    return this.bookService.getBookById(_id);
  }
  @Put(':id')
  updateBook() {
    return this.bookService.updateBook();
  }
}
