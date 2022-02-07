import {
  Module
} from '@nestjs/common';
import {
  ToysModule
} from './toys/toys.module';
import {
  MongooseModule
} from '@nestjs/mongoose';
import {
  Mongoose
} from 'mongoose';

@Module({
  imports: [ToysModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}