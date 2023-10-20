import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Replace with your allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Set this to true if you need to allow credentials (cookies, authorization headers, etc.)
  });
  await app.listen(3000);
 
}
bootstrap();
