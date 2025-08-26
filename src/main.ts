import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const whitelist = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://bft-test-vue.netlify.app/',
    'https://bft-test-react.netlify.app/',
    'https://bft-test-angular.netlify.app/',
    'https://bft-test-svelte.netlify.app/',
  ];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS not allowed'), false);
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true       
  });

  await app.listen(3000);
}
bootstrap();
