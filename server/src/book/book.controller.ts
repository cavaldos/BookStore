import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}
  @Get('getallbooks')
  getAllBooks() {
    return this.bookService.getAllBooks();
  }
  @Post('createbook')
  
  createBook(@Body() book:any) {
   
    return this.bookService.createBook(book);
  }
  @Delete(':id')
  deleteBook() {
    return this.bookService.deleteBook();
  }

  @Get(':id')
  getBookById() {
    return this.bookService.getBookById();
  }
  @Put(':id')
  updateBook() {
    return this.bookService.updateBook();
  }
}
