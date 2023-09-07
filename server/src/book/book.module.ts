import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';

import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './models/book.schema';
import { BookRepository } from './book.reponsitories';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookService, BookRepository],
})
export class BookModule {}
