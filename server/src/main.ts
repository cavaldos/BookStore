import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(
    cors({
      origin: '*', //  allow to server to accept request from different origin
      credentials: true, // allow session cookie from browser to pass through
    }),
  );
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000; // Lấy giá trị cấu hình cổng (port) hoặc sử dụng cổng mặc định 3000
  await app.listen(port, () => console.log(`Server started on port ${port}`));
}

bootstrap();
