import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ImagesModule } from './images/images.module';
import { FrontendFallbackMiddleware } from './frontend-fallback.middleware';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'dist'),
      exclude: ['/api/*path'],
    }),
    ImagesModule,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FrontendFallbackMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
