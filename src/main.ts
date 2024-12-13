import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Get configuration values from ConfigService
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: configService.get<string>('CORS_ORIGIN'),
    methods: configService.get<string>('CORS_METHODS'),
    allowedHeaders: configService.get<string>('CORS_HEADERS').split(','),
    credentials: configService.get<boolean>('CORS_CREDENTIALS'),
  });

  const port = configService.get<number>('PORT') ?? 5000;
  await app.listen(port);
}
bootstrap();














// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//    // Enable CORS
//    app.enableCors({
//     // origin: ['http://example.com', 'http://another-origin.com'],
//     origin: '*', // Allow all origins
//     methods: 'GET,PUT,POST,DELETE',
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true, // Allow cookies or credentials
//   });

//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();
