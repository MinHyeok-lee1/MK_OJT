import {
  Module
} from '@nestjs/common';
import {
  ToysModule
} from './toys/toys.module';
import {
  MongooseModule
} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Toy, ToySchema } from './toys/toy.schema';
import { ToysService } from './toys/toys.service';


// const uri = "mongodb+srv://kfdd6630:C6xjaUX2e7TVkW!@cluster0.exm9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

@Module({
  imports: [
    ToysModule,
    MongooseModule.forRoot('mongodb://localhost:27017/demo'),
    MongooseModule.forFeature([{name: Toy.name, schema: ToySchema}])
  ],
  controllers: [AppController],
  providers: [AppService, ToysService],
})
export class AppModule {}