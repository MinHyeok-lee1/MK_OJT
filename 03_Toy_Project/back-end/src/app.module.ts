import {
  MiddlewareConsumer,
  Module, NestModule
} from '@nestjs/common';
import {
  MongooseModule
} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Toy, ToySchema } from './models/toy.entity';
import { ToysService } from './toys/toys.service';
import { ToysController } from './toys/toys.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';


// const uri = "mongodb+srv://kfdd6630:C6xjaUX2e7TVkW!@cluster0.exm9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const uri = "mongodb://172.30.1.34:27017/nest";

@Module({
  imports: [
    MongooseModule.forRoot(uri),
    MongooseModule.forFeature([{name: Toy.name, schema: ToySchema}]),
  ],
  controllers: [AppController, ToysController],
  providers: [AppService, ToysService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}