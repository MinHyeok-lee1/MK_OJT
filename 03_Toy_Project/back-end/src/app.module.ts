import {
  Module
} from '@nestjs/common';
import {
  MongooseModule
} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Toy, ToySchema } from './toys/toy.schema';
import { ToysService } from './toys/toys.service';
import { ToysController } from './toys/toys.controller';
import { ToysModule } from './toys/toys.module';


// const uri = "mongodb+srv://kfdd6630:C6xjaUX2e7TVkW!@cluster0.exm9u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017/test";

@Module({
  imports: [
    ToysModule,
    MongooseModule.forRoot('uri'),
    MongooseModule.forFeature([{name: Toy.name, schema: ToySchema}]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}