import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
config();

const back_up =
  'mongodb+srv://Khanh:21126072@khanh.spi9com.mongodb.net/test?retryWrites=true&w=majority';

const uri = process.env.MONGODB || back_up;

@Module({
  imports: [MongooseModule.forRoot(uri, {})],
})
export class DatabaseConnect implements OnModuleInit {
  async onModuleInit() {
    try {
      await MongooseModule.forRootAsync({
        useFactory: () => ({
          uri,
        }),
      });
      console.log('MongoDB connection successful!');
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  }
}
