import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './models/book.schema';
import { BaseRepository } from 'src/base.reponsitory';

@Injectable()
export class BookRepository extends BaseRepository<Book> {
    constructor(@InjectModel('Book') private bookModel: Model<Book>) {
        super(bookModel);
    }
}
    