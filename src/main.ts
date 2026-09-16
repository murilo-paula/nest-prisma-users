import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
  new ValidationPipe({
      whitelist: true, // Remove propriedades do corpo da requisição que não estão no DTO
      forbidNonWhitelisted: true, // Bloqueia e joga erro se enviarem propriedades não permitidas
      transform: true, // Transforma os tipos de dados automaticamente (ex: string para number)
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
