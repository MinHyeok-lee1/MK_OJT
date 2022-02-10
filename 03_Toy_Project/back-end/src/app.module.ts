import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import {
  MiddlewareConsumer,
  Module, NestModule
} from '@nestjs/common';
import {
  MongooseModule
} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, UserSchema } from './users/models/user.entity';
import { LoggerMiddleware } from './middleware/logger.middleware';

const uri = "mongodb://mk2:mk3486@3.36.252.198:9003/mkDB";

@Module({
  imports: [
    MongooseModule.forRoot(uri),
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}