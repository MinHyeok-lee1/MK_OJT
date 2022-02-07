import {
  Module
} from '@nestjs/common';
import {
  ToysModule
} from './toys/toys.module';

const dbInfo = 'mongodb://localhost:27017/test';
console.log(dbInfo)

@Module({
  imports: [ToysModule],
  controllers: [],
  providers: [],
})
export class AppModule {}