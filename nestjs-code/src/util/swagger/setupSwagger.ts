import { INestApplication } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { appendFile } from 'fs'

/**
 * Swagger 세팅
 * 
 * @param {INestApplication} appendFile
 */

export function setupSwagger(app: INestApplication): void{
    const options = new DocumentBuilder()
        .setTitle('NestJS Study API Docs')
        .setDescription('NestJS Study API description')
        .setVersion('1.0.0')
        .addTag('First')
        .build();
    
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);
}