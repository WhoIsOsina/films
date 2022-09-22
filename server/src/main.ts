import { AppDataSource } from './data-source';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  AppDataSource.initialize()
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:3000' })
  await app.listen(5000, () => {
    console.log(`SERVER IS STARTED ON ${PORT} PORT`);
  });
}
bootstrap();
