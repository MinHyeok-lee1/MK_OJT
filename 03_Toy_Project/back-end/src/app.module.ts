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


const uri = "mongodb+srv://kfdd6630:C6xjaUX2e7TVkW!@cluster0.exm9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

@Module({
  imports: [ToysModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test', {
      connectionName: 'toys',
    }),
    MongooseModule.forRoot(uri, {
      connectionName: 'toy',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}