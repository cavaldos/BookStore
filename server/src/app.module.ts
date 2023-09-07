import { Module } from '@nestjs/common';
import { DatabaseConnect } from 'src/config/database.connect';
import { BookModule } from 'src/book/book.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    DatabaseConnect,
    BookModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
