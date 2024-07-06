import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { enviroments } from './enviroments';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Evitar el error de protocolo cruzado (htto/https)
  app.enableCors();
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(process.env.PORT || 3000);
  console.log(`Ambiente de ejecución ${process.env.NODE_ENV}`);
  console.log(`Servidor corriendo en puerto: ${process.env.PORT}`);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
