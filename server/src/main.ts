import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ; // Lấy giá trị cấu hình cổng (port) hoặc sử dụng cổng mặc định 3000
  await app.listen(port, () => console.log(`Server started on port ${port}`));
}

bootstrap();
