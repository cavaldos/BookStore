import { Module } from '@nestjs/common';
import { DatabaseConnect } from 'src/config/database.connect';
import { BookModule } from 'src/book/book.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    DatabaseConnect,
    BookModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
