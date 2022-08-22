import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule , {logger: ['log','error','warn','debug','verbose']});
 app.useGlobalPipes(new ValidationPipe());
 app.enableVersioning({
      type: VersioningType.HEADER,
      header: 'version'
 });

 const config = new DocumentBuilder()
    .setTitle('Registration form')
    .setDescription('Incresco is hiring')
    .setVersion('1.0')
    //.addTag('Students')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}
export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
