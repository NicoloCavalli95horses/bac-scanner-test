import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'dist'),
      exclude: ['/api*'],
      serveStaticOptions: {
        fallthrough: false,
      },
    }),
    ImagesModule,
  ],
})
export class AppModule {}
