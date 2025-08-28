import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(helmet());
  app.enableCors({
    origin: ["http://localhost:5173"], //vue dev env
  });

  await app.listen(PORT);
  console.log(`Nestjs server running at: ${PORT}`)
}
bootstrap();
